import React from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: React.ReactNode
  element?: HTMLElement
  disablePortal?: boolean
}

const Portal: React.FC<PortalProps> = ({ children, element = document.body, disablePortal }) => {
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
