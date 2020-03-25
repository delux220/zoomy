import React from 'react';
import { ModalProvider } from './src/store/modalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './src/assets/css/rtl.css';
import './src/assets/webslidemenu/color-skins/color10.css';
import './src/assets/css/dashboard.css';
import './src/assets/iconfonts/font-awesome/css/font-awesome.min.css';


// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <ModalProvider>{element}</ModalProvider>;
};
