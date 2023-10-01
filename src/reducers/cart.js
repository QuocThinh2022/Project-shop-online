
const cartReducer = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                {
                    id: action.id,
                    info: action.info,
                    quantity: 1
                }
            ];
        case 'UPDATE_QUANTITY':
            let index = state.findIndex(item => item.id === action.id);
            newState[index].quantity += action.quantity;
            return newState;
        
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.id);
        
        case 'DELETE_ALL':
            return [];
        
        default: return state;
    }
}

export default cartReducer;