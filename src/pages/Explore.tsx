
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Explore = () => {
  const exploreOptions = [
    {
      category: "Students (UG/PG/PhD), Job Seekers",
      title: "Career Counseling",
      description: "Get expert guidance to plan your academic and professional journey with confidence."
    },
    {
      category: "Students, Researchers, Young Professionals", 
      title: "Psychology Counselling",
      description: "Access personalized mental wellness support to thrive in both studies and life."
    },
    {
      category: "Institution Faculty, Educators, Trainers",
      title: "Institution Faculty Development", 
      description: "Empowering educators through curated training, upskilling, and teaching innovation."
    },
    {
      category: "College Students, Campus Leaders",
      title: "Ambassador Program",
      description: "Become the face of STEM in your institution and develop real-world leadership skills."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div 
        className="min-h-screen flex relative"
        style={{
          backgroundImage: `url("/lovable-uploads/89cbe888-d974-42ee-a6ee-9ce3e9b60fb4.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 70%',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        
        {/* Left Section - Logo centered */}
        <div className="w-1/2 flex items-center justify-center relative z-10">
          <img 
            src="/lovable-uploads/a42a1abc-16cd-4410-8cf7-324a6c97ac20.png" 
            alt="STEM for Society Logo" 
            className="h-64 w-64 object-contain opacity-50"
          />
        </div>

        {/* Right Section - Explore Options */}
        <div className="w-1/2 flex items-center justify-center pr-8 relative z-10">
          <div className="w-full max-w-lg space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Explore Our Programs</h1>
              <p className="text-gray-600">Discover the perfect program for your journey</p>
            </div>
            
            <div className="space-y-4">
              {exploreOptions.map((option, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm hover:bg-white/95 transition-all duration-200 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-2">{option.category}</p>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                        <p className="text-sm text-gray-700">{option.description}</p>
                      </div>
                      <div className="ml-4 text-blue-500 group-hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Explore;
