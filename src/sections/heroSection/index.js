import { SearchBar } from "../../components";
import Button from "../../components/button";
const HeroSection = () => {
  return (
    <section className=" banner-section">
      <div className="container pt-48 pb-20">
        <SearchBar />
        <div className="grid grid-cols-1  md:grid-cols-2 gap-y-20 md:gap-0 max-w-4xl mx-auto mt-20">
          <div className="text-center">
            <TextBox />
            <div className="mt-16">
              <Button large size="xl">
                Create a Job
              </Button>
            </div>
          </div>
          <div className="text-center">
            <TextBox text1="$12453000+" text2="Earned" />
            <div className="mt-16">
              <Button large size="xl" variant="outline">
                How It Works?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

const TextBox = ({ text1 = "100000+", text2 = "Completed Jobs" }) => (
  <div className="text-center text-5xl">
    <p className="text-primary font-black">{text1}</p>
    <p className="text-white mt-3 font-medium ">{text2}</p>
  </div>
);
