import { FaHandHoldingHeart, FaHandshake, FaComments } from "react-icons/fa";
import { PostType } from "./PostsContainer";

interface PropsTypes {
  post: PostType;
}

const Post = ({ post }: PropsTypes) => {
  const handleLocationClick = () => {
    if (post.location && post.location.length > 0) {
      const query = post.location.join(", ");
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          query
        )}`,
        "_blank"
      );
    }
  };

  const handleChatClick = () => {
    alert("Abrindo o chat para contato!");
  };

  const handleDonateClick = () => {
    alert("Redirecionando para a página de doação!");
  };

  const handleVolunteerClick = () => {
    alert("Redirecionando para a página de voluntariado!");
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-2xl p-6 mb-8 border border-gray-200 dark:border-gray-700 transform transition-all hover:scale-105 hover:shadow-xl duration-300">
      {/* Profile Picture */}
      <div className="flex items-center space-x-4 mb-6">
        <div
          className="rounded-full w-20 h-20 bg-cover bg-center border-2 border-blue-400 dark:border-gray-600"
          style={{ backgroundImage: `url(${post.userID.profileImg})` }}
        ></div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {post.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {post.providerType}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-justify leading-relaxed">
        {post.description}
      </p>

      {/* Location */}
      {post.location && (
        <div
          className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          onClick={handleLocationClick}
        >
          <svg
            className="w-5 h-5 mr-2 text-blue-500 dark:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16.88 3.549a6.5 6.5 0 00-9.76 8.218l9.768-8-218zM14.672 16.016a7.512 7.512 0 01-8.445-1.287M21 21l-3.6-3.6M19.73 8.612l-3.195 2.705M13.155 6.846l-2.872 4.2"
            />
          </svg>
          <span>
            <strong>Location:</strong> {post.location.join(", ")}
          </span>
        </div>
      )}

      {/* Services */}
      {post.serviceType && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.serviceType.map((service, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-gray-300 rounded-full shadow-sm hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
            >
              {service}
            </span>
          ))}
        </div>
      )}

      {/* Status */}
      {post.status && (
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
          <svg
            className="w-5 h-5 mr-2 text-yellow-500 dark:text-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.31 2.869L1.869 9.93a2 2 0 000 3.14l8.441 7.061a2 2 0 003.14 0l8.441-7.061a2 2 0 000-3.14L13.451 2.87a2 2 0 00-3.14 0z"
            />
          </svg>
          <span>
            <strong>Status:</strong> {post.status.join(", ")}
          </span>
        </div>
      )}

      {/* User Information */}
      {post.userID && (
        <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Posted by:</strong> {post.userID.username}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Email:</strong> {post.userID.email}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Phone:</strong> {post.userID.phone}
          </p>
        </div>
      )}

      {/* Original Share Button */}
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition">
        Share Post
      </button>

      {/* Dynamic Buttons */}
      <div className="mt-6 flex justify-between">
        {post.providerType === "NGO" ? (
          <>
            <button
              onClick={handleChatClick}
              className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            >
              <FaComments className="text-lg" />
              <span>Fale Conosco</span>
            </button>
            <button
              onClick={handleDonateClick}
              className="flex items-center space-x-2 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
            >
              <FaHandHoldingHeart className="text-lg" />
              <span>Doe $</span>
            </button>
            <button
              onClick={handleVolunteerClick}
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
            >
              <FaHandshake className="text-lg" />
              <span>Voluntariar-se</span>
            </button>
          </>
        ) : (
          <button
            onClick={handleChatClick}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            <FaComments className="text-lg" />
            <span>Fale Conosco</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
