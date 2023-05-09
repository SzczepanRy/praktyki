import React from 'react';

import { contextI } from './App';
import './Lightbox.scss';

export default function Lightbox({ setLightBoxState }: contextI) {
	return (
		<div className="background">
			<div className="mainLight">
				<div className="headerLight">
					<h1>We're looking for</h1>
					<div
						onClick={() => {
							setLightBoxState((e) => !e);
						}}
						className="exit"
					>
						<p>x</p>
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
