import { useEffect, useState } from 'react'
import Counter from '@/components/Counter/Index'
import LayoutComponent from '@/components/Layout'
import CatService from '@/services/CatService'
import DogService from '@/services/DogService'
import useStore from '@/stores/useStore'
import './index.css'

export function Home() {
  const [image, setImage] = useState('')

  const counter = useStore(state => state.setCounter)
  const setFavicon = useStore(state => state.setFavicon)
  const handleClick = () => {
    counter(1)
  }

  const handleCatApi = async () => {
    return await new CatService().getCat().then(data => {
      setImage(data[0].url)
      setFavicon('cat')
    })
  }

  const handleDogApi = async () => {
    return await new DogService().getDog().then(({ message }) => {
      setImage(message)
      setFavicon('dog')
    })
  }

  useEffect(() => {
    handleDogApi()
  }, [])

  return (
    <LayoutComponent title="Home">
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <h1 className="title">Vite + React + TailwindCSS + Zustand!</h1>
        <div className="flex justify-center w-full">
          <img className="w-[350px] h-full rounded" src={image} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <div>
            <button className="btnApi" onClick={handleCatApi}>
              Cat
            </button>
            <button className="btnApi" onClick={handleDogApi}>
              Dog
            </button>
          </div>
          <div>
            <button className="btnCount" onClick={handleClick}>
              Contador
            </button>
            <Counter />
          </div>
        </div>
      </div>
    </LayoutComponent>
  )
}
