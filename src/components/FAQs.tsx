
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
    question: "Can I change my business name or details after registration?",
    answer: "Yes. CAC allows post-registration changes such as:<br><br>- Change of business name<br>- Addition/removal of directors or partners<br>- Change of address or objects. These changes require an application and supporting documents."
  },
  {
    question: "What happens if my proposed business name is already taken?",
    answer: "If your proposed name is already in use or too similar to an existing name, you’ll need to provide alternative names. It’s advised to submit at least two name options during reservation."
  },
  {
    question: "Can I upgrade a business name to a limited liability company?",
    answer: "Yes, you can upgrade a Business Name to a Limited Liability Company."
  },
  {
    question: "What is a Certificate of Incorporation?",
    answer: "It’s the official document issued by CAC after a successful registration. It confirms that your business is legally recognized and includes your registration number, date of incorporation, and other details."
  },
  {
    question: "How do I verify if a business is registered with CAC?",
    answer: 'You can verify a business via the CAC Public Search portal: <a className=\'text-red-500\' href="https://search.cac.gov.ng" target="_blank">https://search.cac.gov.ng</a>. Simply enter the business name or registration number to view its status.'
  }
];

function FAQs() {
    return <CustomDiv className="pt-4">
        <SectionDescription section="Frequently Asked Questions" description="Find answers to common questions below" />
        <div className="flex justify-center bg-white mt-10 py-4 lg:py-10 px-4 rounded-4xl">
            <Accordion type="single" collapsible className="faq lg:min-w-[720px]">
                {faqs.map(faq=>
                    <AccordionItem value={faq.question} key={faq.question} className="border-none mb-4 w-full max-w-[720px]">
                        <AccordionTrigger className="hover:no-underline">{faq.question}</AccordionTrigger>
                        <AccordionContent className="bg-background-4 rounded-xl px-4 py-4 min-h-[100px]">
                            <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                        </AccordionContent>
                    </AccordionItem>
                )}   
            </Accordion>
        </div>
    </CustomDiv>
}

export default FAQs
