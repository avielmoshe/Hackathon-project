import React from "react";

function Profile() {
  return (
    <div className="h-screen w-screen md:flex flex-col items-center ">
      <div className=" w-full h-60 bg-banner bg-cover bg-center mb-10"></div>
      <div className="md:flex flex-col items-start w-screen h-screen">
        <div className="md:flex">
          <div className="rounded-full bg-black w-36 h-36 ml-32"></div>
          <div className="md:flex flex-col ml-12">
            <h1 className="md:flex flex-col font-bold text-3xl">name?</h1>
            <p> user name</p>
            <p> bio</p>
          </div>
        </div>
        <p className="ml-40 mt-4">rating: 0</p>
        <div className="md:flex flex-col self-center items-center">
          <button className="rounded-full bg-gray-200 w-20 h-20 mb-20"></button>
          <h2>Upload your post here</h2>
          <p>
            After you upload the post everyone will be able to see it and make
            contact with you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
