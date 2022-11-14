import useSW from 'swr'
import {fechtApi} from 'lib/api'

export function useMe(){
  const { data, error} = useSWR("/me",fechtApi)
  console.log(error);
  
  return data;
}

export function useProducts(id:string){
    const { data, error} = useSWR("/products" + id,fechtApi)
    console.log(error);
    
    return data;
  }