import React from 'react';
import ReactDOM from 'react-dom';
import './css/topbar.css';
import profile_img from './img/5.jpg'
import reportWebVitals from './reportWebVitals';

const element =(
    <>
    <header>
    <div id="top">
		<nav>
			<ul>
				<li id="Logo">
					<a>Seeker</a>
					</li>
						<li id="Menu"> <a> Home </a></li>
						<li id="Menu"> <a> portfolio </a></li>
						<li id="Menu">
							<a><img src={profile_img} alt="" /></a>
						</li>
					</ul>
				</nav>
			</div>
    </header>
    </>
);

ReactDOM.render(element,document.querySelector("#root"))
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
