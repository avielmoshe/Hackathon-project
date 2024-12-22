import { getProviderByUserId } from "@/utils/api.service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DefaultBanner from "../assets/images/banner-background.jpg";
import DefaultProfile from "../assets/images/profile-background.jpg";
import { useSelector } from "react-redux";

function Profile() {
  const [profileData, setProfileData] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);

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
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Banner Section */}
      <main className="flex-grow">
        <div
          className="w-full h-72 bg-cover bg-center rounded-b-xl"
          style={{
            backgroundImage: `url(${profileData.bannerImg || DefaultBanner})`,
          }}
        ></div>

        {/* Profile Content Section */}
        <div className="flex flex-col items-center px-4 md:px-12 mt-10">
          <div className="flex flex-col md:flex-row w-full max-w-4xl p-6 bg-white shadow-xl rounded-xl">
            {/* Profile Image */}
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
              <div
                className="rounded-full w-36 h-36 bg-cover bg-center border-4 border-white shadow-md"
                style={{
                  backgroundImage: `url(${
                    profileData.userID.profileImg || DefaultProfile
                  })`,
                }}
              ></div>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col  md:ml-8 gap-4">
              <h1 className="font-bold text-4xl text-gray-800">
                {profileData.userID?.username &&
                  profileData.userID?.username.charAt(0).toUpperCase() +
                    profileData.userID?.username.slice(1).toLowerCase()}
                {user.id === profileData.userID._id && (
                  <button
                    className="bg-blue-500 text-xl py-2 px-4 ml-5 rounded-full text-white shadow-md hover:bg-blue-600 focus:outline-none"
                    onClick={() => navigate("/EditProfile")}
                  >
                    Edit Profile
                  </button>
                )}
              </h1>

              {/* Location */}
              <p className="text-lg text-gray-700">
                <b>Location:</b> {profileData.location}
              </p>

              {/* Contact Info */}
              <p className="text-lg text-gray-700 mt-2">
                <b>Contact us:</b>
              </p>

              <div className="rounded-xl max-w-60 p-4">
                <p>
                  <b>Email: </b> {profileData.userID?.email}

                </p>
                <p className="text-gray-800">
                  <b>Mobile number:</b> {profileData.userID?.phone}
                </p>
                {profileData.webLink && (
                  <p className="text-gray-800">
                    <a
                      className="text-blue-600 underline hover:text-blue-800"
                      href={profileData.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      To Our Website
                    </a>
                  </p>
                )}
              </div>

              {/* Bio */}
              <p className="mt-4 text-lg text-gray-700">
                <b>Bio:</b>
              </p>

              <div className="p-4 rounded-xl max-w-screen-lg">

                {profileData.bio && <p>{profileData.bio}</p>}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
