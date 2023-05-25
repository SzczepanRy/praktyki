import axios from 'axios';

const Api = axios.create({
	baseURL: import.meta.env.VITE_API_SERVER!,
	headers: {
		Authorization: `bearer ${import.meta.env.VITE_ACCESS_TOKEN!}`,
	},
});

export const getMain = async () => {
	const { data } = await Api.get('/api/main-pages/1');
	return data.data;
};
export const getMenu = async () => {
	const { data } = await Api.get('/api/menus/1');
	return data.data;
};
export const getJobs = async () => {
	const { data } = await Api.get('/api/jobs');
	return data.data;
};
