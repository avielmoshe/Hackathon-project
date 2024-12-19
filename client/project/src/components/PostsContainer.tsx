import { getAllPostsApi } from "@/utils/api.service";
import React, { useEffect, useState } from "react";

import Post from "./Post.tsx";
import { Link } from "react-router-dom";

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
        console.log(posts);
      })();
    } catch (error) {}
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      {posts.map((post) => (
        <Link
          key={post._id}
          to={`/Profile/${post.userID._id}`}
          className="hover:text-primary hover:scale-110 transition-all duration-300"
        >
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
};

export default PostsContainer;
