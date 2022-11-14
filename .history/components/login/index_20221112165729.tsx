import React, {useState} from "react";

function handlerForm(e){
 const []
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
