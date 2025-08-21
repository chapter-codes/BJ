type stepDescriptionProps ={
    heading : string;
    description:string
}    
export default function StepDescription({heading="", description=''}:stepDescriptionProps){
    return(
        <>
            <h3 className=' text-lg  font-semibold  capitalize'>{heading}</h3>
            <p className=" text-base text-secondary-foreground mt-1 mb-2  md:max-w-full ">{description}</p>
        </>
    )
}