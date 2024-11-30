'use client'
import { Button } from './ui/button'
import { createClientComponentClient, type Session } from '@supabase/auth-helpers-nextjs'
import { Github } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function LogoutButton() {
    const supabase = createClientComponentClient()
    const [session, setSession] = useState<Session | null>(null)
    const router = useRouter()

    const handleSignIn = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: 'http://localhost:3000/auth/callback',
            }

        })
    }

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

    useEffect(() => {
        const getSession = async () => {
            const { data } = await supabase.auth.getSession()
            setSession(data.session)
        }

        getSession()
    }, [])





    return (
        <div>
            {
                session === null ? (
                    <Button onClick={handleSignIn}>
                        <Github size={24} />
                        Iniciar sesión
                    </Button>
                ) : (
                    <Button onClick={handleSignOut}>
                        Cerrar sesión
                    </Button>
                )
            }
            {/* <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button>
                        <User size={24} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Button onClick={handleSignIn}>Sign In</Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Button onClick={handleSignOut}>Sign Out</Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu> */}
        </div>
    )
}
