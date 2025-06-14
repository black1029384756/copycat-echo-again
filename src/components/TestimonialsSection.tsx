
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
    },
    {
      name: "Emily Rodriguez",
      title: "Renewable Energy Systems and Sustainability",
      rating: 5,
      text: "The program opened my eyes to sustainable technology solutions. The mentorship and hands-on projects were incredibly valuable for my career growth."
    },
    {
      name: "David Kumar",
      title: "Artificial Intelligence and Robotics Innovation",
      rating: 5,
      text: "Amazing experience with cutting-edge AI and robotics projects. The industrial training component provided real-world exposure that was invaluable."
    }
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Testimonials</h2>
        
        {/* Scrolling container */}
        <div className="relative">
          <div className="flex animate-scroll space-x-4">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-72 md:w-80 p-3 md:p-4" style={{ backgroundColor: '#C0E1FF' }}>
                <CardContent className="p-0">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current text-current" style={{ color: '#00549F' }} />
                    ))}
                  </div>
                  <h4 className="font-semibold mb-2 text-xs md:text-sm line-clamp-2">{testimonial.title}</h4>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-3">{testimonial.text}</p>
                  <p className="font-medium text-xs md:text-sm">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {testimonials.map((testimonial, index) => (
              <Card key={`duplicate-${index}`} className="flex-shrink-0 w-72 md:w-80 p-3 md:p-4" style={{ backgroundColor: '#C0E1FF' }}>
                <CardContent className="p-0">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current text-current" style={{ color: '#00549F' }} />
                    ))}
                  </div>
                  <h4 className="font-semibold mb-2 text-xs md:text-sm line-clamp-2">{testimonial.title}</h4>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-3">{testimonial.text}</p>
                  <p className="font-medium text-xs md:text-sm">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `
      }} />
    </section>
  );
};

export default TestimonialsSection;
