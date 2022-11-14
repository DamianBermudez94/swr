import React, {useState} from "react";

function handlerForm(e){

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
