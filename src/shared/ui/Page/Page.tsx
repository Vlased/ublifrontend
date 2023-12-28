import React, { useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import styles from './Page.module.scss'

interface PageProps {
  className?: string
  children: React.ReactNode
  handleEndScroll?: () => void
}

const Page: React.FC<PageProps> = ({ className, children, handleEndScroll }) => {
  const triggerRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: handleEndScroll
  })

  return (
    <section
      className={classNames([styles.container, className])}
      ref={wrapperRef}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  )
}

export default Page
