
import { useState } from "react";
import { ChevronDown, ChevronUp, Users, Award, Building, HeadphonesIcon } from "lucide-react";

const WhyChooseSection = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const whyChooseItems = [
    {
      title: "World Class Instructors",
      content: "Learn from top industry professionals with real-world experience",
      icon: <Users className="h-5 w-5 text-blue-600" />
    },
    {
      title: "1 on 1 Mentorship", 
      content: "Get personalized guidance and support throughout your learning journey",
      icon: <HeadphonesIcon className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Industrial Training",
      content: "Hands-on experience with real industry projects and scenarios", 
      icon: <Building className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Placement Assistant",
      content: "Comprehensive support for career placement and job opportunities",
      icon: <Award className="h-5 w-5 text-blue-600" />
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section className="py-6 md:py-8 bg-white w-full overflow-hidden">
      <div className="w-full max-w-none px-0">
        <div className="grid md:grid-cols-2 items-center relative min-h-[200px] md:min-h-[220px]">
          {/* Background image on the left side centered */}
          <div className="relative flex items-center justify-center h-full">
            <div 
              className="w-64 h-64 md:w-72 md:h-72 opacity-20 bg-center bg-no-repeat bg-contain"
              style={{ 
                backgroundImage: `url("/lovable-uploads/59d4420d-7b78-4de5-bb75-88bf67aad1b0.png")`
              }}
            ></div>
            
            {/* Title overlaid on the background - left aligned */}
            <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8">
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight text-left">
                Why Choose<br/>
                <span className="text-blue-600">Stem for Society</span> ?
              </h2>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="relative z-10 space-y-2 md:space-y-3 px-4 md:px-6 py-4 md:py-0">
            {whyChooseItems.map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 relative">
                {/* Toggle icon in top right corner */}
                <button
                  className="absolute top-3 right-3 z-20 p-1 rounded-full hover:bg-gray-200 transition-colors"
                  onClick={() => toggleExpanded(index)}
                >
                  {expandedItem === index ? (
                    <ChevronUp className="h-4 w-4 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-600" />
                  )}
                </button>

                <div 
                  className="p-3 md:p-4 cursor-pointer flex items-center pr-12"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-sm md:text-base font-medium">{item.title}</span>
                  </div>
                </div>
                
                {expandedItem === index && (
                  <div className="px-4 pb-4 animate-fade-in">
                    <div className="bg-blue-50 rounded-lg p-3 ml-11">
                      <p className="text-sm text-gray-700">{item.content}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
