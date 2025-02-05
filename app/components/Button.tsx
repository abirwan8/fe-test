import Link from "next/link";

type ButtonProps = {
  label: string;
  href: string;
};

const Button: React.FC<ButtonProps> = ({ label, href }) => {
  return <Link className="bg-teal-500 px-8 py-3 rounded-lg" href={href}>{label}</Link>;
};

export default Button;
