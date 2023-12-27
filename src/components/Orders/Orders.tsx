import {Link} from "react-router-dom";

const Orders = () => {
  return (
    <div className="d-flex justify-content-between">
      <h3>Dishes</h3>
      <Link to={'new-dish'}><button type="button" className="btn btn-light">Add new Dish</button></Link>
    </div>
  );
};

export default Orders;