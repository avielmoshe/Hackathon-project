import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  console.log(params.id);

  const user = useSelector((state: RootState) => state.user.user);
  console.log(user);
  return (
    <div className="h-screen w-screen md:flex flex-col items-center ">
      <div className=" w-full h-72 bg-banner bg-cover bg-center mb-10"></div>
      <div className="md:flex flex-col items-start w-screen h-screen">
        <div className="md:flex w-screen relative">
          <div className="rounded-full bg-black w-36 h-36 ml-32"></div>
          <div className="md:flex flex-col ml-12">
            <h1 className="md:flex flex-col font-bold text-3xl">
              {user.firstName &&
                user.firstName.charAt(0).toUpperCase() +
                  user.firstName.slice(1).toLowerCase()}{" "}
              {user.lastName &&
                user.lastName.charAt(0).toUpperCase() +
                  user.lastName.slice(1).toLowerCase()}
            </h1>
            <p> {user.username}</p>
            <p> {user.email}</p>
            <p> {user.phone}</p>
            <p>bio: {user.bio}</p>
          </div>
          <button className="bg-gray-200 absolute top-0 right-10 cursor-pointer">
            edit
          </button>
        </div>
        <p className="ml-40 mt-4">rating: 0</p>
      </div>
    </div>
  );
}

export default Profile;
