import useStore from '../../stores/useStore'

export default function Counter() {
  const counter = useStore(state => state.counter)
  return <p>counter: {counter}</p>
}
