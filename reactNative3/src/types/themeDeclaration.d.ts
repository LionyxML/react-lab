// Expands the default Theme Type from StyledComponents with our own
import 'styled-components';
import {ThemeType} from '../themes/index';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    __foo?: 'bar';
  }
}
