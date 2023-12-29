import React, {useState} from "react";
import {ApiEditDish} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {orderPostData} from "../../store/orderThunks";
import {postLoading} from "../../store/orderSlice";
import {useNavigate} from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const initialState: ApiEditDish = {
  title: '',
  price: '',
  image: '',
};

interface Props {
  existingDish?: ApiEditDish;
  isEdit?: boolean;
  isLoading?: boolean;
}

const NewDish: React.FC<Props> = ({existingDish = initialState, isEdit = false, isLoading = false}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(postLoading);
  const [dish, setDish] = useState<ApiEditDish>(existingDish);

  const changeDish = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDish((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;


    dispatch(orderPostData(dish));
    setDish({
      title: '',
      price: '',
      image: '',
    })
    navigate('/admin/dishes');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>{isEdit ? 'Edit dish' : 'Add new dish'}</h4>
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
      <button type="submit" className="btn btn-primary mt-2" disabled={isLoading}>
        {isLoading && <Spinner/>}
        {isEdit ? 'Update' : 'Create'}
      </button>
      {loading && <p><Spinner/></p>}
    </form>
  );
};

export default NewDish;