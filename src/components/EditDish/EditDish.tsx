import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectDishId, selectFetchEditIdLoading, selectUpdateEditIdLoading} from "../../store/orderSlice";
import {useEffect} from "react";
import {fetchEditDish, updateDishEdit} from "../../store/orderThunks";
import {ApiEditDish} from "../../types";
import Spinner from "../Spinner/Spinner";
import NewDish from "../NewDish/NewDish";

const EditDish = () => {
  const {id} = useParams() as {id: string};
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const dishId = useAppSelector(selectDishId);
  const editLoading = useAppSelector(selectFetchEditIdLoading);
  const updateEditIdLoading = useAppSelector(selectUpdateEditIdLoading);

  useEffect(() => {
    dispatch(fetchEditDish(id));
  }, [dispatch, id]);

  const onSubmit = async (dish: ApiEditDish) => {
    await dispatch(updateDishEdit({id, dish}));
    navigate('/dishes');
  };

  const existingDish = dishId ? {
    ...dishId,
    price: dishId.price.toString(),
  } : undefined;

  let formSection = <Spinner/>;

  if (!editLoading) {
    if (dishId) {
      formSection = (
        <NewDish
          isEdit
          onSubmit={onSubmit}
          existingDish={existingDish}
          isLoading={updateEditIdLoading}
        />
      );
    } else {
      formSection = <h4>Not found</h4>;
    }
  }

  return (
    <div className="row mt-2">
      <div className="col">
        {formSection}
      </div>
    </div>
  );
};

export default EditDish;