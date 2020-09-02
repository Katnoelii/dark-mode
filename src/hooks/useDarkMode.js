import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
// import useMedia from './useMedia'

const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue);
//   const prefersDarkMode = usePrefersDarkMode();

//   const enabled = typeof darkMode !== 'undefined' ? darkMode : prefersDarkMode;
useEffect(() => {
    return darkMode
    ? document.body.classList.add('dark-mode')
    : document.body.classList.remove('dark-mode')
}, [darkMode])

return [darkMode,setDarkMode]
}
// function usePrefersDarkMode() {
//     return useMedia(['(prefers-color-scheme: dark'], [true], false);
// }

export default useDarkMode;