import PostgREST from './mod.ts'

const SQL = new PostgREST({
	pgrst_url: Deno.env.get('PGRTS_HOST'),
	schema: Deno.env.get('PGRTS_SCHEMA') ?? 'public',
	jwt: Deno.env.get('PGRTS_JWT') ?? '',
})

const result = await SQL.query(Deno.args[0])

console.log(
	JSON.stringify(result),
)
