import React, {useState} from "react";



export function Login(){
    const [loginData, setEmail] = useState("")
    function handlerForm(e){
        e.preventDefault();
        const email = e.target.email.value;
        setLoginData(email);
    }

    function handlerCode(e){
        e.preventDefault();
        const email = e.target.email.value;
        setLoginData({
            ...loginData,
            email,
        });
    }

    return (
        <div>
        <form onSubmit={handlerForm}></form>
        </div>
    );
}
