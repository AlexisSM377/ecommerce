import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { OAuthButtons } from "./components/oauth-signin";



export default async function LoginPage() {

    return (
        <section className="h-[calc(80vh-57px)] flex justify-center items-center">
            <Card className="mx-auto max-w-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription>Login this demo uses github</CardDescription>
                </CardHeader>
                <CardContent>
                    <OAuthButtons />
                </CardContent>
            </Card>
        </section>
    )
}