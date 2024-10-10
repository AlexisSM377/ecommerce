/* eslint-disable @next/next/no-img-element */

import { useGetInfo } from "@/api/getHomeInfo"
import { DetailsType } from "@/types/details";
import { ResponseType } from "@/types/response";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Avatar from "@/components/avatar";




const InfoIsa = () => {
    const { result, loading }: ResponseType = useGetInfo();
    console.log(result)

    return (
        <div className="pt-10">
            {loading && result === null && (
                <p>Cargando...</p>
            )}
            {!loading && result !== null && (
                <div>
                    {result.map((item: DetailsType) => (
                        <div key={item.id}>
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.logo.url}`} alt={item.title} className="w-full h-80 object-cover" />
                            <h1 className="bg-gradient-to-br from-indigo-400 via-violet-600 to-cyan-400 bg-clip-text text-transparent text-7xl font-bold text-center pt-24">{item.title}</h1>
                            <p className="mt-12 text-xl text-justify">{item.description}</p>
                            <Accordion type="single" collapsible className="sm:max-w-2xl md:max-2xl mx-auto pt-48 px-4 sm:px-6 lg:px-8">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-lg">Mision</AccordionTrigger>
                                    <AccordionContent className="text-justify text-base">
                                        {item.mission}
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-lg">Vision</AccordionTrigger>
                                    <AccordionContent className="text-justify text-base">
                                        {item.vision}
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-lg">Objetivos</AccordionTrigger>
                                    <AccordionContent className="text-justify text-base">
                                        {item.objectives}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                    ))}
                </div>
            )}
            <Avatar />
        </div>
    )
}

export default InfoIsa