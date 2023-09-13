import type { NextPage } from 'next'
import Slider from '@/app/components/Slider'

const Home: NextPage = () => {
  return (
    <>
      <main className="flex max-h-screen overflow-hidden bg-white">
        <Slider />
      </main>
    </>
  )
}

export default Home
