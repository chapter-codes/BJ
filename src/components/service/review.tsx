


type mainSummary ='service information' | 'business information' | 'personal information'
const mainSummary={
    'service information' : ['service type', 'business type'],
    'business information' :['business type', 'business description', 'business address', 'state', 'local government area'], 
    'personal information':['full name', 'phone number', 'email', 'residential address', 'id type', 'id number']
}


function Review() {
  return (
    <div className=''>
        <h3 className='text-lg  font-semibold  capitalize'>Review & Submit</h3>
        <p className="text-base text-secondary-foreground mt-1 ">Please review your information before submitting.</p>

        <div className="bg-tertiary-background text-secondary-foreground p-6 rounded-[10px] mt-10">
            <h4 className=' font-semibold'>Service Summary</h4>
            {
                Object.keys(mainSummary).map((summaryGroup, index) => {
                    const group = summaryGroup as mainSummary;
                    return (
                        <div key={group} className="my-4">
                            <h5 className='font-medium mb-1 capitalize'>{ index>0? group: null}</h5>
                            {/* <div className="flex"> */}
                                {mainSummary[group].map((item) => (
                                    <div className="flex justify-between w-full py-1.5">
                                        <p key={item}>{item}</p>
                                        <p className="">*********</p>
                                    </div>
                                ))}
                            {/* </div> */}
                        </div>
                    );
                })
            }
        </div>
    </div>
  )
}

export default Review
