import Toolbar from "../../components/Toolbar/Toolbar";
import {Route, Routes} from "react-router-dom";
import Dishes from "../../components/Dishes/Dishes";
import Orders from "../../components/Orders/Orders";
import NewDish from "../../components/NewDish/NewDish";


const Admin = () => {
  return (
    <>
      <header><Toolbar/></header>
      <main className="container my-3">
        <Routes>
          <Route path="/dishes" element={<Dishes/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/orders/new-dish" element={<NewDish/>}/>
        </Routes>
      </main>
    </>
  );
};

export default Admin;