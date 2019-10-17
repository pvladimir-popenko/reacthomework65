import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Container from './Container';
import Film from './Film';
import Header from './Components/Header';
import Footer from './Components/Footer';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Container />, document.getElementById('root'));
ReactDOM.render(<Film name = "Шерлок Холмс" img = "http://avatars.mds.yandex.net/get-ott/236744/2a00000167fa7c86d1b01593752f1cef0aa2/orig" date = "Год выхода: 2009"/>, document.getElementById('film1'));
ReactDOM.render(<Film name = "Оно2" img = "https://st.kp.yandex.net/images/film_iphone/iphone360_686898.jpg" date = "Год выхода: 2019"/>, document.getElementById('film2'));
ReactDOM.render(<Film name = "Джокер" img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnSlHSU0BpABDQgctUmD_dNYr1p2C3OQn9g-v3nM15ywW9GijiQ" date = "Год выхода: 2019"/>, document.getElementById('film3'));

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
