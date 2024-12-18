// const Post = ({ post }) => {
//   console.log(post);

//   return <div>{post.title}</div>;
// };
// export default Post;

const Post = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4">
      {/* Title */}
      <h2 className="font-bold text-xl text-gray-800 dark:text-gray-100 mb-2">
        {post.title}
      </h2>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 mb-2">{post.description}</p>

      {/* Location */}
      {post.location && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          <strong>Location:</strong> {post.location.join(", ")}
        </p>
      )}

      {/* Provider Type */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
        <strong>Provider Type:</strong> {post.providerType}
      </p>

      {/* Service Type */}
      {post.serviceType && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          <strong>Services:</strong> {post.serviceType.join(", ")}
        </p>
      )}

      {/* Status */}
      {post.status && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          <strong>Status:</strong> {post.status.join(", ")}
        </p>
      )}

      {/* User Information */}
      {post.userID && (
        <div className="mt-4">
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
