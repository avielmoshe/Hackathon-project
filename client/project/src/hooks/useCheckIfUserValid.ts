import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isUserValid } from "../utils/api.service";
import { setUser } from "../store/slices/userSlice";

export async function useCheckIfUserValid() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataAuth = await isUserValid();
  if (dataAuth.userLogout) {
    dispatch(setUser({ role: "guest" }));
  } else {
    dispatch(setUser(dataAuth));
  }
}
