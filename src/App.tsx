import {Route, Routes} from "react-router-dom";
import Admin from "./containers/Admin/Admin";
import UserForm from "./containers/UserForm/UserForm";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<UserForm/>} />
        <Route path="/admin/*" element={<Admin/>} />
        {/*<Route path="/dishes" element={<Dishes/>} />*/}
        {/*<Route path="/orders/*" element={<Orders/>} />*/}
        {/*<Route path="/orders/new-dish" element={<NewDish/>}/>*/}
        <Route path="*" element={(<ErrorPage/>)}/>
      </Routes>
    </>
  )
}

export default App
