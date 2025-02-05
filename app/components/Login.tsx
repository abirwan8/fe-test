import Image from "next/image";

type LoginProps = {
  children: React.ReactNode;
};

const Login: React.FC<LoginProps> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Image Container */}
      <div className="w-full flex-1 relative hidden lg:block">
        <Image src={"/building.jpg"} alt="building" fill className="object-cover" />
      </div>

      {/* Form Container */}
      <div className="flex-1 lg:w-1/2 flex justify-center items-center bg-teal-50 py-8 lg:py-0">{children}</div>
    </div>
  );
};

export default Login;
