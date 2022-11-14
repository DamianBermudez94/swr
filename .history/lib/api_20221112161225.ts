const BASE_URL = "https://dwf-m9-desafio-final.vercel.app/api"
export a function fechtApi(input:RequestInfo, options:RequestInit) {
    const url = BASE_URL + input;
    const token = localStorage.getItem("auth_token");
    const res = await fecht()
}