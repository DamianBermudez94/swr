import {useMe} from "lib/hooks"

export function layout({children}){
    const myData = use
    return (
    <div>
        <header></header>
        <div>{children}</div>
        <footer></footer>
    </div>
    );
  }