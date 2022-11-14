import type {NextPage} from 'next'
import useSWR from 'swr'
import {fechtApi} from 'lib/api'

function useData(){
  const { data, error} = useSWR("/",fechtApi)
  return data;
}


const Home: NextPage = () =>{
  return(
    <div>
      <h1>Hola mundo</h1>
    </div>
  )
}
export default Home