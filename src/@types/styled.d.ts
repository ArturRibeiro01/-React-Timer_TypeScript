// Arquivo de definição de tipos do typescript.
// import styled from 'styled-components'
import { defaultTheme } from '../styles/themes/default/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
