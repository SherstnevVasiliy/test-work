import { IInitial } from '../../components/interface';
import initialState from '../initialState';

const reducer = (state: IInitial = initialState, action: { type: string; payload: any }) => {

    switch (action.type) {
    case 'SET_ITEMS':
        return { ...state, items: action.payload.items };
    case 'SET_CART':
        return { ...state, countCart: action.payload.countCart, totalCart: action.payload.totalCart };
    case 'CART_SHOW':
        return { ...state, isCartShow: action.payload.isCartShow };
 
      default:
        return state;
    }

};

export default reducer;
