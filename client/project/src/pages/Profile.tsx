import { getProviderByUserId } from "@/utils/api.service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import defaultBanner from "../assets/images/banner-background.jpg";

function Profile() {
  const [profileData, setProfileData] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const providerData = await getProviderByUserId(params.id);
      setProfileData(providerData);
      console.log(providerData);

      if (providerData.dontHaveData) {
        navigate("/EditProfile");
      } else {
        setIsLoaded(true);
      }
    })();
  }, [params.id, navigate]);
  if (!isLoaded) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  console.log("abc", profileData);

  return (
    <div className="h-screen w-screen md:flex flex-col items-center">
      <div
        className="w-full h-72 bg-cover bg-center mb-10"
        style={{
          backgroundImage: `url(${profileData.bannerImg || defaultBanner})`,
        }}
      ></div>
      <div className="md:flex flex-col items-start">
        <div className="md:flex w-screen relative">
          <div>
            <div className="rounded-full bg-black w-36 h-36 ml-32"></div>
            <p className="ml-40 mt-4">rating: 0</p>
          </div>
          <div className="md:flex flex-col ml-12">
            <h1 className="md:flex flex-col font-bold text-3xl">
              {profileData.userID?.username &&
                profileData.userID?.username.charAt(0).toUpperCase() +
                  profileData.userID?.username.slice(1).toLowerCase()}{" "}
            </h1>
            <p>Location: {profileData.location}</p>
            <p>Email: {profileData.userID?.email}</p>
            <p>Mobile number: {profileData.userID?.phone}</p>
            {profileData.webLink && (
              <p>
                Website:{" "}
                <a
                  className="text-blue-700"
                  href={profileData.webLink}
                  target="_blank"
                >
                  {profileData.webLink}
                </a>
              </p>
            )}
            <p>
              bio:
              <div className="bg-gray-50 text-black h-80 w-96 rounded-xl ml-10 mb-10">
                {profileData.bio && <p className="p-2"> {profileData.bio}</p>}
              </div>
            </p>
          </div>
          <button
            className="bg-gray-200 p-3 rounded-full absolute top-4 right-10 cursor-pointer hover:bg-gray-300 text-gray-600 shadow-md"
            onClick={() => navigate("/EditProfile")}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
