
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

// components
import CustomDiv from "@/components/common/customDiv"
import SectionDescription from "@/components/common/sectionDescription"
import TestimonialCard from "@/components/testimonialCard"
import { testimonial1, testimonial2 } from "@/assets/images"
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    rating: 5,
    name: "Rebecca Thompson",
    comment: "BeeJayTech made registering my company easy and stress-free. Their team was professional and responsive throughout the process. Highly recommended!",
    image: testimonial1,
    position: "CEO",
    company: "Thompson Technologies"
  },
  {
    rating: 5,
    name: "Michael Donovan",
    comment: "The team at BeeJayTech helped me navigate the complex process of NGO registration. Their expertise and guidance were invaluable.",
    image: testimonial2,
    position: "Founder",
    company: "Hope Foundation"
  },
  {
    rating: 4,
    name: "Sarah Johnson",
    comment: "Fast and efficient service! We got our business registered in record time. Will definitely use them again for compliance matters.",
        image: testimonial1,
    position: "Managing Director",
    company: "Prime Solutions Ltd"
  },
  {
    rating: 5,
    name: "Rebecca Thompson",
    comment: "Even our complicated multi-director registration was handled smoothly. BeeJayTech's consultants know the CAC system inside out.",
        image: testimonial1,
    position: "CEO",
    company: "Thompson Technologies"
  },
  {
    rating: 5,
    name: "Michael Donovan",
    comment: "They went above and beyond to help us with post-registration compliance. Truly a partner for business growth!",
        image: testimonial2,
    position: "Founder",
    company: "Hope Foundation"
  }
];

export function CustomCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[95%] mx-auto md:w-full my-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset} 
    >
      <CarouselContent className="flex gap-2 items- p-2 ml-0">
        {testimonials.map((testimonial) => 
             <TestimonialCard testimonial={testimonial} key={testimonial.comment}/>
         )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}



function WhatOurClientsSay() {
  return (
    <CustomDiv className="mt-30">
      <SectionDescription section="whatour clients say" description="Hear from businesses we've helped register."/>
        <CustomCarousel />
    </CustomDiv>
  )
}

export default WhatOurClientsSay
