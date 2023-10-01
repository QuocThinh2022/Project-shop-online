import CartItem from "./CartItem";

function CartList(props) {
    const { cart } = props;

    return (
        <>
            {cart && cart.map(item => (
                <CartItem item={item} key={item.id} />
            ))}
        </>
    )
}

export default CartList;