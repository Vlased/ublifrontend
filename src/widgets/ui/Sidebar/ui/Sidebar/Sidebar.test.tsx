import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { Sidebar } from './Sidebar'

describe('SIDEBAR', () => {
  test('with no param', () => {
    componentRender(<Sidebar />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()
  })

  test('test toggle', () => {
    componentRender(<Sidebar />)
    const sidebar = screen.getByTestId('sidebar')
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(toggleBtn).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(sidebar).toHaveClass('collapsed')
  })
})
