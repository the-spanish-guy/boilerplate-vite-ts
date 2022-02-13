import { BsSunFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { GiMoonBats } from 'react-icons/gi'

import './index.css'

export const ToggleThemeButton = () => {
  const [theme, setTheme] = useState<string | null>(null)

  const onLoad = () => {
    const isDarkSet = localStorage.theme === 'dark'
    const isThemeStored = 'theme' in localStorage
    const isDarkPrefered = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (isDarkSet || (!isThemeStored && isDarkPrefered)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setTheme(localStorage.theme)
  }
  const toggleMode = () => {
    document.documentElement.classList.toggle('dark')
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light'
      setTheme('light')
    } else {
      localStorage.theme = 'dark'
      setTheme('dark')
    }
  }

  useEffect(() => {
    onLoad()
  }, [theme])

  return (
    <div className="container" onClick={toggleMode}>
      <div className="container-btn">
        {theme === 'dark' ? <BsSunFill size={30} /> : <GiMoonBats size={30} />}
      </div>
    </div>
  )
}
