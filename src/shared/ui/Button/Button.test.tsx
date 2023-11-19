import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('BUTTON', () => {
  test('with only one param', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('with theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
  })
})
