import { About } from '@/pages/About'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { Main } from '@/pages/Main'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import {
  AppRoutes,
  getRouteAbout,
  getRouteAdminPanel,
  getRouteArticleCreate,
  getRouteArticleDetails,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteForbiddenPage,
  getRouteMain,
  getRouteNotFound,
  getRouteProfile
} from '@/shared/constants/router'
import { UserRoles } from '@/shared/constants/userRoles'
import { AppRouteProps } from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <Main />
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <About />
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoutes.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlesPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: getRouteArticleCreate(),
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getRouteAdminPanel(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoles.ADMIN, UserRoles.MANAGER]
  },
  [AppRoutes.FORBIDDEN_PAGE]: {
    path: getRouteForbiddenPage(),
    element: <ForbiddenPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage />
  }
}
