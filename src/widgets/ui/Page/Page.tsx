import { StateSchema } from 'app/providers/StoreProvider'
import { getScrollByPath, scrollRestorationActions } from 'features/ScrollRestoration'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'
import styles from './Page.module.scss'

interface PageProps {
  className?: string
  children: React.ReactNode
  handleEndScroll?: () => void
}

const Page: React.FC<PageProps> = ({ className, children, handleEndScroll }) => {
  const triggerRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname))

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: handleEndScroll
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((e: React.UIEvent<HTMLDivElement>) => {
    dispatch(scrollRestorationActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname
    }))
  }, 2000)

  return (
    <section
      className={classNames([styles.container, className])}
      ref={wrapperRef}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  )
}

export default Page
