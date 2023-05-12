import image from './img/image.png';
import global from './img/PNG_Global.png';
import fb from './img/facebook.png';
import ig from './img/instagram.png';
import './App.scss';

import Lightbox, { modal, container } from './Lightbox';

import React from 'react';

//defining a coustom type
export interface contextI {
	setLightBoxState: React.Dispatch<React.SetStateAction<boolean>>;
	setBamin: React.Dispatch<React.SetStateAction<string>>;
}

function App() {
	//setting booelan default states
	const [LightBoxState, setLightBoxState] = React.useState<boolean>(false);
	const [HeaderState, setHeaderState] = React.useState<boolean>(false);
	//setting booelan default states
	const [Banim, setBamin] = React.useState<string>('none');
	const [MenuAmination, setMenuAmination] = React.useState<string>('none');
	const [MenuActive, setMenuActive] = React.useState<string>('flex');

	return (
		<>
			{/* if the LightBoxState == true than we return a jsx element  */}
			{LightBoxState && (
				// styling based on Banim
				<div style={{ animationName: Banim }} className="a">
					{/* sending verables to lightbox.tsx */}
					<Lightbox setBamin={setBamin} setLightBoxState={setLightBoxState} />
				</div>
			)}

			<div
				onClick={(e) => {
					e.preventDefault();
					const bars = document.querySelectorAll<HTMLElement>('.bar');
					bars?.forEach((bar: HTMLElement) => bar.classList.toggle('x'));
					//setting states for
					if (HeaderState === true) {
						//turning the menu on
						setHeaderState((e) => !e);
						setMenuAmination('back');
						setMenuActive('flex');
					} else {
						//turning the menu off
						setMenuAmination('rback');
						setTimeout(async () => {
							setHeaderState((e) => !e);
							setMenuActive('none');
						}, 900);
					}
				}}
				className="logoicon"
			>
				<a
					style={{
						//assinghning types to nav-toggle by monitoring the  Banim verable
						//(Button animation)
						animationName:
							Banim === 'back' ? 'rback' : Banim === 'rback' ? 'back' : 'none',
					}}
					className="nav-toggle"
				>
					<span className="bar x"></span>
					<span className="bar x"></span>
					<span id="last" className="bar x"></span>
				</a>
			</div>

			<header
				//assinghning types to header by monitoring the MenuActive and MenuAmination verable
				style={{ display: MenuActive, animationName: MenuAmination }}
				className="header"
			>
				<div className="title">
					<h1>www.ivision.pl</h1>
				</div>
				<div className="navbar">
					<ul>
						<li>strona główna</li>
						<li>usługi</li>
						<li>o firmie</li>
						<li>kontakt</li>
					</ul>
					<div className="social">
						<div className="fb">
							<img src={fb} alt="fb" />
						</div>
						<div className="ig">
							<img src={ig} alt="ig" />
						</div>
					</div>
				</div>
			</header>

			<main>
				<div className="main">
					<div className="Mcenter">
						<img src={image} alt="logo" />
						<h1>Start your journey with Ivision</h1>
						<h3>Nice to meet you. Let's work together!</h3>
						<div
							onClick={(e) => {
								e.preventDefault();
								//changing state
								setBamin('back');
								setLightBoxState((e) => !e);
							}}
							className="mainB"
						>
							Find a perfect job
						</div>
					</div>
				</div>
				<div className="main-line"></div>
				<aside>
					<div className="Acenter">
						<img src={global} alt="logo" />
						<h3>IVN Sp. z.o.o.</h3>
						<div className="spaser">
							<div className="line"></div>
						</div>
						<p>Wieniawskiego 66/2 31-436 Kraków, Polska</p>
						<p className="mark">tel: +48 12 44 55 840</p>
						<p className="mark">praca@ivision.pl</p>
					</div>
				</aside>
			</main>
		</>
	);
}

export default App;
