import { useEffect } from 'react'

interface UseInfiniteScrollOptions {
  callback?: () => void
  triggerRef: React.MutableRefObject<HTMLElement>
  wrapperRef: React.MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) => {
  useEffect(() => {
    const wrapperElement = wrapperRef.current
    const triggerElement = triggerRef.current
    let observer: IntersectionObserver

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0
      }

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)

      observer.observe(triggerElement)
    }

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement)
      }
    }
  }, [triggerRef, wrapperRef, callback])
}
