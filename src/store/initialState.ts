import { IInitial } from "../components/interface";
import { getCountTotal, getCountCart } from '../components/functions/function'

const initialState: IInitial = {
    items: [],
    isModal: false,
    dataModal: {
        id: 0,
        title: '',
        price: 0,
        description: '',
        image: '',
        category: '',
        total: 0,
        count: 0
    },
    countCart: getCountCart(),
    totalCart: getCountTotal()? getCountTotal() : 0,
    isCartShow: false,
    isOrdersShow: false,
};
  
export default initialState;
  