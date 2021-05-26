import { IInitial } from "../components/interface";
import { getCart, getCountCart } from '../components/functions/function'

const initialState: IInitial = {
    items: [],
    isModal: false,
    countCart: getCountCart(),
    totalCart: getCountCart()? Math.floor(getCart().reduce((summ:number, item:any) => summ + item.count * item.price, 0) * 100) / 100 : 0
};
  
export default initialState;
  