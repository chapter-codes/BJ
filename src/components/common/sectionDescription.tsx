type SectionProps ={
    section: string,
    description: string
}

const SectionDescription = ({section, description}: SectionProps)=>{
    return <div className="flex flex-col gap-4 items-center mt-4 lg:my-10">
        <div className="h-1 w-30 bg-secondary-background rounded-full"></div>
        <h2 className="text-2xl font-semibold max-w-[638px] capitalize">{section}</h2>
        <h3 className="text-secondary-foreground text-center max-w-[638px]">{description}</h3>
    </div>
}

export default SectionDescription