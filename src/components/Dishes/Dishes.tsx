import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {deleteLoading, isLoading, orderDishes} from "../../store/orderSlice";
import {useEffect} from "react";
import {deleteDish, fetchGetData} from "../../store/orderThunks";
import {Link} from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import {DishList} from "../../types";

const Dishes = () => {
  const dishesData = useAppSelector(orderDishes);
  const loading = useAppSelector(isLoading);
  const removeLoading = useAppSelector(deleteLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetData());
  }, [dispatch]);

  const onDelete = async (id: string) =>{
    await dispatch(deleteDish(id));
    await dispatch(fetchGetData());
  };

  return (
    <div className="container my-3">
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
            <button
              type="button"
              className="btn btn-light"
            >Edit</button>
            <button
              type="button"
              className="btn btn-light mx-4"
              onClick={() => onDelete(data.id)}
              disabled={removeLoading ? removeLoading === data.id : false}
            >
              {removeLoading && removeLoading === data.id && (<Spinner/>)}
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dishes;