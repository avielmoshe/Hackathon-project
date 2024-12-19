import { getAllPostsApi } from "@/utils/api.service";
import React, { useEffect, useState } from "react";
import Post from "./Post";

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
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostsContainer;
