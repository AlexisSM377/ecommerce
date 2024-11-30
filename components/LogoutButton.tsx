/* eslint-disable @next/next/no-img-element */
import { signOut, useSession } from 'next-auth/react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import { User } from 'lucide-react'

const LogoutButton = () => {
    const router = useRouter()
    const { data: session } = useSession()

    return (
        <div>
            {session?.user ? (
                <div className='flex justify-center items-center gap-2'>
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild className='cursor-pointer'>
                            <Button variant="outline" size="icon">
                                <img src={session.user.image ?? '/default-profile.png'} alt="profile picture" className="w-8 h-8 rounded-full" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => router.push("/profile")}>
                                Perfil
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => signOut({
                                callbackUrl: "/"
                            })}>
                                Cerrar sesión
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>


                </div>
            ) : (

                <User
                    strokeWidth="1"
                    className="cursor-pointer"
                    onClick={() => router.push("/login")}
                />
            )}
        </div>
    )
}

export default LogoutButton