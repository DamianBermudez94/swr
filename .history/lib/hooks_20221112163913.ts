import useSWR from 'swr'
import {fechtApi} from 'lib/api'

export function useMe(){
  const { data, error} = useSWR("/me",fechtApi)
  console.log(error);
  
  return data;
}

export function useMe(){
    const { data, error} = useSWR("/me",fechtApi)
    console.log(error);
    
    return data;
  }