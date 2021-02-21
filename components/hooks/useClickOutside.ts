import { RefObject, useEffect } from 'react'

function useClickOutside(ref: RefObject<HTMLElement>, handler: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const isClickOutside = !ref.current?.contains?.(event.target as HTMLElement)
      if (isClickOutside && ref.current) {
        handler(event)
      }
    }

    document.addEventListener('click', listener)

    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref, handler])
}

export default useClickOutside
