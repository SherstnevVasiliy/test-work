export const setItemsState = (props: []) => ({
    type: 'SET_ITEMS',
    payload: {
      items: props,
    },
});
  
export const setCountCart = (props:number) => ({
    type: 'SET_CART',
    payload: {
        countCart: props,
    },
});

  