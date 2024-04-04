import { column, defineDb, defineTable } from 'astro:db';

const Institution = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    description: column.text()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Institution }
});
