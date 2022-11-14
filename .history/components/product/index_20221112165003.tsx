import { useMe } from "lib/hooks"

export function ({children}){
    const myData = useMe();
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