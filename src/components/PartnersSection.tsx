
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const PartnersSection = () => {
  const partners = [
    { name: "Geneaura", logo: "/images/13b76e8a-3a28-44a2-9a65-076bc07802ea.png" },
    { name: "Bangalore Bioinnovation Centre", logo: "/images/b2a19225-779c-406c-88ac-8d03db9df977.png" },
    { name: "Shewell", logo: "/images/e5c70965-bf2b-44ba-8248-a2875d564db4.png" },
    { name: "IMrobonix", logo: "/images/6b1a7a01-f1f8-4ae7-be27-8dce9e59396c.png" },
    { name: "Sri Ramachandra Innovation Incubation Centre", logo: "/images/e6f46177-2abd-4bd1-a709-4cd86bd45f15.png" },
    { name: "B-Actrol Biosciences", logo: "/images/c5b5990b-9879-4f95-a323-45fb4cede345.png" },
    { name: "Xera Robotics", logo: "/images/934c37c4-e9eb-49f9-ae73-bc13705acd49.png" }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 text-center max-w-7xl">
        <h2 className="text-xl md:text-2xl font-bold mb-8 text-gray-800">Industrial & Academic Partners</h2>
        
        {/* Desktop View - Static Grid */}
        <div className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-12">
          {partners.slice(0, 5).map((partner, index) => (
            <div key={index} className="flex items-center space-x-4">
              {/* Logo Container */}
              <div className="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm p-3">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-12 max-w-24 object-contain"
                />
              </div>
              
              {/* Star Separator */}
              {index < partners.slice(0, 5).length - 1 && (
                <div className="flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0621 1.53451C22.3843 0.663891 23.6157 0.663888 23.9379 1.53451L29.3226 16.0866C29.4239 16.3603 29.6397 16.5761 29.9134 16.6774L44.4655 22.0621C45.3361 22.3843 45.3361 23.6157 44.4655 23.9379L29.9134 29.3226C29.6397 29.4239 29.4239 29.6397 29.3226 29.9134L23.9379 44.4655C23.6157 45.3361 22.3843 45.3361 22.0621 44.4655L16.6774 29.9134C16.5761 29.6397 16.3603 29.4239 16.0866 29.3226L1.53451 23.9379C0.663891 23.6157 0.663888 22.3843 1.53451 22.0621L16.0866 16.6774C16.3603 16.5761 16.5761 16.3603 16.6774 16.0866L22.0621 1.53451Z" fill="#00549F"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile and Tablet View - Carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3">
                  <div className="flex flex-col items-center space-y-3">
                    {/* Logo Container */}
                    <div className="flex items-center justify-center h-20 w-full bg-white rounded-lg shadow-sm p-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-h-16 max-w-full object-contain"
                      />
                    </div>
                    
                    {/* Star Below Logo */}
                    <div className="flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0621 1.53451C22.3843 0.663891 23.6157 0.663888 23.9379 1.53451L29.3226 16.0866C29.4239 16.3603 29.6397 16.5761 29.9134 16.6774L44.4655 22.0621C45.3361 22.3843 45.3361 23.6157 44.4655 23.9379L29.9134 29.3226C29.6397 29.4239 29.4239 29.6397 29.3226 29.9134L23.9379 44.4655C23.6157 45.3361 22.3843 45.3361 22.0621 44.4655L16.6774 29.9134C16.5761 29.6397 16.3603 29.4239 16.0866 29.3226L1.53451 23.9379C0.663891 23.6157 0.663888 22.3843 1.53451 22.0621L16.0866 16.6774C16.3603 16.5761 16.5761 16.3603 16.6774 16.0866L22.0621 1.53451Z" fill="#00549F"/>
                      </svg>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
