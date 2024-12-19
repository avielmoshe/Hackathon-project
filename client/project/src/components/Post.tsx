import { FaHandHoldingHeart, FaHandshake, FaComments } from "react-icons/fa";
import { PostType } from "./PostsContainer";
import Nog from "@/pages/Chat";
import {
  FaHeartbeat, FaBook, FaUtensils, FaTools, FaHandsHelping,
  FaChild, FaUsers, FaRecycle, FaTree, FaWater, FaDog,
  FaSchool, FaTruck, FaRegHospital, FaChalkboardTeacher, FaFirstAid,
  FaLaptopCode, FaMusic, FaPaintBrush, FaGlobe, FaHome, FaSeedling, FaBalanceScale
} from "react-icons/fa";
import { Link } from "react-router-dom";

const getIconForService = (service) => {
  const lowerCaseService = service.toLowerCase();

  if (lowerCaseService.includes("health")) return <FaHeartbeat className="text-blue-500" />;
  if (lowerCaseService.includes("education")) return <FaBook className="text-blue-500" />;
  if (lowerCaseService.includes("food")) return <FaUtensils className="text-blue-500" />;
  if (lowerCaseService.includes("charity")) return <FaHandHoldingHeart className="text-blue-500" />;
  if (lowerCaseService.includes("help")) return <FaHandsHelping className="text-blue-500" />;
  if (lowerCaseService.includes("child")) return <FaChild className="text-blue-500" />;
  if (lowerCaseService.includes("community")) return <FaUsers className="text-blue-500" />;
  if (lowerCaseService.includes("recycle")) return <FaRecycle className="text-blue-500" />;
  if (lowerCaseService.includes("environment") || lowerCaseService.includes("gardening"))
    return <FaSeedling className="text-green-500" />;
  if (lowerCaseService.includes("water")) return <FaWater className="text-blue-500" />;
  if (lowerCaseService.includes("animal")) return <FaDog className="text-yellow-500" />;
  if (lowerCaseService.includes("volunteer")) return <FaHandshake className="text-blue-500" />;
  if (lowerCaseService.includes("school")) return <FaSchool className="text-blue-500" />;
  if (lowerCaseService.includes("transport")) return <FaTruck className="text-blue-500" />;
  if (lowerCaseService.includes("medical")) return <FaRegHospital className="text-blue-500" />;
  if (lowerCaseService.includes("teaching")) return <FaChalkboardTeacher className="text-blue-500" />;
  if (lowerCaseService.includes("first aid")) return <FaFirstAid className="text-red-500" />;
  if (lowerCaseService.includes("tech")) return <FaLaptopCode className="text-blue-500" />;
  if (lowerCaseService.includes("art")) return <FaPaintBrush className="text-blue-500" />;
  if (lowerCaseService.includes("music")) return <FaMusic className="text-purple-500" />;
  if (lowerCaseService.includes("global")) return <FaGlobe className="text-blue-500" />;
  if (lowerCaseService.includes("home")) return <FaHome className="text-yellow-500" />;
  if (lowerCaseService.includes("plant")) return <FaTree className="text-green-500" />;
  if (lowerCaseService.includes("law")) return <FaBalanceScale className="text-blue-500" />;

  // Ícone padrão para serviços não identificados
  return <FaTools className="text-blue-500" />;
};



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
    alert("Opening chat for contact!");
  };

  const handleDonateClick = () => {
    alert("Redirecting to donation page!");
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
      {/* Services */}
      {post.serviceType && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.serviceType.map((service, index) => (
            <span
              key={index}
              className="flex items-center text-sm px-3 py-1 bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-gray-300 rounded-full shadow-sm hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
            >
              {getIconForService(service)} {/* Ícone baseado na palavra-chave */}
              <span className="ml-2">{service}</span>
            </span>
          ))}
        </div>
      )}


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

      {/* Share Button */}
      <div className="mt-4 flex justify-start">
        <button
          onClick={(e) => {
            e.preventDefault(); // Impede o comportamento padrão de envio
            const postLink = `https://yourwebsite.com/posts/${post.id}`; // Substitua pelo formato real do link
            navigator.clipboard.writeText(postLink) // Copia o link para a área de transferência
              .then(() => {
                const shareButton = document.getElementById("shareButton");
                shareButton.textContent = "😁Link copiado✅"; // Atualiza o texto do botão
                setTimeout(() => {
                  shareButton.textContent = "Share ☺️"; // Volta ao texto original após 2 segundos
                }, 2000);
              })
              .catch((err) => {
                console.error("Erro ao copiar o link: ", err);
                alert("Não foi possível copiar o link. Tente novamente.");
              });
          }}
          id="shareButton"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Share ☺️
        </button>
      </div>


      {/* Dynamic Buttons */}
      <div className="mt-6 flex justify-start space-x-4">
        {post.providerType === "ngo" ? (
          <>
            <Link to={"Chat"} >
              <button
                onClick={handleChatClick}
                className="flex items- space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
              >
                <FaComments className="text-lg" />
                <span>Talk to us</span>
              </button>
            </Link>
            <Link to={"Donation"}>
              <button
                onClick={handleDonateClick}
                className="flex items-center space-x-2 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
              >
                <FaHandHoldingHeart className="text-lg" />
                <span>Donate $</span>
              </button>
            </Link>

            <Link to={"Volunter"}>
            <button
              onClick={handleVolunteerClick}
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
            >
              <FaHandshake className="text-lg" />
              <span>Volunter</span>
            </button>
            </Link>
            
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
