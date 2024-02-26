import { Button } from 'flowbite-react'
import React from 'react'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'


const OAuth = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoogleClick = async () =>{

        const auth = getAuth(app)

        const provider = new GoogleAuthProvider()

        provider.setCustomParameters({prompt: 'select_account'})

        try {
            
            const resultFromGoogle= await signInWithPopup(auth, provider)

            const data = await axios.post('/api/auth/google',{
                name: resultFromGoogle.user.displayName,
                email: resultFromGoogle.user.email,
                googlePhotoUrl: resultFromGoogle.user.photoURL
            })

            if(data.status === 200){

                dispatch(signInSuccess(data))
                navigate('/')
            }

        } catch (error) {
            console.log(error);
        }

    }

  return (
    <Button type='button' gradientDuoTone={'pinkToOrange'} outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
        Continue with Google
    </Button>
  )
}

export default OAuth