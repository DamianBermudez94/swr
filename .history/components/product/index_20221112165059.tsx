import { useProducts } from "lib/hooks"

export function Products({productsID}){
    const myData = useProducts(productsID);
    return <div></div>;
  }