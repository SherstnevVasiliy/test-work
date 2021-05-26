export const setItemsState = (props: []) => ({
    type: 'SET_ITEMS',
    payload: {
      items: props,
    },
});
  
export const setCountCart = (countCart:number, totalCart:number) => ({
    type: 'SET_CART',
    payload: {
        countCart,
        totalCart
    },
});

export const cartShow = (props: boolean) => ({
    type: 'CART_SHOW',
    payload: {
        isCartShow: props
    },
});

  