import axios from "axios";

const API_URL = "http://test-291124.vynz.my.id/api/auth";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password }, 
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    // console.log("API Response:", response.data);

    const token = response.data?.data?.token;
    if (token) {
      sessionStorage.setItem("token", token);
      return { success: true, token };
    }

    return { success: false, message: "No token received" };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
};

export const logout = () => {
  sessionStorage.removeItem("token");

  if (typeof window !== "undefined") {
    window.location.href = "/";
  }
};
