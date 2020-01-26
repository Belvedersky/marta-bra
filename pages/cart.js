import Body from '../components/Body';
import Content from '../components/Content';
import { withRedux } from '../lib/redux';
import { useSelector, useDispatch } from 'react-redux';

const DeleteItem = () => {
  const dispatch = useDispatch();
  const deleteItem = title => {
    // console.log(item)
    dispatch({
      type: 'DELETEITEM',
      title: title
    });
  };
  return { deleteItem };
};

const Cart = () => {
  const { deleteItem } = DeleteItem();
  const Cart = useSelector(state => state.cart);
  if (!Cart.size) {
    return (
      <Body>
        <Content>
          <div style={{ textAlign: 'center' }} className="content_item">
            <img
              style={{ width: '160px', height: 'auto' }}
              src="/img/empty.png"
            />
            <h1>В корзине ничего нет!</h1>
          </div>
        </Content>
      </Body>
    );
  }
  let Price = null;
  const CartItem = [];
  if (Cart) {
    for (let [title, price] of Cart) {
      CartItem.push(
        <tr key={title}>
          <td> {title}</td>
          <td> {price.lot} шт.</td>
          <th> {price.price}руб.</th>
          <td> {price.price * price.lot} руб.</td>
          <td>
            {' '}
            <button
              className="delete"
              onClick={() => {
                deleteItem(title);
              }}
            ></button>{' '}
          </td>
        </tr>
      );
      Price = Price + price.price * price.lot;
    }
  }
  let Order = null;
  // console.log(Price)
  if (Price) {
    // console.log(Price)
    Order = `Итог: ${Price} руб.`;
  }

  return (
    <Body>
      <Content>
        <div className="content_item">
          <p className="title">Корзина:</p>
          <table className="table">
            <thead>
              <tr>
                <th>Товар</th> <th> Кол-во</th> <th> Цена</th> <th> Итог</th>
              </tr>
            </thead>
            <tbody>{CartItem}</tbody>
          </table>
          <p className="subtitle">{Order}</p>
        </div>
      </Content>
    </Body>
  );
};
export default withRedux(Cart);
