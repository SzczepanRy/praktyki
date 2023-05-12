import { contextI } from './App';
import './Lightbox.scss';

import x from './img/exit.png';

export const modal = document.querySelector<HTMLElement>('.background');
export const container = document.querySelector<HTMLElement>('.mainLight');

//recexing the verables form the app.tsx file
export default function Lightbox({ setBamin, setLightBoxState }: contextI) {
	return (
		<div className="background">
			<div className="mainLight">
				<div className="headerLight">
					<h2>We're looking for</h2>
					<div
						onClick={(e) => {
							e.preventDefault();
							//changing states
							setBamin('rback');
							setTimeout(() => {
								setLightBoxState((e) => !e);
							}, 900);
						}}
						className="exit"
					>
						<img className="xIm" src={x} alt="" />
					</div>
				</div>

				<div className="jobs">
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
					<div className="job">
						<h3>product designer</h3>
						<p>Cracow</p>
					</div>
				</div>
				<div className="a">
					<div className="cover"></div>
				</div>
			</div>
		</div>
	);
}
