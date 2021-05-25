export const getCountCart = () => {
    return JSON.parse(localStorage.getItem('cart') || '[]').reduce((summ:number, item:any) => summ + item.count, 0)
}