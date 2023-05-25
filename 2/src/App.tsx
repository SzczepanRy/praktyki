import image from './img/image.png';
import global from './img/PNG_Global.png';
import fb from './img/facebook.png';
import ig from './img/instagram.png';
import './style/App.scss';
import { getMain, getMenu } from './api';
import { useQuery } from 'react-query';
import Lightbox from './Lightbox';

import React from 'react';

//defining a coustom type
export interface contextI {
	setLightBoxState: React.Dispatch<React.SetStateAction<boolean>>;
	setBamin: React.Dispatch<React.SetStateAction<string>>;
}

interface attribI {
	title: string;
	address: string;
	tel: string;
	email: string;
	grayText: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

interface mainI {
	id: number;
	attributes: attribI;
}

interface menuMenuI {
	menu: string[];
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

interface menuI {
	id: number;
	attributes: menuMenuI;
}

function App() {
	//setting booelan default states
	const [LightBoxState, setLightBoxState] = React.useState<boolean>(false);
	const [HeaderState, setHeaderState] = React.useState<boolean>(false);
	//setting booelan default states
	const [Banim, setBamin] = React.useState<string>('none');
	const [MenuAmination, setMenuAmination] = React.useState<string>('none');
	const [MenuActive, setMenuActive] = React.useState<string>('flex');

	const { data: main, isError: errorMain } = useQuery<mainI>('main', getMain);
	const { data: menu, isError: errorMenu } = useQuery<menuI>('menu', getMenu);

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
						<li>{!errorMenu ? menu?.attributes.menu[0] : 'error fetching'}</li>
						<li>{!errorMenu ? menu?.attributes.menu[1] : 'error fetching'}</li>
						<li>{!errorMenu ? menu?.attributes.menu[2] : 'error fetching'}</li>
						<li>{!errorMenu ? menu?.attributes.menu[3] : 'error fetching'}</li>
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
						<h1>{!errorMain ? main?.attributes.title : 'error fetching'}</h1>
						<h3>{!errorMain ? main?.attributes.grayText : 'error fetching'}</h3>
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
						<p>{!errorMain ? main?.attributes.address : 'error fetching'}</p>
						<p className="mark">
							{!errorMain ? main?.attributes.tel : 'error fetching'}
						</p>
						<p className="mark">
							{!errorMain ? main?.attributes.email : 'error fetching'}
						</p>
					</div>
				</aside>
			</main>
		</>
	);
}

export default App;
