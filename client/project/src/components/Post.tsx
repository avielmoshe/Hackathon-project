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

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 shadow-lg rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-700 transform transition-transform hover:scale-105 duration-300">
      {/* Profile Picture */}
      <div className="flex items-center space-x-4 mb-4">
        <div
          className="rounded-full w-16 h-16 bg-cover bg-center border-2 border-blue-400 dark:border-gray-600"
          style={{ backgroundImage: ` url(${post.profileimg}) ` }}
        ></div>
        <div>
          <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">
            {post.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {post.providerType}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify leading-relaxed">
        {post.description}
      </p>

      {/* Location */}
      {post.location && (
        <div
          className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
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
              d="M16.88 3.549a6.5 6.5 0 00-9.76 8.218l9.768-8.218zM14.672 16.016a7.512 7.512 0 01-8.445-1.287M21 21l-3.6-3.6M19.73 8.612l-3.195 2.705M13.155 6.846l-2.872 4.2"
            />
          </svg>
          <span>
            <strong>Location:</strong> {post.location.join(", ")}
          </span>
        </div>
      )}

      {/* Services */}
      {post.serviceType && (
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <svg
            className="w-5 h-5 mr-2 text-green-500 dark:text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16.5 7h-9m4.5 0v12m0-12a2.5 2.5 0 012.5 2.5V16.5m-5 0H5m1-1.5A2.5 2.5 0 016.5 9m3-5h9M16.5 7h-3a2.5 2.5 0 00-2.5 2.5V16.5M16.5 7A2.5 2.5 0 0119 9.5V16.5m-2.5 0H19"
            />
          </svg>
          <span>
            <strong>Services:</strong> {post.serviceType.join(", ")}
          </span>
        </div>
      )}

      {/* Status */}
      {post.status && (
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
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
    </div>
  );
};

export default Post;
