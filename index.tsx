import MainPage from "pages/mainPage";
import { render } from "react-dom";
import * as React from 'react';
import 'styles/rootStyle.scss'

render(<MainPage />, document.getElementById('root'));

if(module.hot) {
    module.hot.accept();
  }