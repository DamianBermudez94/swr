import {useMe} from "lib/hooks"

export function layout({children}){
    const myData = useMe();
    return (
    <div>
        <header>
            My Data : {JSON.stringify}
        </header>
        <div>{children}</div>
        <footer></footer>
    </div>
    );
  }