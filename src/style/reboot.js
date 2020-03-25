import { createGlobalStyle } from 'styled-components';

//****** Contains Reboot.css ******/
// https://github.com/twbs/bootstrap/blob/v4-dev/dist/css/bootstrap-reboot.css

const Reboot = createGlobalStyle`

[hidden] {
  display: none !important;
}
`;

export default Reboot;
