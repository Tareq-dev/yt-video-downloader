import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="py-5 bg-black mt-10 text-white flex justify-center">
      <div>
        <div className="flex mt-2">
          <a className="mx-2" href="">
            <img
              className="w-6"
              src="https://i.ibb.co/K5cYZZs/icons8-linkedin-48.png"
              alt="Linkedin"
            />
          </a>
          <a className="mx-2" href="">
            <img
              className="w-6"
              src="https://i.ibb.co/mzvZv6L/icons8-github-48.png"
              alt="github"
            />
          </a>
          <a className="mx-2" href="">
            <img
              className="w-6"
              src="https://i.ibb.co/gFgRxG2/icons8-facebook-48.png"
              alt="Facebook"
            />
          </a>
        </div>
        <p className="text-center mt-5 text-sm">
          Copyright &copy; trk {currentYear}
        </p>
      </div>
    </div>
  );
};

export default Footer;
