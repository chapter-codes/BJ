import {Icon} from '@iconify/react'
import { useState } from 'react';


export interface SimpleRatingPropType{
    name: string;
    rating: number
    onClick?: (rating:number)=>void;
    size?: number;
    readonly?: boolean
    className?: string,
    iconClass?: string
}
const SimpleRating = ({name, rating, onClick, size=30, readonly=false, className='', iconClass=''}:SimpleRatingPropType)=>{
    const fullStarClass = 'material-symbols:star-rounded'
    const halfStarClass = 'clarity:half-star-solid'
    const emptyStarClass = 'si:star-alt-line'
    const ratingIconFullColor = '#F59E0B'
    const ratingIconHalfColor = '#F59E0B'
    const ratingIconEmptyColor = '#CCCCCC'
    const [ratingState, setRatingState] = useState({ rating: rating,  prevRating: rating})
    
    const  handleMouseMove =  (e:React.MouseEvent<HTMLDivElement>)=>{
        if(readonly) return; 
        const target = e.target as HTMLElement
        const closestBtn = target.closest('.star-icon')          
        if(!closestBtn) return;
        const rating = closestBtn.classList[1].split('-')[1]
        setRatingState(prev=>({...prev, rating: Number(rating)}))
    } 

    const  handleMouseLeave =  ()=>{
        if(readonly) return; 
        setRatingState(prev=>({...prev, rating: ratingState.prevRating}))
    } 

    const  handleClick =  (e:React.MouseEvent<HTMLDivElement>)=>{
        if(readonly) return; 
        const target = e.target as HTMLElement
        const closestBtn = target.closest('.star-icon')  
        if(!closestBtn) return;
        const rating = closestBtn.classList[1].split('-')[1]
        setRatingState(()=>{ 
            onClick? onClick(Number(rating)) : null
            return {rating: Number(rating), prevRating:Number(rating)}
        })
    }

    return(
       <div className={`flex items-center ${className}`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={handleClick}>
            {[1,2,3,4,5].map((i) => 
                <button className={`star-icon icon-${i} ${iconClass}`} key={`${name + i}`} >
                    <Icon 
                        icon={i <= ratingState.rating ? fullStarClass : (i - 0.5) <= ratingState.rating ? halfStarClass : emptyStarClass} 
                        color={i <= ratingState.rating ? ratingIconFullColor: (i - 0.5) <= ratingState.rating ? ratingIconHalfColor: ratingIconEmptyColor} 
                        height={i <= ratingState.rating ? size : (i - 0.5) <= ratingState.rating ? 0.74*size : 0.8*size} 
                        width={size}
                        // className={`w-[${size}px] h-[${i <= ratingState.rating ? size : (i - 0.5) <= ratingState.rating ? 0.74*size : 0.8*size}px]
                        // `}
                    />
                </button>
            )}
        </div>
    )
}

export default SimpleRating