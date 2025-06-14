
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
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-4 text-center max-w-7xl">
        <h2 className="text-xl font-bold mb-6">Industrial & Academic Partners</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="flex items-center justify-center h-24 bg-white rounded-lg shadow-sm p-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersSection;
