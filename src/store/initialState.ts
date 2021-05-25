import { IInitial } from "../components/interface";
import { getCountCart } from '../components/functions/function'

const initialState: IInitial = {
    items: [],
    isModal: false,
    countCart: getCountCart(),
};
  
export default initialState;
  