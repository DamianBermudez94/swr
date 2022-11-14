const BASE_URL = "https://dwf-m9-desafio-final.vercel.app/api"
export async function fechtApi(input:RequestInfo, options:RequestInit) {
    const url = BASE_URL + input;

    // guardamos o nos fijamos si hay token en el localStorage
    const token = localStorage.getItem("auth_token");

    const res = await fetch(url,options);
    if (res.status >= 200 && res.status <300) {
        
    } else {
        
    }
    
    return data;
}