import Image from "next/image";

type CardProps = {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card p-4 bg-white shadow-xl w-3/4 md:w-1/4 rounded-xl">
        {/* Image */}
        <div className="flex justify-center">
          <Image src={"/ava-1.jpg"} alt="profile" className="rounded-full object-cover" width={100} height={100} />
        </div>
        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export default Card;
