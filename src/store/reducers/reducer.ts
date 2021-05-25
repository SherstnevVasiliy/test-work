import { IInitial } from '../../components/interface';
import initialState from '../initialState';

const reducer = (state: IInitial = initialState, action: { type: string; payload: any }) => {

    switch (action.type) {
    case 'SET_ITEMS':
        console.log(action.payload)
        return { ...state, items: action.payload.items };
    case 'SET_CART':
        console.log(action.payload)
        return { ...state, countCart: action.payload.countCart };
 
      default:
        return state;
    }

};

export default reducer;
