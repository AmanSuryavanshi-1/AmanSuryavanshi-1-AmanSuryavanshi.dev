import {buildLegacyTheme} from 'sanity'

const props = {
  // Forest palette
  '--forest-900': '#12372A',
  '--forest-700': '#2A5741',
  '--forest-500': '#436850',

  // Sage palette
  '--sage-300': '#ADBC9F',
  '--sage-100': '#FBFADA',

  // Lime palette
  '--lime-500': '#9DCF6F',
  '--lime-700': '#749A48',

  // Additional colors
  '--red': '#db4437',
  '--yellow': '#f4b400'
}

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--forest-900'],
  '--white': props['--sage-100'],

  '--gray': props['--forest-500'],
  '--gray-base': props['--forest-700'],

  /* Component colors */
  '--component-bg': props['--forest-900'],
  '--component-text-color': props['--sage-100'],

  /* Brand */
  '--brand-primary': props['--lime-500'],

  /* Default button */
  '--default-button-color': props['--forest-500'],
  '--default-button-primary-color': props['--lime-500'],
  '--default-button-success-color': props['--lime-700'],
  '--default-button-warning-color': props['--yellow'],
  '--default-button-danger-color': props['--red'],

  /* State */
  '--state-info-color': props['--lime-500'],
  '--state-success-color': props['--lime-700'],
  '--state-warning-color': props['--yellow'],
  '--state-danger-color': props['--red'],

  /* Navigation */
  '--main-navigation-color': props['--forest-900'],
  '--main-navigation-color--inverted': props['--sage-100'],
  '--focus-color': props['--lime-500'],
})