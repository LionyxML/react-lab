// Expande tipo default Theme do StyledComponents com o type do tema default
import 'styled-components';
import {ThemeType} from './index';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    __foo?: 'bar';
  }
}
