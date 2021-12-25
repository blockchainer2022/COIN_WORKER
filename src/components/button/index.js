import React from "react";

const Button = ({
  children,
  large = false,
  bold = false,
  size = "normal",
  bg = "primary",
  variant = "base",
}) => {
  return (
    <button
      className={`${
        variant === "base"
          ? `bg-${bg} border-primary `
          : "bg-transparent border-white"
      }  border-2  ${
        bg === "white" ? "text-black" : "text-white"
      }  text-${size} ${bold ? "font-bold" : "font-medium"} ${
        large ? "px-20 py-3 " : "px-6 py-2"
      }  rounded-md `}
    >
      {children}
    </button>
  );
};

export default Button;
