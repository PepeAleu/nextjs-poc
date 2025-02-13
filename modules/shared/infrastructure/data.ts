import { createHash } from "node:crypto";

export interface IRepositoryData {
	apiHost: string;
	authParams: string;
	limitCharacters: string;
	limitComics: string;
}

let repositoryData: IRepositoryData;

export function getRepositoryData(): IRepositoryData {
	if (repositoryData) {
		return repositoryData;
	}
	const ts = Date.now();
	const publicKey = process.env.API_KEY as string;
	const privateKey = process.env.PRIVATE_KEY as string;
	const hash = createHash("md5")
		.update(ts + privateKey + publicKey)
		.digest("hex");
	repositoryData = {
		apiHost: 'http://gateway.marvel.com/v1/public/',
		authParams: `ts=${ts}&apikey=${publicKey}&hash=${hash}`,
		limitCharacters: '2',
		limitComics: '10',
	};
	return repositoryData;
}