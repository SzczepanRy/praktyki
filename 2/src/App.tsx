import image from './img/image.png';
import global from './img/PNG_Global.png';
import fb from './img/facebook.png';
import ig from './img/instagram.png';
import './App.scss';

import Lightbox, { modal, container } from './Lightbox';

import React from 'react';

export interface contextI {
	setLightBoxState: React.Dispatch<React.SetStateAction<boolean>>;
	setBamin: React.Dispatch<React.SetStateAction<string>>;
}

const bars = document.querySelectorAll<HTMLElement>('.bar');
const icon = document.querySelectorAll<HTMLElement>('.logoicon');
function App() {
	const [LightBoxState, setLightBoxState] = React.useState<boolean>(false);
	const [HeaderState, setHeaderState] = React.useState<boolean>(false);
	const [Banim, setBamin] = React.useState<string>('unset');

	return (
		<>
			{LightBoxState && (
				<div style={{ animationName: Banim }} className="a">
					<Lightbox setBamin={setBamin} setLightBoxState={setLightBoxState} />
				</div>
			)}

			<div
				onClick={(e) => {
					e.preventDefault();
					bars?.forEach((bar: HTMLElement) => bar.classList.toggle('x'));
					setHeaderState((e) => !e);
				}}
				className="logoicon"
			>
				<a
					style={{
						animationName:
							Banim === 'back' ? 'rback' : Banim === 'rback' ? 'back' : 'unset',
					}}
					className="nav-toggle"
				>
					<span className="bar x"></span>
					<span className="bar x"></span>
					<span id="last" className="bar x"></span>
				</a>
			</div>

			<header
				style={HeaderState ? { display: 'none' } : { display: 'flex' }}
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

								setBamin('back');
								setLightBoxState((e) => !e);

								//container?.setAttribute('animationName', 'tran');
								// modal?.setAttribute('animationName', 'back');
								// modal?.setAttribute('display', 'flex');
								//modal?.setAttribute('overflow', 'hidden');
								//container?.style.animationName = 'tran';
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
