import Button from "../button";

const PreFooter = () => {
  return (
    <div className="bg-primary">
      <div className="container grid grid-cols-1 md:grid-cols-12 py-16 text-white items-center">
        <div className=" md:col-span-7">
          <h2 className="font-bold text-4xl">Create Your Job Posting Now!</h2>
          <p className="text-xs mt-4">
            Want to publish the vacancy of your company? Why are you waiting?
            Press the Create job Button Now and post your detail as per your
            requirements.
          </p>
        </div>
        <div className="md:col-span-5 text-center mt-10 md:mt-0">
          <Button large bg="white">
            Create a Job
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
