import { useSelector } from "react-redux";
import { RootState } from "../store";
import PostsContainer from "@/components/PostsContainer";

function HomePage() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div>
      <div>{JSON.stringify(user.username)}</div>
      <div>{user.role}</div>
      <PostsContainer/>
    </div>
  );
}

export default HomePage;
