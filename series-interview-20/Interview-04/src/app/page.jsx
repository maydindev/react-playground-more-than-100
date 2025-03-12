'use client'
import App from '../App'
import {AppProvider} from "@/context/users"

const Home = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}
export default Home
