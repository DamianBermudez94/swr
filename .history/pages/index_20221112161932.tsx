import type {NextPage} from 'next'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'

function useData(){
  const { data, error} = useSWR(
    
  )
}
export default function Home() {
  return (
    <div>
        <h1>Hola Mundo!!!</h1>
    </div>
  )
}
