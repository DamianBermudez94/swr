import type {NextPage} from 'next'
import {useMe} from "lib/hooks"

function ShowData(){
  const data = useMe();
  return <div>Data: {JSON.stringify(data)}</div>
}
const Home: NextPage = () =>{
  return(
    <div>
      <h1>Hola mundo</h1>
      
    </div>
  )
}
export default Home