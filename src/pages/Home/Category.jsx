import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="my-24">
            <h1 className='text-4xl font-bold text-center text-black/90'>Browse by category </h1>
            <p className="text-center text-black/80 mt-4 font-medium">Find the job thats perfect for you. about 800+ new jobs everyday</p>

            <Carousel className="w-full max-w-6xl mx-auto">
                <CarouselContent>
                    {
                        categories?.map(category => {
                            const { id, name, icon, jobsAvailable } = category;
                            const IconComponent = FaIcons[icon];
                            return (
                                <CarouselItem key={id} className="md:basis-2/4 lg:basis-1/4 hover:cursor-pointer">
                                    <div key={id} className="flex items-center gap-4 mt-8 border p-4 rounded-xl">
                                        <IconComponent size={30} className="text-blue-500" />
                                        <div>
                                            <h4 className="text-black/80 font-bold">{name}</h4>
                                            <p className="text-sm font-medium text-black/60 mt-1">{jobsAvailable} Jobs Availalbe</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        }
                        )}
                </CarouselContent>
                <CarouselPrevious className="left-0 lg:-left-12 -translate-y-0" />
                <CarouselNext className="right-0 lg:-right-12 -translate-y-0" />
            </Carousel>

        </div>
    )
}

export default Category;