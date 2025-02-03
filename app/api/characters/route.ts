// api/marvel.js

import { createHash } from 'crypto';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const name = searchParams.get('name');

	// Definimos los parámetros fijos y las claves
	const ts = "1234";
	const publicKey = process.env.API_KEY as string;       // Reemplaza con tu API key pública
	const privateKey = process.env.PRIVATE_KEY as string;  // Reemplaza con tu API key privada

	// Generamos el hash: MD5( privateKey + publicKey + ts )
	const hash = createHash('md5')
		.update(ts + privateKey + publicKey)
		.digest('hex');

	// Construimos la URL de la API de Marvel
	let url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=50`;

	// Si se pasó un nombre, lo agregamos a la URL (codificando el valor)
	if (name) {
		url += `&name=${encodeURIComponent(name)}`;
	}

	try {
		// Realizamos la petición a la API de Marvel
		const response: Response = await fetch(url);

		// Verificamos si la respuesta es correcta
		if (!response.ok) {
			throw new Error(`Error al llamar a Marvel API: ${response.statusText}`);
		}

		const data = await response.json();

		// Devolvemos la respuesta recibida
		return NextResponse.json(data);
	} catch (error: any) {
		// En caso de error, devolvemos el mensaje correspondiente
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
