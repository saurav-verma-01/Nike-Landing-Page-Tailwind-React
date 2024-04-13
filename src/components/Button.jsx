const Button = ({
  label,
  iconURL,
  backgroundColor = "bg-coral-red",
  borderColor = "border-coral-red",
  textColor = "text-white",
  fullWidth = false,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none text-lg  rounded-full ${backgroundColor} ${borderColor} ${textColor} ${
        fullWidth && "w-full"
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="button icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
