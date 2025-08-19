import Input from './input'
import Label from './label'
import SelectId from './selectID'

function PersonalInformation() {
  return (
    <div className=''>
        <h3 className='text-lg  font-semibold  capitalize'>Personal Information</h3>
        <p className="text-base text-secondary-foreground mt-1 ">Your contact and identification details.</p>
        <form action="" className="flex flex-col mt-10">
            <Label htmlFor='fullName' >Full Name</Label>
            <Input placeholder='Enter full name' id='fullName' className='placeholder-placeholder-foreground' />
            <div className="flex gap-4">
                <div className="">
                    <Label htmlFor='email'>Email Address</Label>
                    <Input placeholder='Enter your email' id='email' className='placeholder-placeholder-foreground mt-1' />
                </div>
                 <div className="">
                    <Label htmlFor='phone'>Phone number</Label>
                    <Input placeholder='+234123456789' type='number' id='phone' className='placeholder-placeholder-foreground mt-1' />
                </div>
            </div>
             <Label htmlFor="residentialAddress">Residential Address</Label>
            <textarea 
                name="residentialAddress" 
                id="residentialAddress" 
                placeholder="Enter your residential address"
                className="h-30 border border-service-border rounded-[10px] resize-none pt-2 pl-4 mt-1 mb-8 placeholder-placeholder-foreground"
                >
            </textarea>
            <div className="flex mt-6 gap-8">
                <div className="basis-1/2 w-full">
                    <Label htmlFor='idType'>ID type</Label>
                    <SelectId />
                </div>
                 <div className="basis-1/2 flex flex-col">
                    <Label htmlFor='idNumber'>ID number</Label>
                    <Input placeholder='Enter ID number' pattern='\d+' id='phone' className='placeholder-placeholder-foreground mt-1' />
                </div>
            </div>

        </form>
      
    </div>
  )
}

export default PersonalInformation
