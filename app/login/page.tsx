"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/libs/auth";
import Login from "@/app/components/Login";
import Link from "next/link";
import { MdEmail, MdLock } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Handler Submit Login 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    console.log("Form submitted"); // Debugging
    console.log("Logging in with:", email, password);

    const result = await login(email, password);

    if (result.success) {
      router.push("/profile");
    } else {
      setError(result.message);
    }
  };

  return (
    <div>
      <Login>
        {/* Form */}
        <form onSubmit={handleSubmit} className="w-3/4 md:w-1/2 p-4 bg-white shadow-xl rounded-xl">
          <h1 className="text-xl md:text-2xl font-bold text-center">Login 🚀</h1>
          <p className="text-sm md:text-base text-center">Please enter your login credentials!</p>
          {error && <p className="text-sm bg-red-500/10 text-red-500 border border-red-500 mt-2 p-2 w-full rounded-lg">{error}</p>}

          <div className="relative w-full my-4">
            <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input type="email" placeholder="Email" className="bg-gray-400/20 p-2 pl-10 w-full rounded-lg focus:outline-none focus:shadow-outline" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="relative w-full mb-4">
            <MdLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-gray-400/20 p-2 pl-10 w-full rounded-lg  focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="absolute inset-y-0 right-3 flex items-center text-gray-500" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
            </button>
          </div>

          <button className="bg-teal-500 w-full text-white px-4 py-2 rounded-lg mb-4">Login</button>
          <Link href={"/"} className="text-sm text-teal-500 flex justify-center">
            Back to Home page
          </Link>
        </form>
      </Login>
    </div>
  );
}
