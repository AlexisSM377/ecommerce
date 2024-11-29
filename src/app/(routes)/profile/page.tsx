/* eslint-disable @next/next/no-img-element */
"use client"
import { useSession } from "next-auth/react"

const Page = () => {
    const { data: session } = useSession()
    return (
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
            {session?.user ? (
                <div className="flex flex-col justify-center items-center space-y-4">
                    <img src={session.user.image ?? '/default-profile.png'} alt="profile picture" className="w-20 h-20 rounded-full" />
                    <p className="text-3xl">Hola <span className="text-blue-500 font-bold">{session.user.name}</span></p>

                </div>
            ) : (
                <div>
                    <p className="text-3xl text-center">Inicia sesión para ver tu perfil</p>
                </div>
            )}
        </div>

    )
}

export default Page