import { getAllPostsApi } from "@/utils/api.service";
import React, { useEffect, useState } from "react";

import Post from "./Post.tsx";

export interface PostType {
  profileImg?: string;
  createdAt: string;
  description: string;
  location: string[];
  providerID: { _id: string; providerType: string };
  providerType: string;
  serviceType: string[];
  status: string[];
  title: string;
  userID: { _id: string; username: string; phone: number; email: string };
  __v: number;
  _id: string;
}

const PostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
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
