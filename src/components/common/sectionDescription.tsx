import CustomDiv from './customDiv'


type SectionProps = {
    section: string,
    description: string,
    asMotionChild?: boolean,
} & React.ComponentPropsWithoutRef<typeof CustomDiv>

const SectionDescription = ({section, description,  motionProps={} }: SectionProps)=>{
    
    return (
        <CustomDiv className="flex flex-col gap-4 items-center my-6 lg:my-10 " motionProps={motionProps} plainDiv={true}>
        <div className="h-1 w-30 bg-secondary-background rounded-full"></div>
        <h2 className="text-center text-lg md:text-2xl font-semibold max-w-[280px] md:max-w-[638px] capitalize">{section}</h2>
        <h3 className="text-secondary-foreground text-center max-w-[280px] md:max-w-[638px]">{description}</h3>
    </CustomDiv>
    )
}

export default SectionDescription