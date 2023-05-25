import { contextI } from './App';
import './style/Lightbox.scss';

import x from './img/exit.png';
import { getJobs } from './api';
import { useQuery } from 'react-query';
export const modal = document.querySelector<HTMLElement>('.background');
export const container = document.querySelector<HTMLElement>('.mainLight');

interface attribJobsI {
	city: string;
	jobTitle: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

interface jobsI {
	id: number;
	attributes: attribJobsI;
}

//recexing the verables form the app.tsx file
export default function Lightbox({ setBamin, setLightBoxState }: contextI) {
	const { data: jobs, isError } = useQuery<jobsI[]>('jobs', getJobs);
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
					{jobs?.map((el: jobsI) => (
						<div className="job">
							<h3>{!isError ? el.attributes.jobTitle : 'faled to fetch'}</h3>
							<p>{!isError ? el.attributes.city : 'faled to fetch'}</p>
						</div>
					))}
				</div>
				<div className="a">
					<div className="cover"></div>
				</div>
			</div>
		</div>
	);
}
