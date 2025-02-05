import axios from "axios";

const API_URL = "http://test-291124.vynz.my.id/api/profile";

export const profile = async () => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    throw new Error("No token found");
  }

  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // console.log("API Response:", response);

    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};
