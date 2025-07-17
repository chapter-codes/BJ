import SimpleRating from "@/components/SimpleRating";


type TestimonialType = {
  testimonial:{
    rating: number;         // Rating (typically 1-5)
    name: string;          // Full name of the testimonial giver
    comment: string;       // The testimonial text content
    image: string;         // URL/path to the person's image
    position: string;      // Job title/position
    company: string;       // Company/organization name
  }      
};
function TestimonialCard({testimonial:{rating, comment,name, company, position, image}}:TestimonialType) {
  return (
    <div className="shrink-0 flex flex-col gap-5 text-shadow-secondary-foreground bg-white w-full md:w-1/2 max-w-[560px] rounded-[20px] p-10">
        <SimpleRating name={comment} rating={rating} readonly={true} size={24} className=""/>
        <p className="text-base">"{comment}"</p>
        <div className="flex gap-4 mt-2">
            <div className="shrink-0 flex items-center justify-center overflow-hidden size-16 rounded-full bg-background">
                <img src={image} alt={'profile display picture of ' + name} className="w-full h-full object-cover"/>
            </div>
            <div className="mt-1">
                <strong className="font-medium text-foreground">{name}</strong>
                <p className="text-sm">{position}, {company}</p>
            </div>
        </div>


    </div>
  )
}

export default TestimonialCard
