import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext([]);
const CartDispatchContext = createContext(null);

export function CartProvider({children}) {
    const [cart, dispatch] = useReducer(
        cartReducer,
        initCart
    );

    return (
        <CartContext.Provider value={cart}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}

export function useCartDispatch() {
    return useContext(CartDispatchContext)
}

const cartReducer = (cart, action) => {
    switch (action.type) {
        case 'add': {
            let isInCart = false;
            const newCart = cart.map(m => {
                if (m.id === action.id) {
                    isInCart = true;
                    return {...m, quantity: m.quantity + Number(action.quantity)};
                }
                return m;
            })
            if (!isInCart) {
                // When the meal hasn't been in cart yet
                const newMeal = {
                    id: action.id,
                    name: action.name,
                    price: action.price,
                    quantity: Number(action.quantity)
                }
                return [...newCart, newMeal];
            }
            return newCart;
        }
        case "changeQuantity": {
            const meal = cart.find(m => m.id === action.id);
            if (meal.quantity === 1 && action.amount === -1)
                return cart.filter(m => m !== meal);
            return cart.map(m => {
                if (m.id === meal.id) {
                    return {...m, quantity: m.quantity + action.amount};
                }
                return m;
            })
        }
        case "clear": {
            return [];
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initCart = [];