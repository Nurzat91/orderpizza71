import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {isLoading, orderDishes} from "../../store/orderSlice";
import {useEffect} from "react";
import {fetchGetData} from "../../store/orderThunks";
import Spinner from "../../components/Spinner/Spinner";
import {DishList} from "../../types";

const UserForm = () => {
  const dishesData = useAppSelector(orderDishes);
  const loading = useAppSelector(isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetData());
  }, [dispatch]);

  return (
    <div className="container my-3">
      <h2 className="border-bottom">Turtle Pizza</h2>
      {loading ? <Spinner/> : dishesData.map((data: DishList) => (
        <div key={data.id} className="card p-2 my-4 d-flex flex-row align-items-center">
          <img src={data.image} alt="Photo" style={{width: "150px"}}/>
          <div className="w-50 ms-5 text-capitalize fs-5">{data.title}</div>
          <div className="w-25 fs-5 fw-semibold">{data.price} KGS</div>
        </div>
      ))}
      <div className="border-top d-flex justify-content-between align-items-center py-3">
        <span>Order total: KGS</span>
        <button type="button" className="btn btn-light">Checkout</button>
      </div>
    </div>
  );
};

export default UserForm;