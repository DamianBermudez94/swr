import React, {useState} from "react";
import {} from ""


export function Login(){
    const [loginData, setEmail] = useState("")
    function handlerEmailForm(e){
        e.preventDefault();
        const email = e.target.email.value;
        setEmail(email);
    }

    function handlerCode(e){
        e.preventDefault();
        const code = e.target.email.value;
        
        
    }

    return (
        <div>
        <form onSubmit={handlerEmailForm}></form>
        </div>
    );
}
