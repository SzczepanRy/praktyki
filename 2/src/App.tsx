import image from './img/image.png';
import global from './img/PNG_Global.png';
import fb from './img/facebook.png';
import ig from './img/instagram.png';
import './App.scss';
import Lightbox from './Lightbox';

import React from 'react';

export interface contextI {
	setLightBoxState: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {
	const [LightBoxState, setLightBoxState] = React.useState<boolean>(false);
	const [HeaderState, setHeaderState] = React.useState<boolean>(false);

	return (
		<>
			{LightBoxState && <Lightbox setLightBoxState={setLightBoxState} />}

			<div
				onClick={() => {
					setHeaderState((e) => !e);
				}}
				className="logoicon"
			>
				<div className="containe">
					<div className="lineL"></div>
					<div className="lineL"></div>
					<div className="lineS"></div>
				</div>
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
							onClick={() => {
								setLightBoxState((e) => !e);
							}}
							className="mainB"
						>
							Find a perfect job
						</div>
					</div>
				</div>
				<aside>
					<div className="Acenter">
						<img src={global} alt="logo" />
						<h3>IVN Sp. z.o.o.</h3>
						<div className="spaser">
							<div className="line"></div>
						</div>
						<p>Wieniawskiego 66/2 31-436 Kraków, Polska</p>
						<p>tel: +48 12 44 55 840</p>
						<p>praca@ivision.pl</p>
					</div>
				</aside>
			</main>
		</>
	);
}

export default App;
