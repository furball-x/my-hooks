import { useEffect, useRef } from 'react'

const useTitle = (title: string) => {
    const prevTitleRef = useRef<string>(document.title)
    useEffect(() => {
        document.title = title
        const prevTitle = prevTitleRef.current
        return () => {
            document.title = prevTitle
        }
    }, [])
}

export default typeof document !== 'undefined'
    ? useTitle
    : (title: string) => {}
