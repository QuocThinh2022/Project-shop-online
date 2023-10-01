import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function CartMini() {
    const cart = useSelector(state => state.cartReducer);
    console.log(cart);
    let total = cart.reduce(((sum, item) => sum + item.quantity), 0);
    return (

        <>
            <Link to='/cart'>Cart({total}))</Link>
        </>
    )
}

export default CartMini;