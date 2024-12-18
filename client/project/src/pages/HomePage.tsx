import { useSelector } from "react-redux";
import { RootState } from "../store";

function HomePage() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div>
      <div>{JSON.stringify(user.userName)}</div>
      <div>{user.role}</div>
    </div>
  );
}

export default HomePage;
