import useStore from '@/stores/useStore'

export default function Counter() {
  const counter = useStore(state => state.counter)
  return <p className="font-bold text-center text-white">{counter}</p>
}
