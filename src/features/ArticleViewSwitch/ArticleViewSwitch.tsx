import { ArticleView } from '../../entities/Article'
import { useCallback } from 'react'
import GridIcon from 'shared/assets/icons/grid_icon.svg'
import ListIcon from 'shared/assets/icons/list_icon.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import Icon from 'shared/ui/Icon/Icon'
import styles from './ArticleViewSwitch.module.scss'

interface ArticleViewSwitchProps {
  view: ArticleView
  handleViewChange: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: GridIcon
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon
  }
]

const ArticleViewSwitch: React.FC<ArticleViewSwitchProps> = ({ view, handleViewChange }) => {
  const onChangeView = useCallback((newView: ArticleView) => () => {
    if (newView === view) {
      return
    }
    handleViewChange(newView)
  }, [handleViewChange, view])

  return (
    <div className={styles.container}>
      {viewTypes.map((viewType) => (
        <Button
          onClick={onChangeView(viewType.view)}
          theme={ButtonTheme.CLEAR}
          key={viewType.view}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames([styles.icon], { [styles.notSelected]: viewType.view !== view })}
          />
        </Button>
      ))}
    </div>
  )
}

export default ArticleViewSwitch
