import SectionDescription from "@/components/common/sectionDescription"
import CustomDiv from "@/components/common/customDiv"
// type customButton = {
// }

type OurServicesProps ={
    className? : string;
}

const OurServices = ({className}:OurServicesProps)=>{
    return <CustomDiv className={` ${className}`}>
        <SectionDescription 
            section="our services"
            description="We offer comprehensive business registration solutions"
        />
    </CustomDiv>
}
export default OurServices
