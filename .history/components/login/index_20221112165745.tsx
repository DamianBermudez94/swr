import React, {useState} from "react";

function handlerForm(e){
 const [loginData, setLoginData] = useState()
    e.preventDefault();
    const email = e.target.email.value;
}

export function Login(){
 return (
    <div>
       <form onSubmit={handlerForm}></form>
    </div>
    );
}
