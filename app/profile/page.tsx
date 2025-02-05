"use client";

import { logout } from "@/libs/auth";
import { profile } from "@/libs/profile";
import Card from "@/app/components/Card";
import { useEffect, useState } from "react";
import { MdFemale, MdMale } from "react-icons/md";
import Loading from "../components/Loading";

export default function page() {
  const [profileData, setProfileData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const data = await profile();
        if (data) {
          setProfileData(data.data);
        } else {
          setError("Failed to load profile");
        }
      } catch (error) {
        setError("No token found or error fetching profile");
      }
    };

    getProfileData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!profileData) {
    return <div><Loading /></div>;
  }

  return (
    <div className="bg-teal-50">
      <Card>
        <div className="card-body text-center mt-4 space-y-2">
          <div className="flex justify-center items-center gap-2 ">
            <h2 className="font-bold">
              {profileData.full_name}
              {" • "}
            </h2>
            <span className="flex items-center text-xs text-gray-500">
              {profileData.gender === "M" ? <MdMale className="text-base text-black me-1" /> : <MdFemale className="text-base text-black me-1" />}
              {profileData.gender}
            </span>
          </div>
          <small className="card-text">@{profileData.username}</small>
          <div className="flex justify-center gap-2">
            <p className="text-xs bg-teal-500/20 py-1 px-2 md:px-4 rounded-lg">{profileData.email}</p>
            <p className="text-xs bg-teal-500/20 py-1 px-2 md:px-4 rounded-lg">{profileData.phone}</p>
          </div>
          <p className="text-sm md:text-base">
            {profileData.full_name} was born in California on <b> {profileData.dob}</b>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, delectus.
          </p>

          <button onClick={logout} className="bg-teal-500 px-8 py-3 rounded-lg text-white w-full">
            Logout
          </button>
        </div>
      </Card>
    </div>
  );
}
