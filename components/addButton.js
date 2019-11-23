// import Cookies from 'js-cookie'

let Order = new Map()


const AddButton = props => {
    const data = props.data
    const Clear = () => {
        // Cookies.remove("Order")
        console.log("delete")
        // Order.set(props.title,[props.price,1])
        // Cookies.set('Order', JSON.stringify(Order));
    }

    const addToOrderList = () => {
    // [title, price] = props
    // let OrderList = new Map( JSON.parse(Cookies.get("Order") || null))
    
    // // Add new element to list
    // if(!OrderList.has(data.title)){
    //     OrderList.set(data.title,[data.price,data.image,1]);    
    // }
    // //
    // else{
    //     const item = OrderList.get(data.title)
    //     item[2]+=1
    //     OrderList.set(data.title,item)
    // }
    // Cookies.set('Order', JSON.stringify(OrderList));
    // console.log(OrderList)
    console.log("add")
  }

  return (
    <div>
      <button onClick={addToOrderList} > Add to OrderList</button>
    <button onClick={Clear}> Delete</button>
    </div>
  );
}
 
export default AddButton;