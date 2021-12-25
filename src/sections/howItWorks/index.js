import { Title } from "../../components";
import Fund from "../../assets/images/fund.png";
import Help from "../../assets/images/help.png";
import Freelancer from "../../assets/images/freelancer1.png";
import Rotate from "../../assets/images/rotate-user.png";
import Employee from "../../assets/images/employee2.png";
import Review from "../../assets/images/review.png";

const helpData = [
  {
    title: "Connect with freelancer",
    img: Freelancer,
  },
  {
    title: "Discuss & freeze scope",
    img: Help,
  },
  {
    title: "Create & assign funded job",
    img: Rotate,
  },
  {
    title: "Got The Job",
    img: Fund,
  },
];
const helpData2 = [
  {
    title: "Connect with Employer",
    img: Employee,
  },
  {
    title: "Discuss & freeze scope",
    img: Help,
  },
  {
    title: "Review % accept job",
    img: Review,
  },
  {
    title: "Got The Job",
    img: Fund,
  },
];

const HowItWokrs = () => {
  return (
    <section className="py-20">
      <div className="container">
        <Title text1="How It" text2="Works for Employers" />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-28 gap-x-12 gap-y-8">
          {helpData.map((val, i) => (
            <div
              key={i}
              className="text-center transition-all border border-gray-300 py-12 rounded-xl how-it-work-card "
            >
              <img src={val.img} alt="" className="mx-auto" />
              <p className="text-xl text-gray-600 mt-4 font-medium">
                {val.title}
              </p>
            </div>
          ))}
        </div>
        <div className="pt-20">
          <Title text1="How It" text2="Works for Freelancers?" />
          <div className="grid grid-cols-1 md:grid-cols-2 mt-28 gap-x-12 gap-y-8">
            {helpData2.map((val, i) => (
              <div
                key={i}
                className="text-center transition-all border border-gray-300 py-12 rounded-xl how-it-work-card "
              >
                <img src={val.img} alt="" className="mx-auto" />
                <p className="text-xl text-gray-600 mt-4 font-medium">
                  {val.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWokrs;
