import { getProviderByUserId } from "@/utils/api.service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DefaultBanner from "../assets/images/banner-background.jpg";
import DefaultProfile from "../assets/images/profile-background.jpg";

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

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div
          className="w-full h-72 bg-cover bg-center"
          style={{
            backgroundImage: `url(${profileData.bannerImg || DefaultBanner})`,
          }}
        ></div>
        <div className="flex flex-col items-center px-4 md:px-12">
          <div className="flex flex-col md:flex-row w-full max-w-4xl p-5">
            <div className="flex flex-col items-center md:items-start md:w-1/3">
              <div
                className="rounded-full  w-36 h-36 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    profileData.profileImg || DefaultProfile
                  })`,
                }}
              ></div>
            </div>
            <div className="flex flex-col flex-grow mt-8 md:mt-0 md:ml-8">
              <h1 className="font-bold text-3xl mb-4">
                {profileData.userID?.username &&
                  profileData.userID?.username.charAt(0).toUpperCase() +
                    profileData.userID?.username.slice(1).toLowerCase()}
                <button
                  className="bg-blue-50 mt-8 py-2 px-4 ml-2 rounded-full cursor-pointer hover:bg-blue-100 text-blue-800 shadow-md mb-3"
                  onClick={() => navigate("/EditProfile")}
                >
                  Edit
                </button>
              </h1>
              <p>
                <b>Location: </b> {profileData.location}
              </p>
              <p>
                <b>Email: </b> {profileData.userID?.email}
              </p>
              <p>
                <b>Mobile number: </b> {profileData.userID?.phone}
              </p>
              {profileData.webLink && (
                <p>
                  <b>Website: </b>
                  <a
                    className="text-blue-700 underline"
                    href={profileData.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profileData.webLink}
                  </a>
                </p>
              )}
              <p className="mt-4">Bio:</p>
              <div className="bg-gray-50 text-black p-4 rounded-xl min-h-20">
                {profileData.bio && <p>{profileData.bio}</p>}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-100 py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Hackathon Project Team. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default Profile;
