/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import Logo from "../../assets/images/darklogo.png";
import "./style.css";
import { FaChevronRight, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Network from "../../assets/images/light-network.png";
const linksList = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Create Job",
    link: "/create-job",
  },
  {
    text: "My Jobs",
    link: "/my-jobs",
  },
  {
    text: "Help",
    link: "/help",
  },
];

const socialLinks = [
  {
    icon: <FaTelegramPlane />,
    link: "#",
  },
  {
    icon: <FaTwitter />,
    link: "#",
  },
  {
    icon: <AiFillInstagram />,
    link: "#",
  },
];

const Index = () => {
  return (
    <footer>
      <div className="py-12  bg-dark text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-x-8">
          <div>
            <img src={Logo} alt="" />
            <p className="text-sm mt-8">
              Fullfill Your Wishes with posting the job with US.
            </p>
            <div className="flex text-xs text-gray-400 mt-10">
              <span>Privacy Policy</span>
              <span className="footer-divider mx-4"></span>
              <span>Terms & Conditions</span>
            </div>
          </div>
          <div className="md:ml-10">
            <p className="font-bold">Quick Links</p>
            <ul className="mt-4">
              {linksList.map((val, i) => (
                <li key={i}>
                  <Link
                    to={val.link}
                    className="grid grid-flow-col  items-center gap-x-2 justify-start mb-2 hover:text-primary transition-all"
                  >
                    <span>
                      <FaChevronRight />
                    </span>{" "}
                    <span>{val.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold">Supported Networks</p>
            <div className="mt-4">
              <img src={Network} alt="" />
            </div>
          </div>
          <div>
            <p className="font-bold">Connect Us</p>
            <div className="mt-4 grid grid-flow-col justify-start gap-4">
              {socialLinks.map((val, i) => (
                <a
                  key={i}
                  href={val.link}
                  className="hover:bg-primary text-xl text-white w-12 h-12 transition-all rounded-full border border-white  grid place-content-center"
                >
                  {val.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-400">
        <div className="container">
          <p className="text-white text-center py-4">
            © Copyright 2018 by
            <span className="text-primary font-bold"> CoinWorks</span>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Index;
