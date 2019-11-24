import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const AddItemForm = styled.div`
  input,
  textarea,
  .error {
    font-size: 16px;
    padding: 14px 3%;
    display: block;
    background: none;
    border: none;
    background: #f3f3f3;
    outline: none;
    width: 100%;
  }
  textarea {
    margin-top: 1rem;
    height: 5rem;
    resize: none;
  }
  button {
    font-size: 16px;
    color: #fff;
    font-family: "SourceSansPro-SemiBold", Arial, Helvetica, sans-serif;
    height: 40px;
    padding: 0 40px;
    display: inline-block;
    border: none;
    background: #5b3b3b;
    text-align: center;
    outline: none;
    margin-top: 2rem;
  }
  button:hover{
    background: rgba(155, 101, 101, 0.77);
  }
`;


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
    <AddItemForm>
      <button
      onClick={() => {
        add(data);
      }}>
        Добавить в корзину
      </button>
    </AddItemForm>
  );
};

export default AddButton;
