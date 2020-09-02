// import {useEffect,useState} from 'react'

// //code from: https://usehooks.com/useMedia/

// const useMedia = (queries,values,defaultValue) => {

//     const mediaQueryLists = queries.map(q => window.matchMedia(q));

//     const getValue = () => {
//         const index = mediaQueryLists.findIndex(mql => mql.matches);
//         return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
//     };

//     const [value,setValue] = useState(getValue);

//     useEffect(() => {
//         setValue(getValue);
//         const handler = () => setValue(getValue);
//         mediaQueryLists.forEach(mql.addListener(handler));
//         return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
//     },[])
//     return value;
// }


// export default useMedia;

//attempted stretch, kept returning errors