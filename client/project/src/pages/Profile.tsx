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
      {/* Conteúdo principal */}
      <main className="flex-grow">
        <div
          className="w-full h-72 bg-cover bg-center"
          style={{
            backgroundImage: `url(${profileData.bannerImg || defaultBanner})`,
          }}
        ></div>
        <div className="flex flex-col items-center px-4 md:px-12">
          <div className="flex flex-col md:flex-row w-full max-w-4xl">
            {/* Avatar e Rating */}
            <div className="flex flex-col items-center md:items-start md:w-1/3">
              <div className="rounded-full bg-black w-36 h-36"></div>
              <p className="mt-4 text-center md:text-left">Rating: 0</p>
            </div>
            {/* Informações do Perfil */}
            <div className="flex flex-col flex-grow mt-8 md:mt-0 md:ml-8">
              <h1 className="font-bold text-3xl mb-4">
                {profileData.userID?.username &&
                  profileData.userID?.username.charAt(0).toUpperCase() +
                    profileData.userID?.username.slice(1).toLowerCase()}
              </h1>
              <p>Location: {profileData.location}</p>
              <p>Email: {profileData.userID?.email}</p>
              <p>Mobile number: {profileData.userID?.phone}</p>
              {profileData.webLink && (
                <p>
                  Website:{" "}
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
              <div className="bg-gray-50 text-black p-4 rounded-xl">
                {profileData.bio && <p>{profileData.bio}</p>}
              </div>
            </div>
          </div>
          {/* Botão de Editar */}
          <button
            className="bg-gray-200 mt-8 py-2 px-4 rounded-full cursor-pointer hover:bg-gray-300 text-gray-600 shadow-md"
            onClick={() => navigate("/EditProfile")}
          >
            Edit
          </button>
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
