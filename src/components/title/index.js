import "./style.css";

const Title = ({ text1 = "How It", text2 = "Works?" }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl">
        <span className="font-medium">{text1} </span>
        <span className="text-primary font-bold">{text2}</span>
      </h2>
      <div className="w-28 bg-black h-1 mx-auto mt-4 relative title-bottom">
        <span className="bg-primary"></span>
      </div>
    </div>
  );
};

export default Title;
