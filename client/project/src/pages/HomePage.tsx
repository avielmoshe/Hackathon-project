import { useSelector } from "react-redux";
import { RootState } from "../store";
import PostsContainer from "@/components/PostsContainer";

function HomePage() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div>
      <PostsContainer />
    </div>
  );
}

export default HomePage;
