

// export function useMarvelCharacters(name?: string) {
// 	const [characters, setCharacters] = useState(null);
// 	const [error, setError] = useState<string | null>(null);

import { getCharactersAction } from "@/app/actions/characters";

// 	useEffect(() => {
// 		const fetchCharacters = async () => {
// 			try {
// 				const url = name ? `/api/characters?name=${encodeURIComponent(name)}` : '/api/characters';
// 				const response = await fetch(url);
// 				if (!response.ok) {
// 					throw new Error(`Error fetching characters: ${response.statusText}`);
// 				}
// 				const data = await response.json();
// 				setCharacters(data.data.results);
// 			} catch (err: any) {
// 				setError(err.message);
// 			}
// 		};
// 		fetchCharacters();
// 	}, [name]);

// 	return { characters, error };
// }


export async function getCharacters(name?: string) {
	const response = await getCharactersAction(name);
	if (!response.ok) {
		throw new Error(`Error fetching characters: ${response.statusText}`);
	}
	const data = await response.json();

	return data;
}