
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [isToggled, setIsToggled] = useState(false);
  
  const faqs = [
    { question: "What", answer: "Our programs cover a wide range of STEM fields including biotechnology, engineering, medicine, and more." },
    { question: "How", answer: "You can apply through our online portal. Applications are reviewed by our expert panel." },
    { question: "When", answer: "Programs start quarterly. Check our calendar for specific dates." },
    { question: "Where", answer: "We offer both online and on-campus programs depending on the course." }
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 max-w-full">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
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
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm">
                  Q{index + 1}. {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm">
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
