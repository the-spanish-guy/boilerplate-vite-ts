import useStore from '@/stores/useStore'

export default function Counter() {
  const counter = useStore(state => state.counter)
  return (
    <p className="font-bold text-center dark:text-white text-[#5e69ee]">
      {counter}
    </p>
  )
}
