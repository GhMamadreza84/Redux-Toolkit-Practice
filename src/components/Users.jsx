import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/UserSlice";

const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users)

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return <div>Users</div>;
};

export default Users;
