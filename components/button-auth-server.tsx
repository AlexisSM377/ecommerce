import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { LogoutButton } from "./LogoutButton";

export async function AuthButtonServer() {
    const supabase = createServerComponentClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();

    return <LogoutButton session={session} />;
}