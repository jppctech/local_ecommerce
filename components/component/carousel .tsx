"use client"

import { Button } from "@/components/ui/button"
import { CarouselItem, CarouselContent, Carousel } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function CarouselHome() {
  return (
    <div className="flex items-center justify-center">
      <Carousel
        className="w-full max-w-none"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-full aspect-[24/9] overflow-hidden">
              <img
                alt="Product 1"
                className="object-cover w-full h-full"
                height={1080}
                src="https://local-theme-light-demo.myshopify.com/cdn/shop/files/HERO_main_2_6e4d8f5b-69d4-41fa-9abd-234c6dfa6756.jpg?v=1655970512&width=1860"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                }}
                width={1920}
              />
              <div className="absolute inset-0 " />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-6 md:p-8 lg:p-12">
                <h3 className="text-sm md:text-3xl lg:text-4xl font-bold text-black mb-2">Acme Wireless Headphones</h3>
                <p className="text-sm md:text-lg lg:text-xl text-black mb-6">
                  Experience high-quality sound with our latest wireless headphones.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-black text-white md:w-52 md:h-16 rounded-full text-md md:text-xl font-[600]">
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="relative w-full aspect-[24/9] overflow-hidden">
              <img
                alt="Product 1"
                className="object-cover w-full h-full"
                height={1080}
                src="https://local-theme-light-demo.myshopify.com/cdn/shop/files/HERO_main_1_bb5a1d51-e731-4132-8c2d-24f909f05736.jpg?v=1655970492&width=1860"
                style={{
                  aspectRatio: "1920/1080",
                  objectFit: "cover",
                }}
                width={1920}
              />
              <div className="absolute inset-0 " />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-6 md:p-8 lg:p-12">
                <h3 className="text-sm md:text-3xl lg:text-4xl font-bold text-black mb-2">Acme Wireless Headphones</h3>
                <p className="text-sm md:text-lg lg:text-xl text-black mb-6">
                  Experience high-quality sound with our latest wireless headphones.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-black text-white md:w-52 md:h-16 rounded-full text-md md:text-xl font-[600]">
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
          
        </CarouselContent>
      </Carousel>
    </div>
  )
}
