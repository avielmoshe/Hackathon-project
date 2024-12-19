import { getAllPostsApi } from "@/utils/api.service";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";

const PostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    try {
      (async () => {
        const response = await getAllPostsApi();
        setPosts(response.posts);
      })();
    } catch (error) {}
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      {posts.map((post) => {
        return (
          <Link
            to={`/Profile/${post.userID._id}`}
            className="hover:text-primary transition-all duration-300"
          >
            <Post key={post._id} post={post} />
          </Link>
        );
      })}
    </div>
  );
};

export default PostsContainer;
