import { title } from "@/components/primitives";
import { createClient } from '@/utils/supabase/server'
import  Shippers  from "./shippers";

export default function AddressPage() {
	return (
		<div>
			<h1 className={title()}>Address Book</h1>
			<Shippers />
		</div>
	);
}

// export default async function Page() {
//   const supabase = createClient()
//   const { data: shippers } = await supabase.from('shippers').select()

//   return <pre>{JSON.stringify(shippers, null, 2)}</pre>
// }