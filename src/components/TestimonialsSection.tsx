
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Tanay Wilson",
      title: "Cellular Biology and Genetics Engineering with Biotechnological Applications",
      rating: 5,
      text: "I am grateful for the Experience Innovation challenges we conduct. Programs are world through and provide practical insights into healthcare technology and devices through lab activities focused on real problem-solving and development."
    },
    {
      name: "John Smith", 
      title: "Effective Winning Strategy & Performance-Driven Engineering",
      rating: 5,
      text: "Very informative as it brings me close to point strategies to develop my skills in Engineering. The program exceeded my expectations."
    },
    {
      name: "Sarah Johnson",
      title: "Biomedical Engineering and Healthcare Innovation",
      rating: 5,
      text: "The hands-on approach and mentorship provided transformed my understanding of biomedical applications. Highly recommend this program."
    },
    {
      name: "Michael Chen",
      title: "Data Science and Machine Learning Applications",
      rating: 5,
      text: "Outstanding curriculum that bridges theory and practice. The industry connections and placement support were exceptional."
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#FFFFF' }}>
      <div className="container mx-auto px-4 max-w-full">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        
        {/* Scrolling container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-6">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-80 p-4" style={{ backgroundColor: '#C0E1FF' }}>
                <CardContent className="p-0">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current text-current" style={{ color: '#00549F' }} />
                    ))}
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{testimonial.title}</h4>
                  <p className="text-xs text-gray-600 mb-3">{testimonial.text}</p>
                  <p className="font-medium text-sm">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {testimonials.map((testimonial, index) => (
              <Card key={`duplicate-${index}`} className="flex-shrink-0 w-80 p-4" style={{ backgroundColor: '#C0E1FF' }}>
                <CardContent className="p-0">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current text-current" style={{ color: '#00549F' }} />
                    ))}
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{testimonial.title}</h4>
                  <p className="text-xs text-gray-600 mb-3">{testimonial.text}</p>
                  <p className="font-medium text-sm">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
