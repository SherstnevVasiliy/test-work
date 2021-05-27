import { IInitial } from "../components/interface";
import { getCountTotal, getCountCart } from '../components/functions/function'

const initialState: IInitial = {
    items: [],
    isModal: false,
    countCart: getCountCart(),
    totalCart: getCountTotal()? getCountTotal() : 0,
    isCartShow: false,
    isOrdersShow: false,
};
  
export default initialState;
  