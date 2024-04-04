import { db, Institution } from 'astro:db';

export default async function seed() {
	await db.insert(Institution).values([
		{
			id: 1,
			name: 'Presidencia de la República',
			email: 'presidencia@guatemala.gob.gt',
			description: 'presidencia de la república'
		}
	])
}
