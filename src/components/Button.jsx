const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth = false,
}) => {
  return (
    <button
      className={`group
           flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
             backgroundColor ? backgroundColor : "bg-coral-red"
           } rounded-full ${fullWidth && "w-full"} ${
        textColor ? textColor : "text-white"
      } ${borderColor ? borderColor : "border-coral-red"} cursor-pointer 
        }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="right-arrow-icon"
          className=" rounded-full w-5 h-5 group-hover:translate-x-1.5 transition-all duration-200 ease-in-out relative"
        />
      )}
    </button>
  );
};

export default Button;
