import { FC, memo } from 'react'
import { Modal } from '@/shared/ui/Modal/Modal'
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const LoginModal: FC<LoginModalProps> = memo(({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm onSuccess={onClose} />
    </Modal>
  )
})

export default LoginModal
