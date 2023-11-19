import { useCallback, useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

export const BugButton = () => {
  const [hasError, setHasError] = useState(false)

  const throwError = useCallback(() => {
    setHasError(true)
  }, [])

  useEffect(() => {
    if (hasError) {
      throw new Error()
    }
  }, [hasError])

  return (
    <Button onClick={throwError}>
      Throw error
    </Button>
  )
}
