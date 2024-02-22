import {
  FC,
  ImgHTMLAttributes,
  memo,
  ReactElement,
  useLayoutEffect,
  useState
} from 'react'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  loadingFallback?: ReactElement
  errorFallback?: ReactElement
}

export const AppImage: FC<AppImageProps> = memo(({
  className,
  src,
  alt = 'image',
  loadingFallback,
  errorFallback,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useLayoutEffect(() => {
    const image = new Image()
    image.src = src ?? ''
    image.onload = () => {
      setIsLoading(false)
    }
    image.onerror = () => {
      setIsLoading(false)
      setHasError(true)
    }
  }, [src])

  if (isLoading && loadingFallback) {
    return loadingFallback
  }

  if (hasError && errorFallback) {
    return errorFallback
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...props}
    />
  )
})
