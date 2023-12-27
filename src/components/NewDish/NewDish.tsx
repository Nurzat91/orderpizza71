import {useState} from "react";
import {Dish} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {orderfetchData} from "../../store/orderThunks";
import {isLoading} from "../../store/orderSlice";
import {useNavigate} from "react-router-dom";

const NewDish = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(isLoading);
  const [dish, setDish] = useState<Dish>({
    title: '',
    price: '',
    image: '',
  });

  const changeDish = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDish((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(orderfetchData(dish));
    setDish({
      title: '',
      price: '',
      image: '',
    })
    navigate('/admin/orders')
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new dish</h4>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          className="form-control"
          autoComplete="on"
          value={dish.title}
          onChange={changeDish}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          className="form-control"
          autoComplete="on"
          required
          value={dish.price}
          onChange={changeDish}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="url"
          name="image"
          id="image"
          className="form-control"
          autoComplete="on"
          required
          value={dish.image}
          onChange={changeDish}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2" disabled={loading}>
        {loading ? 'Loading...' : 'Create'}
      </button>
      {loading && <p>Loading...</p>}
    </form>
  );
};

export default NewDish;