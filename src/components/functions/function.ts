import { ICart } from "../interface"

export const getCountCart = () => {
    return JSON.parse(localStorage.getItem('cart') || '[]').reduce((summ:number, item:any) => summ + item.count, 0)
}

export const getCart = () => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}

export const minusClick = (
    setBuyCount: (arg0: number) => void,
    dispatch: (arg0: () => void) => void,
    setCountCart: (arg0: number) => any,
        buyCount: number,
        cart: { count: number }[],
        data: { total: number, id: number }
    ) => {
    let newCart = JSON.parse(localStorage.getItem('cart') || '[]')
    let count = cart[0]? cart[0].count : buyCount 
    if ((count) > 0) {
        count --
        setBuyCount(count)
        if (newCart.filter((item:ICart) => item.id === data.id)[0] && count > 0) {
            newCart.filter((item:ICart) => item.id === data.id)[0].count = count
        } else if (newCart.filter((item:ICart) => item.id === data.id)[0] && count === 0) {
            newCart = newCart.filter((item:ICart) => item.id !== data.id)
        }
        localStorage.setItem("cart", JSON.stringify(newCart))
        console.log('***', JSON.parse(localStorage.getItem('cart') || '[]').reduce((summ:number, item:any) => summ + item.count, 0))
        dispatch(setCountCart(getCountCart()))
    }
}

export const plusClick = (
    setBuyCount: (arg0: number) => void,
    dispatch: (arg0: () => void) => void,
    setCountCart: (arg0: number) => any,
    buyCount: any,
    cart: { count: number }[],
    data: { total: number, id: number }
    ) => {
    const newCart = JSON.parse(localStorage.getItem('cart') || '[]')
    let count = cart[0]? cart[0].count : buyCount 
    if ((count) < data.total) {
        count ++
        setBuyCount(count)
        if (newCart.filter((item:ICart) => item.id === data.id)[0]) {
            newCart.filter((item:ICart) => item.id === data.id)[0].count = count
        } else {
            newCart.push({
                ...data, count
            })
        }
        localStorage.setItem("cart", JSON.stringify(newCart))
        dispatch(setCountCart(getCountCart()))
    }
}