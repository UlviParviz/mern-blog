import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

const FooterComp = () => {
  return (
    <Footer container className="text-center border-t">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full justify-between flex items-stretch gap-3 flex-col justify-center lg:grid lg:grid-cols-2">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Thirteen
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="flex flex-col items-start">
              <Footer.Title title="About" />
              <Footer.LinkGroup className="flex flex-col items-start">
                <Link to={'/about'}>Thirteen Blog</Link>
              </Footer.LinkGroup>
            </div>
            <div className="flex flex-col items-start">
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup className="flex flex-col items-start">
                <a
                  href="https://github.com/UlviParvizoghlu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </Footer.LinkGroup>
            </div>
            <div className="flex flex-col items-start">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup className="flex flex-col items-start">
                <a href="#">Privacy Policy</a>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Ulvi Parvizoghlu"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 justify-center">
            <a href="#"><BsFacebook /></a>
            <a href="#"><BsInstagram /></a>
            <a href="#"><BsTwitter /></a>
            <a href="https://github.com/UlviParvizoghlu" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
            <a href="#"><BsDribbble /></a>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
