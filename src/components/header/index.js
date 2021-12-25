import "./style.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import Networks from "../../assets/images/supported_network.png";
import { FiMenu } from "react-icons/fi";
import Button from "../button";
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

const Index = () => {
  return (
    <header className="">
      <div className="container py-6 lg:py-3 flex justify-between items-center">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="hidden lg:flex items-center">
          <ul className="flex ">
            {linksList.map((item, i) => (
              <li key={i}>
                <CustomLink to={item.link}>{item.text}</CustomLink>
              </li>
            ))}
          </ul>
          <div>
            <img src={Networks} alt="" className="network-img" />
          </div>
          <div className="mt-2 ml-4">
            <Button bold>CONNECT WALLET</Button>
          </div>
        </div>
        <button className="lg:hidden cursor-pointer font-bold text-2xl">
          <FiMenu />
        </button>
      </div>
    </header>
  );
};

export default Index;

const CustomLink = ({ children, to }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={`${
        match ? "text-primary" : "text-"
      } font-bold px-6 py-4 capitalize `}
    >
      {children}
    </Link>
  );
};
