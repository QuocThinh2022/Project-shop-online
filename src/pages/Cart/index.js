import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import './Cart.scss'
import { deleteAll } from "../../actions/cart";

function Cart() {
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch(state => state.cartReducer);
        
    let total = cart.reduce(((sum, item) => {
        let priceNew = (item.info.price * (100 - item.info.discountPercentage) / 100).toFixed(); 
        return sum + priceNew * item.quantity;
    }), 0)

    const handleDeleteAll = () => {
        dispatch(deleteAll());
    }

    return (
        <>
            <h2>Cart</h2>
            <button onClick={handleDeleteAll}>Delete All</button>
            <div className='cart'>
                {cart.length ? (
                    <>
                        <CartList cart={cart} />
                        <div className='cart__total'>Tong tien: <span>{total}$</span></div>
                    </>
                ) : (
                    <div>Gio hang Trong</div>
                )}
            </div>
            
        </>
    )
}

export default Cart;