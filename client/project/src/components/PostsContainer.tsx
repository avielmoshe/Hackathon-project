import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  username: string;
  description: string;
  location?: string;
  profilePicture?: string;
}

const defaultProfilePicture =
  "https://via.placeholder.com/150?text=Profile+Picture";

const PostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Função para buscar dados do backend
  const fetchPosts = async () => {
    try {
      const response = await fetch("https://example.com/api/posts"); // Substitua pelo seu endpoint
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Erro ao buscar os posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect para carregar os posts ao montar o componente
  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <div className="text-center mt-10">Carregando posts...</div>;
  }

  if (posts.length === 0) {
    return <div className="text-center mt-10">Nenhum post disponível.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex gap-4 items-start mb-6"
        >
          {/* Profile Picture */}
          <img
            src={post.profilePicture || defaultProfilePicture}
            alt={`${post.username}'s profile`}
            className="w-16 h-16 rounded-full object-cover"
          />
          {/* Post Content */}
          <div className="flex-1">
            {/* Username */}
            <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100">
              {post.username}
            </h2>
            {/* Location */}
            {post.location && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {post.location}
              </p>
            )}
            {/* Description */}
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {post.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsContainer;
