import Toolbar from "../../components/Toolbar/Toolbar";
import Dishes from "../../components/Dishes/Dishes";
import Orders from "../../components/Orders/Orders";
import {Route, Routes} from "react-router-dom";
import NewDish from "../../components/NewDish/NewDish";


const Admin = () => {
  return (
    <>
      <div><Toolbar/></div>
      {/*<div>*/}
      {/*  <Dishes/>*/}
      {/*  <Orders/>*/}
      {/*</div>*/}
      <div className="container">
        <Routes>
          <Route path="/dishes" element={<Dishes/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/dishes/new-dish" element={<NewDish/>}/>
          <Route path="/dishes/new-dish/:id" element={<NewDish/>}/>
        </Routes>
      </div>
    </>
  );
};

export default Admin;