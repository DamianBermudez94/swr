import {} from "lib/hooks"

export function layout({children}){
    return (
    <div>
        <header></header>
        <div>{children}</div>
        <footer></footer>
    </div>
    );
  }