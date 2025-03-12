'use client'
import App from '@/components/App'
import { AppProvider } from '@/context/foods'
import Hook from '@/hooks/CustomHooks'

const HomePage = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}
export default HomePage
