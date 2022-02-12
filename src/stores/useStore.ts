import create from 'zustand'

type State = {
  counter: number
  setCounter: (counter: number) => void
}

const useStore = create<State>(set => ({
  counter: 0,
  setCounter: counter => {
    set(state => ({ counter: state.counter + 1 }))
  }
}))

export default useStore
