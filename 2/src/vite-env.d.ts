/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_ACCESS_TOKEN: string;
	readonly VITE_API_SERVER: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
