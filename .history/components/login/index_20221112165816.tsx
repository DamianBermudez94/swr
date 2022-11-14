import React, {useState} from "react";

function handlerForm(e){
 
    e.preventDefault();
    const email = e.target.email.value;
}

export function Login(){
    const [loginData, setLoginData] = useState({})


 return (
    <div>
       <form onSubmit={handlerForm}></form>
    </div>
    );
}
