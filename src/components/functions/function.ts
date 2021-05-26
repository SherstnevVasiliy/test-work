import { ICart } from "../interface"

export const getCart = () => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}

export const getCountCart = () => {
    return getCart().reduce((summ:number, item:any) => summ + item.count, 0)
}

export const getCountTotal = () => {
    return Math.floor(getCart().reduce((summ:number, item:any) => summ + item.count * item.price, 0) * 100) / 100
}

export const minusClick = (
    setBuyCount: (arg0: number) => void,
    setTotalCost: (arg0: number) => void,
    dispatch: (arg0: () => void) => void,
    setCountCart: (arg0: number, arg1: number) => any,
    buyCount: number,
    cart: { count: number }[],
    data: { total: number, id: number, price: number }
    ) => {
    let newCart = JSON.parse(localStorage.getItem('cart') || '[]')
    let count = cart[0]? cart[0].count : buyCount 
    if ((count) > 0) {
        count --
        setBuyCount(count)
        setTotalCost(Math.floor(count*data.price * 100) / 100)
        if (newCart.filter((item:ICart) => item.id === data.id)[0] && count > 0) {
            newCart.filter((item:ICart) => item.id === data.id)[0].count = count
        } else if (newCart.filter((item:ICart) => item.id === data.id)[0] && count === 0) {
            newCart = newCart.filter((item:ICart) => item.id !== data.id)
        }
        localStorage.setItem("cart", JSON.stringify(newCart))
        dispatch(setCountCart(getCountCart(), getCountTotal()))
    }
}

export const plusClick = (
    setBuyCount: (arg0: number) => void,
    setTotalCost: (arg0: number) => void,
    dispatch: (arg0: () => void) => void,
    setCountCart: (arg0: number, arg1: number) => any,
    buyCount: any,
    cart: { count: number }[],
    data: { total: number, id: number, price: number }
    ) => {
    const newCart = JSON.parse(localStorage.getItem('cart') || '[]')
    let count = cart[0]? cart[0].count : buyCount 
    if ((count) < data.total) {
        count ++
        setBuyCount(count)
        setTotalCost(Math.floor(count*data.price * 100) / 100)
        if (newCart.filter((item:ICart) => item.id === data.id)[0]) {
            newCart.filter((item:ICart) => item.id === data.id)[0].count = count
        } else {
            newCart.push({
                ...data, count
            })
        }
        localStorage.setItem("cart", JSON.stringify(newCart))
        dispatch(setCountCart(getCountCart(), getCountTotal()))
    }
}