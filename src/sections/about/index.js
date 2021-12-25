import { Title } from "../../components";
import About1 from "../../assets/images/about1.png";
import About2 from "../../assets/images/about2.png";
import Button from "../../components/button";
const About = () => {
  return (
    <section>
      <div className="container pb-20">
        <Title text1="About" text2=" COINWORKS" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 items-center gap-10 mt-20">
          <div>
            <img src={About1} alt="" />
          </div>
          <div className="md:pl-20">
            <h2 className=" mb-4 text-4xl font-bold">
              <span>Find The</span> <span className="text-primary">Job</span>
            </h2>
            <p className="mt-4 text-base text-gray-500">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="mt-4 text-base text-gray-500">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text.
            </p>
            <div className="mt-6">
              <Button>Read More</Button>
            </div>
          </div>
          <div className="pr-26">
            <h2 className=" mb-4 text-4xl font-bold">
              <span>Get The</span> <span className="text-primary">Job</span>
            </h2>
            <p className="mt-4 text-base text-gray-500">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="mt-4 text-base text-gray-500">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text.
            </p>
            <div className="mt-6">
              <Button>Read More</Button>
            </div>
          </div>
          <div>
            <img src={About2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
