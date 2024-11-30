/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface CarouselProductProps {
    images: {
        id: number
        url: string
    }[]
}

const CarouselProduct = (props: CarouselProductProps) => {
    const { images } = props

    return (
        <div className="sm:px-16 p-2">
            <Carousel>
                <CarouselContent>
                    {images.map((image) => (
                        <CarouselItem key={image.id}>
                            <img
                                src={`${image.url}`}
                                alt="Image product"
                                className="rounded-md"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
export default CarouselProduct