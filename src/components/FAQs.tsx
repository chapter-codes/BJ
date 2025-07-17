
// components
import CustomDiv from "@/components/common/customDiv"
import SectionDescription from "@/components/common/sectionDescription"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is CAC registration?",
    answer: "CAC registration is the official process of registering a business or company with the Corporate Affairs Commission of Nigeria, giving it legal recognition and allowing it to operate formally in the country."
  },
  {
    question: "Why do I need to register my business with CAC?",
    answer: "Registering your business gives it legal status, builds customer trust, allows you to open a corporate bank account, bid for contracts, and access loans or grants from government and private institutions."
  },
  {
    question: "What documents are required for CAC registration?",
    answer: "Documents vary by business type but generally include:<br>- Valid means of identification (e.g., NIN, passport, voter's card)<br>- Passport photograph<br>- Business name and objectives<br>- Names and details of proprietors, directors, or trustees"
  },
  {
    question: "What is a Name Reservation, and is it necessary?",
    answer: "Name reservation is the first step in CAC registration. It involves checking and reserving your proposed business name to ensure it's available. It is mandatory before proceeding with full registration."
  },
  {
    question: "What is the difference between a Business Name and a Company?",
    answer: "<strong>Business Name:</strong> Suitable for sole proprietors or partnerships; has simpler structure and lower cost.<br><br><strong>Company (Ltd):</strong> Has a separate legal identity, better for scaling and attracting investors; more compliance is required."
  },
  {
    question: "Can I change my business name or details after registration?",
    answer: "Yes. CAC allows post-registration changes such as:<br><br>- Change of business name<br>- Addition/removal of directors or partners<br>- Change of address or objects. These changes require an application and supporting documents."
  },
  {
    question: "What happens if my proposed business name is already taken?",
    answer: "If your proposed name is already in use or too similar to an existing name, you'll need to provide alternative names. It's advised to submit at least two name options during reservation."
  },
  {
    question: "Can I upgrade a business name to a limited liability company?",
    answer: "Yes, you can upgrade a Business Name to a Limited Liability Company."
  },
  {
    question: "What is a Certificate of Incorporation?",
    answer: "It's the official document issued by CAC after a successful registration. It confirms that your business is legally recognized and includes your registration number, date of incorporation, and other details."
  },
  {
    question: "How do I verify if a business is registered with CAC?",
    answer: 'You can verify a business via the CAC Public Search portal: <a href="https://search.cac.gov.ng" target="_blank" rel="noopener noreferrer">https://search.cac.gov.ng</a>. Simply enter the business name or registration number to view its status.'
  }
];

function FAQs() {
    return <CustomDiv className="pt-4">
        <SectionDescription section="Frequently Asked Questions" description="Find answers to common questions below" />
        <div className="flex justify-center bg-white mt-10 py-6 lg:py-10 px-6 rounded-4xl">
            <Accordion type="single" collapsible className="faq lg:min-w-[720px]">
                {faqs.map(faq=>
                    <AccordionItem value={faq.question} key={faq.question} className="text-3xl text-secondary-foreground  border-none mb-4 w-full max-w-[720px]">
                        <AccordionTrigger className="text-base font-mulish font-normal hover:no-underline">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base font-mulish bg-background-4 rounded-xl px-4 md:px-8 py-6  min-h-[100px]">
                            <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                        </AccordionContent>
                    </AccordionItem>
                )}   
            </Accordion>
        </div>
    </CustomDiv>
}

export default FAQs
