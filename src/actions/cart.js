
export function addToCart(id, info) {
    // console.log(id, info);
    return {
        type: 'ADD_TO_CART',
        id: id,
        info: info
    }
}

export function updateQuantity(id, quantity = 1) {
    return {
        type: 'UPDATE_QUANTITY',
        id: id,
        quantity: quantity
    }
}

export function deleteItem(id) {
    return {
        type: 'DELETE_ITEM',
        id: id
    }
}

export function deleteAll() {
    return {
        type: 'DELETE_ALL'
    }
}