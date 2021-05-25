import { IInitial } from "../components/interface";

const cart = JSON.parse(localStorage.getItem('cart') || '[]').reduce((summ:number, item:any) => summ + item.count, 0)

const initialState: IInitial = {
    items: [],
    isModal: false,
    countCart: cart,
};
  
export default initialState;
  