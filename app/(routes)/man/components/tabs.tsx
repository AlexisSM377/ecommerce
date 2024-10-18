import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TabsExample = () => {
    return (
        <div className="flex items-center justify-center mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl mt-6 px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="account" className="w-[800px]">
                <TabsList className="grid w-full grid-cols-3 rounded-xl">
                    <TabsTrigger value="man">Hombre</TabsTrigger>
                    <TabsTrigger value="women">Mujer</TabsTrigger>
                    <TabsTrigger value="unisex">Unisex</TabsTrigger>
                </TabsList>
                <TabsContent value="man">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sneaker</CardTitle>
                            <CardDescription>
                                Sneaker de calidad a precios accesibles.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div>
                                <h3 className="text-lg font-semibold">Zapateria ISA</h3>
                                <p>Somos una zapateria que se dedica a la venta de zapatos de calidad a precios accesibles.</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="women">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sneaker</CardTitle>
                            <CardDescription>
                                Sneaker de calidad a precios accesibles.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div>
                                <h3 className="text-lg font-semibold">Zapateria ISA</h3>
                                <p>Somos</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default TabsExample