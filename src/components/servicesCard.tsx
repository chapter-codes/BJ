

type ServiceProps ={
    service:{
        serviceType: string,
        shortDescription: string,
        icon: React.ReactNode
    }
}

const ServicesCard = ({service:{serviceType, shortDescription, icon}}: ServiceProps)=>{

    return <div className="flex flex-col justify-center gap-2 w-full lg:h-[352px] py-10 px-4 md:px-8 bg-white rounded-lg ">
        <div className="mb-4">{icon}</div>
        <h2 className="lg:hidden text-sm md:text-lg text-foreground font-semibold" dangerouslySetInnerHTML={{ __html: serviceType }} ></h2>
        <h2 className="hidden lg:block text-lg text-foreground font-semibold"  >{serviceType.replace('<br>', '')}</h2>
        <p className="text-sm text-secondary-foreground">{shortDescription}</p>
    </div>
}

export default ServicesCard