import { useProducts } from "lib/hooks"

export function Products({children}){
    const myData = useProducts();
    return (
    <div>
        <header>
            My Data : {JSON.stringify(myData)}
        </header>
        <div>{children}</div>
        <footer></footer>
    </div>
    );
  }