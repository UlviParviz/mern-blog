import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";


const SignIn = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({})

  const {loading, error: errorMessage} = useSelector(state => state.user)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value.trim()})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!formData.password || !formData.email){
      return dispatch(signInFailure('Please fill out all fields'))
    }

    try {

      dispatch(signInStart())
      const data = await axios.post('/api/auth/signin',formData)

      if(data.success === false){
        dispatch(signInFailure(data.message))
      }
      if(data.status === 200){
        dispatch(signInSuccess(data))
        navigate('/')
      }
    } catch (error) {

      dispatch(signInFailure(error.message))

    }
  }


  return (
    <div className="min-h-screen flex items-center">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 ">
        {/*left*/}
        <div className="flex-1 ">
          <Link
            to={`/`}
            className="font-bold dark:text-white text-4xl flex justify-center lg:inline"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Thirteen
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5 font-semibold flex justify-center">
            This is a demo project. You can sign in with your email and password or with your Google account
          </p>
        </div>
        {/*right*/}
        <div className="flex-1" >
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <Label value= 'Your Email'/>
                    <TextInput type='email' placeholder="name@company.com" id="email" onChange={handleChange}/>
                </div>
                <div className="flex flex-col gap-2">
                    <Label value= 'Your Password'/>
                    <TextInput type='password' placeholder="Password" id="password" onChange={handleChange}/>
                </div>
                <Button gradientDuoTone='purpleToPink' type="submit">
                    {
                      loading ? (
                        <>
                        <Spinner size='sm'/>
                        <span className="pl-3">Loading...</span>

                        </>
                      ) : 'Sign In'
                    }
                </Button>
                <OAuth/>
            </form>
            <div className="flex gap-2 text-sm mt-5">
                <span>Don't have an account?</span>
                <Link className="text-blue-500 font-semibold" to={'/sign-up'}>
                    Sign Up
                </Link>
            </div>
            {
              errorMessage && (
                <Alert className='mt-5 ' color='failure'>
                  {errorMessage}
                </Alert>
              )
            }
        </div>
      </div>
    </div>
  );
};

export default SignIn;
