import Counter from '../../components/Counter/Index'
import Header from '../../components/Header/Index'
import LayoutComponent from '../../components/Layout'
import useStore from '../../stores/useStore'
import './index.css'

export function Home() {
  const counter = useStore(state => state.setCounter)
  const handleClick = () => {
    counter(1)
  }
  return (
    <LayoutComponent title="Home">
      <Header />
      <Counter />
      <h1 className="teste">Hello world!</h1>
      <button onClick={handleClick}>Contador</button>
    </LayoutComponent>
  )
}
