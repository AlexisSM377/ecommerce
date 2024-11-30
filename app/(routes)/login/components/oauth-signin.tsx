'use client'
import { Button } from "@/components/ui/button"
import { Provider } from "@supabase/supabase-js"
import { Github } from "lucide-react"

type OAuthProvider = {
    name: Provider
    displayName: string
    icon?: JSX.Element
}

export function OAuthButtons() {
    const oAuthProviders: OAuthProvider[] = [
        {
            name: "github",
            displayName: 'Github',
            icon: <Github size={24} />
        }
    ]

    return (

        <>
            {oAuthProviders.map((provider) => (
                <Button className="w-full flex items-center justify-center gap-2" variant='outline' key={provider.name}>
                    {provider.icon}
                    Login with {provider.displayName}
                </Button>
            ))}

        </>
    )
}