import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  element?: HTMLElement
  disablePortal?: boolean
}

const Portal: FC<PortalProps> = ({ children, element = document.body, disablePortal }) => {
  if (disablePortal) {
    return (
      <>
        {children}
      </>
    )
  }

  return createPortal(children, element)
}

export default Portal
