import { ICart } from '../models/ICart';
import { IMeal } from '../models/IMeal';
import CartContext from './cart-context';
import { useReducer } from 'react';
import { defaultCipherList } from 'constants';
import { ICartAction } from '../models/ICartAction';

/* eslint-disable-next-line */

export interface CartProviderProps {
  children?: React.ReactNode;
}

const defaultCartState: ICart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: ICart, action: ICartAction) => {
  switch (action.type) {
    case 'ADD': {
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    case 'REMOVE': {
      return state;
    }

    default:
      return defaultCartState;
  }
};

export function CartProvider(props: CartProviderProps) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: IMeal): void => {
    dispatchCartAction({
      type: 'ADD',
      item: item,
    });
  };
  const removeItemFromCartHandler = (item: IMeal): void => {
    dispatchCartAction({
      type: 'REMOVE',
      item: item,
    });
  };

  const cartContext: ICart = {
    items: cartState?.items,
    totalAmount: cartState?.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
