import axios from "axios";
import Cookies from "js-cookie"

const base_url = `http://localhost:3000`;
interface user {
    firstName: string,
    lastName: string,
    email: string
    username: string
    password: string
    phone: string
    role: string
}

interface userLogin {
    username: string,
    password:string,
}
export const signUp = async (user:user) => {
  try {
    const response = await axios.post(`${base_url}/api/user/signup`, user);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return {
      success: false,
      error: error?.response?.data || error?.message,
    };
  }
};

export const signIn = async (user:userLogin) => {
    try {
      const response = await axios.post(`${base_url}/api/user/signIn`, user, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
      };
    }
  };
  
  export const isUserValid = async () => {
    try {
      const jwt = Cookies.get("jwt");
      const response = await axios.get(`${base_url}/api/user/validateToken`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
  
      return response.data;
    } catch (error) {
      return {
        userLogout: true,
        error: error.response?.data || error.message,
      };
    }
  };