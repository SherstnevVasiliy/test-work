import React from "react";
 
export interface ITheme {
  countCart: number;
}
 
export const Context = React.createContext<ITheme>({
    countCart: 0
})