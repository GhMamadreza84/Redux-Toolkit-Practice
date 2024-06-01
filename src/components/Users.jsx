import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/UserSlice";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users)
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return <div></div>;
};

export default Users;
