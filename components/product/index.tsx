import { useProducts } from "lib/hooks"

export function Products({productsID}){
    const productData = useProducts(productsID);
    return <div>Product Data: {productData}</div>;
  }