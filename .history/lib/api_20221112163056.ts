const BASE_URL = "https://dwf-m9-desafio-final.vercel.app/api"
export async function fechtApi(input:RequestInfo, options:RequestInit) {
    const url = BASE_URL + input;

    // guardamos o nos fijamos si hay token en el localStorage
    const token = localStorage.getItem("auth_token");
    if (token) {
        const newOptions = options || {};
        newOptions.headers.authorization = "Bearer";
    } else {
        
    }
    const res = await fetch(url,options);
    // Chequeamos que la respuesta sea entre el 200 y el 300
    if (res.status >= 200 && res.status <300) {
        return res.json();    
    } else {
        throw{
            message:"Hubo un error",
            status: res.status
        }
    }
    

}