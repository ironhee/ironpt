import fp from 'lodash/fp'

export const CLASS_NAMES = {
  PRESENTATION: 'ironpt__presentation',
  SCALE: 'ironpt__scale',
  SCALE_CONTENT: 'ironpt__scale__content',
  SLIDES: 'ironpt__slides',
  SLIDE: 'ironpt__slide',
  SLIDE_INDEX: 'ironpt__slide-index',
  COVER: 'ironpt__cover',
  CENTER: 'ironpt__center',
  H1: 'ironpt__h1',
  H2: 'ironpt__h2',
  P: 'ironpt__p',
  UL: 'ironpt__ul',
  LI: 'ironpt__li',
  CODE: 'ironpt__code'
}

export const QUERY_SELECTORS = fp.mapValues(className => '.' + className)(CLASS_NAMES)
