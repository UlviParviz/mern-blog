import React from "react";
import GithubLogo from "../assets/images/github.png";
import LinkedinLogo from "../assets/images/linkedin.png";

const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col p-[5%]">
      <h1 className="text-3xl md:text-4xl font-extrabold">Contact Us</h1>
      <div className="flex justify-center items-center p-[10%] ">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="w-full sm:w-[50%] md:w-[40%] flex flex-col gap-6 items-center justify-center border-2 shadow-md rounded-lg p-5">
            <img className="w-full" src={GithubLogo} alt="" />
            <a
              href="https://github.com/UlviParvizoghlu"
              className="relative inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 dark:bg-white dark:text-black font-bold rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Github Profile</span>
            </a>
          </div>
          <div className="w-full sm:w-[50%] md:w-[40%] flex flex-col gap-6 items-center justify-center  border-2 shadow-md rounded-lg p-5">
            <img className="w-full" src={LinkedinLogo} alt="" />
            <a
              href="https://www.linkedin.com/in/ulvi-ismayilov-2a2261272/"
              className="relative inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 dark:bg-white dark:text-black font-bold rounded-lg group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Linkedin Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
