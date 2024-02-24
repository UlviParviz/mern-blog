import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
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
            <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <Label value= 'Your Username'/>
                    <TextInput type='text' placeholder="Username" id="username"/>
                </div>
                <div className="flex flex-col gap-2">
                    <Label value= 'Your Email'/>
                    <TextInput type='text' placeholder="name@company.com" id="email"/>
                </div>
                <div className="flex flex-col gap-2">
                    <Label value= 'Your Password'/>
                    <TextInput type='text' placeholder="Password" id="password"/>
                </div>
                <Button gradientDuoTone='purpleToPink' type="submit">
                    Sign Up
                </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
                <span>Have an account?</span>
                <Link className="text-blue-500 font-semibold" to={'/sign-in'}>
                    Sign In
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
