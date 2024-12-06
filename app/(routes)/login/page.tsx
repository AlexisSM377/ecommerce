import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { signIn } from "@/lib/auth";
import { Chrome } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex justify-center items-start md:items-center p-8">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
                    <CardDescription className="text-center">
                        Inicia sesión con tu cuenta de Google
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <form
                        action={async () => {
                            'use server'
                            await signIn('google', {
                                redirectTo: '/profile',
                                redirect: true,
                            })
                        }}
                        className="w-full"
                    >
                        <Button className="w-full flex items-center gap-3">
                            <Chrome />
                            Sign in with Google
                        </Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    )
}