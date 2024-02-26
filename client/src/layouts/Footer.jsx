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
    <Footer container className="text-center border border-t-8 border-tale-500">
      <div className="w-full max-w-7xl mx-auto ">
        <div className=" w-full justify-between flex items-stretch gap-3 flex-col justify-center lg:grid lg:grid-cols-2">
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
                <Footer.Link><Link to={'/about'}>Thirteen Blog</Link></Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="flex flex-col items-start">
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup className="flex flex-col items-start">
                <Footer.Link
                  href="https://github.com/UlviParvizoghlu"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="flex flex-col items-start">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup className="flex flex-col items-start">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
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
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon
              href="https://github.com/UlviParvizoghlu"
              target="blank"
              icon={BsGithub}
            />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
