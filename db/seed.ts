import { db, Institution } from 'astro:db';

export default async function seed() {
	await db.insert(Institution).values([
		{
			id: 1,
			name: 'Secretaría General de la Presidencia',
			email: 'libreacceso@sgp.gob.gt',
			description: 'presidencia de la república'
		}
	])
}
