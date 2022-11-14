import type {NextPage} from 'next'
import useSWR from 'swr'
import {fechtApi} from 'lib/api'

function useData(){
  const { data, error} = useSWR(
    "/me",fechtApi)
}
export default function Home() {
  return (
    <div>
        <h1>Hola Mundo!!!</h1>
    </div>
  )
}