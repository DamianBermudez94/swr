import React, {useState} from "react";



export function Login(){
    const [loginData, setLoginData] = useState({})
    function handlerForm(e){
 
        e.preventDefault();
        const email = e.target.email.value;
        setLoginData({
            ...loginData,
            e
        })
    }

 return (
    <div>
       <form onSubmit={handlerForm}></form>
    </div>
    );
}
