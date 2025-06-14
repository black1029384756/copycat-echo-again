
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [openItem, setOpenItem] = useState<string>("");
  
  const faqs = [
    { 
      question: "What programs do you offer?", 
      answer: "Our programs cover a wide range of STEM fields including biotechnology, engineering, medicine, and more." 
    },
    { 
      question: "How can I apply for the programs?", 
      answer: "You can apply through our online portal. Applications are reviewed by our expert panel." 
    },
    { 
      question: "When do the programs start?", 
      answer: "Programs start quarterly. Check our calendar for specific dates." 
    },
    { 
      question: "Where are the programs conducted?", 
      answer: "We offer both online and on-campus programs depending on the course." 
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-full">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsToggled(!isToggled)}
              style={{ 
                backgroundColor: isToggled ? '#C0E1FF' : 'white',
                borderColor: isToggled ? '#C0E1FF' : '#e5e7eb'
              }}
            >
              General Information <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>
          <Accordion 
            type="single" 
            collapsible 
            className="w-full space-y-4"
            value={openItem}
            onValueChange={setOpenItem}
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`border rounded-lg overflow-hidden transition-colors ${
                  openItem === `item-${index}` ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'
                }`}
              >
                <AccordionTrigger className={`text-left text-base px-6 py-4 hover:no-underline ${
                  openItem === `item-${index}` ? 'text-blue-700' : 'text-gray-900'
                }`}>
                  Q{index + 1}. {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
