import { reviewImage1, reviewImage2, reviewImage3 } from "@/assets/images";
import SimpleRating from "@/components/SimpleRating";

function Reviews(){
   const rating = 4.9
   const reviewCount = 1.5
  const reviewImages =  [reviewImage1, reviewImage2, reviewImage3]
  
  return <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1.5 bg-background rounded-full px-6 py-2 min-h-[80px]">

    <div className="flex items-center ">
      {reviewImages.map(src=> <img src={src} className="size-8 md:size-10" key={src} />)}
      <div className="shrink-0 flex items-center justify-center text-[8px] md:text-[10px] font-bold font-mulish bg-white size-8 md:size-10 rounded-full">
        {`${reviewCount}M+`}
      </div>
     </div> 

      <div className="text-white">
        <div className="flex items-center justify-center md:justify-start gap-1 md:gap-2">
          <SimpleRating rating={rating} name='review rating' readonly={true} size={16}/>
          <p className="mt-1 text-xs md:text-sm ">{rating}/5</p>
        </div>
        <p className="text-[10px] sm:text-xs font-mullish md:max-w-[160px] ml-1 mb-2 md:mb-0">100+ businesses registered successfully</p>
      </div>

    </div>
}

export default Reviews