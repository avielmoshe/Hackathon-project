import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

const base_url =
  process.env.NODE_ENV === "production" ? "/" : `http://localhost:3000`;
interface user {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  role: string;
}

interface userLogin {
  username: string;
  password: string;
}

export interface providerData {
  providerType?: string;
  bannerImg?: string;
  bio?: string;
  location?: string;
  webLink?: string;
}
export const signUp = async (user: user) => {
  try {
    const response = await axios.post(`${base_url}/api/user/signup`, user);
    console.log(response.data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return {
      success: false,
      error: axiosError.response?.data || axiosError.message,
    };
  }
};

export const signIn = async (user: userLogin) => {
  try {
    const response = await axios.post(`${base_url}/api/user/signIn`, user, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    // עכשיו נוכל לגשת בצורה בטוחה ל-properties כמו response או message
    return {
      success: false,
      error: axiosError.response?.data || axiosError.message,
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
    const axiosError = error as AxiosError;

    return {
      userLogout: true,
      error: axiosError.response?.data || axiosError.message,
    };
  }
};

export const crateNewProvider = async (providerData: providerData) => {
  try {
    const jwt = Cookies.get("jwt");
    const response = await axios.post(
      `${base_url}/api/provider/createNewProvider`,
      providerData,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return {
      error: axiosError.response?.data || axiosError.message,
    };
  }
};

export const getProviderByUserId = async (userId: string | undefined) => {
  try {
    const response = await axios.get(
      `${base_url}/api/provider/getProviderByUserId/${userId}`
    );

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    return {
      dontHaveData: true,
      error: axiosError.response?.data || axiosError.message,
    };
  }
};

export const updateProviderApi = async (updateProvider: providerData) => {
  try {
    const jwt = Cookies.get("jwt");
    const response = await axios.patch(
      `${base_url}/api/provider/updateProvider`,
      updateProvider,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    return {
      success: false,
      error: axiosError.response?.data || axiosError.message,
    };
  }
};

export const createPost = async (newPostData: any) => {
  try {
    const jwt = Cookies.get("jwt");
    const response = await axios.post(
      `${base_url}/api/post/cratePost`,
      newPostData,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    return {
      success: false,
      error: axiosError.response?.data || axiosError.message,
    };
  }
};

export const getFilteredPosts = async (filters: any) => {
  try {
    const jwt = Cookies.get("jwt");

    // Construct the query string from the filters object
    const queryParams = new URLSearchParams(filters).toString();

    // Make the GET request with query parameters
    const response = await axios.get(
      `${base_url}/api/post/getFilteredPosts?${queryParams}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    return {
      success: false,
      error: axiosError.response?.data || axiosError.message,
    };
  }
};

export const getAllPostsApi = async () => {
  try {
    const response = await axios.get(`${base_url}/api/post/`);
    return response.data;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    return {
      success: false,
      error: axiosError.response?.data || axiosError.message,
    };
  }
};

export const deleteCookie = async () => {
  try {
    Cookies.remove("jwt");
  } catch (error) {
    console.log(error);
  }
};
