import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/constants/router'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import AppRouter from './AppRouter'
import { screen } from '@testing-library/react'
import { UserRoles } from '@/shared/constants/userRoles'

describe('app/router/AppRouter', () => {
  test('screen should be rendered', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout()
    })

    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('screen not found', async () => {
    componentRender(<AppRouter />, {
      route: '/asdaslkjdkl'
    })

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('redirect unathorized user to the main page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1')
    })

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('screen for authorized user should be open', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          mounted: true,
          authData: {}
        }
      }
    })

    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  test('user doesn\'t have the needed role', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          mounted: true,
          authData: {}
        }
      }
    })

    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('user has the needed role', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          mounted: true,
          authData: {
            roles: [UserRoles.ADMIN]
          }
        }
      }
    })

    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })
})
