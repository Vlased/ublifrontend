export type Mods = Record<string, boolean | undefined>

export const classNames = (classes: Array<string | undefined>, mods: Mods = {}): string => {
  const mainClasses = classes.filter(Boolean)

  const modsClasses = Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map(([className]) => className)

  return [...mainClasses, ...modsClasses].join(' ')
}
