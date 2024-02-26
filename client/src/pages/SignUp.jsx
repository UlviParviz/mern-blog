import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import OAuth from "../components/OAuth";

const SignUp = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value.trim()})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!formData.username || !formData.password || !formData.email){
      return setErrorMessage('Please fill out all fields')
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const data = await axios.post('/api/auth/signup',formData)

      if(data.success === false){
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if(data.status === 200){
        navigate('/sign-in')
      }
    } catch (error) {
      return setErrorMessage(error.message)
      setLoading(false)

    }
  }

  console.log(formData);

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
            This is a demo project. You can sign up with your email and password or with your Google account
          </p>
        </div>
        {/*right*/}
        <div className="flex-1" >
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <Label value= 'Your Username'/>
                    <TextInput type='text' placeholder="Username" id="username" onChange={handleChange}/>
                </div>
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
                      ) : 'Sign Up'
                    }
                </Button>
                <OAuth/>
            </form>
            <div className="flex gap-2 text-sm mt-5">
                <span>Have an account?</span>
                <Link className="text-blue-500 font-semibold" to={'/sign-in'}>
                    Sign In
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

export default SignUp;
