import obyraLogoImage from "./obyra-logo.svg";

export const ObyraLogo = ({ className = "h-10 w-auto" }) => {
  return <img src={obyraLogoImage} alt="Obyra" className={className} />;
};

export const ObyraLogoText = ({ className = "text-2xl" }) => {
  return (
    <div
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className={`font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent ${className}`}
    >
      Obyra
    </div>
  );
};
