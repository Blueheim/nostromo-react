import { themes, suffixes, directions } from './data.js'

const getFullClassObject = props => {
  const themeClasses = {}
  const roundedClasses = {}
  const borderClasses = {}
  const paddingClasses = {}
  const marginClasses = {}

  themes.forEach(theme => {
    themeClasses[`m-${theme}`] = props[theme]
  })

  suffixes.forEach(suffix => {
    roundedClasses[`m-rounded-${suffix}`] = props[`rounded-${suffix}`]
    borderClasses[`m-border-${suffix}`] = props[`border-${suffix}`]
    paddingClasses[`m-padding-${suffix}`] = props[`padding-${suffix}`]
    marginClasses[`m-margin-${suffix}`] = props[`margin-${suffix}`]
    directions.forEach(direction => {
      roundedClasses[`m-rounded-${suffix}--${direction}`] = props[`rounded-${suffix}-${direction}`]
      borderClasses[`m-border-${suffix}--${direction}`] = props[`border-${suffix}-${direction}`]
      paddingClasses[`m-padding-${suffix}--${direction}`] = props[`padding-${suffix}-${direction}`]
      marginClasses[`m-margin-${suffix}--${direction}`] = props[`margin-${suffix}-${direction}`]
    })
  })

  return {
    ...themeClasses,
    ...roundedClasses,
    ...borderClasses,
    ...paddingClasses,
    ...marginClasses
  }
}

const getThemeClassObject = props => {
  const themeClasses = {}
  themes.forEach(theme => {
    themeClasses[`m-${theme}`] = props[theme]
  })

  return themeClasses
}

const getRoundedClassObject = props => {
  const roundedClasses = {}
  suffixes.forEach(suffix => {
    roundedClasses[`m-rounded-${suffix}`] = props[`rounded-${suffix}`]
  })

  return roundedClasses
}

const getBorderClassObject = props => {
  const borderClasses = {}
  suffixes.forEach(suffix => {
    borderClasses[`m-border-${suffix}`] = props[`border-${suffix}`]
  })

  return borderClasses
}

export { getBorderClassObject, getRoundedClassObject, getThemeClassObject, getFullClassObject }
