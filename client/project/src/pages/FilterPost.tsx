import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Post from "@/components/Post";
import { PostType } from "@/components/PostsContainer";
import { getFilteredPosts } from "@/utils/api.service";
import Yourpost from "./Yourpost";

function FilterPost() {
  const [searchParams] = useSearchParams();

  // Convert searchParams to an object
  const queryData: Record<string, string | string[]> = {};
  for (let [key, value] of searchParams.entries()) {
    queryData[key] = value.includes(",") ? value.split(",") : value;
  }

  const [posts, setPosts] = useState<PostType[]>([]);

  // Fetch posts when queryData changes
  useEffect(() => {
    const fetchFilteredPosts = async () => {
      try {
        const response = await getFilteredPosts(queryData);
        console.log("API Response:", response);
        setPosts(response.posts || []);
      } catch (error) {
        console.error("Error fetching filtered posts:", error);
      }
    };

    fetchFilteredPosts();
  }, [searchParams]); // Re-run the effect when `searchParams` changes

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <Yourpost btnText={"Filter"} />
      {posts.length > 0 ? (
        posts.map((post) => (
          <Link
            key={post._id}
            to={`/Profile/${post.userID._id}`}
            className="hover:text-primary hover:scale-110 transition-all duration-300"
          >
            <Post post={post} />
          </Link>
        ))
      ) : (
        <p className="text-gray-700 dark:text-gray-300 text-center">
          No posts found. Please adjust your filters.
        </p>
      )}
    </div>
  );
}

export default FilterPost;
