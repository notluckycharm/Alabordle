import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'w',
  'e',
  't',
  'y',
  'í',
  'ì',
  'i',
  'o',
  'ó',
  'ò',
  'p',
  'a',
  's',
  'd',
  'f',
  'ɬ',
  "h",
  "k",
  'l',
  "à",
  "á",
  "c",
  "b",
  "n",
  "m",
  "ⁿ"
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
