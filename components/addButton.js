import { useSelector, useDispatch } from "react-redux";

const AddItem = () => {
  const dispatch = useDispatch();
  const add = item => {
    // console.log(item)
    dispatch({
      type: "ADDTOCARTITEM",
      cart: item
    });
  };
  return { add };
};

const AddButton = props => {
  const data = props.data;
  const { add } = AddItem();
  return (
    <div>
      <button
      onClick={() => {
        add(data);
      }}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default AddButton;
