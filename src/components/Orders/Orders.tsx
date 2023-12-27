import {Link} from "react-router-dom";
import {isLoading, orderDishes} from "../../store/orderSlice";
import Spinner from "../Spinner/Spinner";
import {DishList} from "../../types";
import {fetchGetData} from "../../store/orderThunks";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

const Orders = () => {
  const dishesData = useAppSelector(orderDishes);
  const loading = useAppSelector(isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetData());
  }, [dispatch]);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Dishes</h3>
        <Link to={'new-dish'}><button type="button" className="btn btn-light">Add new Dish</button></Link>
      </div>
      <div className="my-3">
        {loading ? <Spinner/> : dishesData.map((data: DishList) => (
          <div key={data.id} className="card p-2 my-3 d-flex flex-row align-items-center">
            <img src={data.image} alt="Photo" style={{width: "120px"}}/>
            <div className="w-50 ms-5 text-capitalize fs-5">{data.title}</div>
            <div className="w-25 fs-5 fw-semibold">{data.price} KGS</div>
            <button type="button" className="btn btn-light">Edit</button>
            <button type="button" className="btn btn-light mx-4">Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;