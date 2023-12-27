import {NavLink} from "react-router-dom";

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container-fluid">
        <h3>Turtle Pizza Admin</h3>
       <div className="d-flex">
         <NavLink to="/admin/dishes" className="nav-link me-3 border-end pe-3">Dishes</NavLink>
         <NavLink to="/admin/orders" className="nav-link me-3">Orders</NavLink>
       </div>
      </div>
    </nav>
  );
};

export default Toolbar;