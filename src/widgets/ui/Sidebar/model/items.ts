import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/home_icon.svg'
import AboutIcon from 'shared/assets/icons/about_icon.svg'
import ProfileIcon from 'shared/assets/icons/profile_icon.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Main Page',
    Icon: HomeIcon
  },
  {
    path: RoutePath.about,
    text: 'About Page',
    Icon: AboutIcon
  },
  {
    path: RoutePath.profile,
    text: 'Profile Page',
    Icon: ProfileIcon
  }
]
