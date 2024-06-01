import Counter from "./components/Counter"
import Number from "./components/Number"
import Users from "./components/Users"
import UserSlice from "./features/users/UserSlice"
function App() {

  return (
    <>
      <Counter />
      <Number />
      <Users />
      <UserSlice />
    </>
  )
}

export default App
