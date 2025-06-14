
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Users, TestTube, Calendar, Monitor } from "lucide-react";

const ProgramStructure = () => {
  const programStructure = [
    {
      title: "General",
      subtitle: "Seminar / Webinar / Mentorship",
      duration: "Frequently",
      features: ["Both Online + Offline"],
      icon: <BookOpen className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Basic", 
      subtitle: "Certificate Program",
      duration: "1 to 3 days",
      features: ["Online 100% training"],
      icon: <Award className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Standard",
      subtitle: "Corporate Training Program",
      duration: "3 to 10 days",
      features: ["Online + Offline 100% LIVE training"],
      icon: <Users className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Advanced",
      subtitle: "Instrumentation Hands-on",
      duration: "3 to 10 days",
      features: ["Offline 100% LIVE training"],
      icon: <TestTube className="h-5 w-5 text-blue-600" />
    }
  ];

  // Arrow with circular tail component
  const ArrowWithTail = () => (
    <div className="absolute top-3 right-3 flex items-center">
     <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect y="30" width="30" height="30" rx="15" transform="rotate(-90 0 30)" fill="#F2F2F2"/>
  <path d="M8.3418 10.0098L8.3706 21.0874L19.4482 21.1161C19.5636 21.1318 19.6811 21.1224 19.7926 21.0888C19.904 21.0551 20.007 20.9977 20.0944 20.9209C20.1818 20.844 20.2517 20.7491 20.2993 20.6427C20.3469 20.5364 20.3711 20.4212 20.3703 20.3047C20.3695 20.1882 20.3436 20.0733 20.2945 19.9677C20.2454 19.8621 20.1741 19.7683 20.0856 19.6926C19.9971 19.617 19.8934 19.5611 19.7814 19.529C19.6695 19.4969 19.5519 19.4892 19.4368 19.5065L11.1357 19.4721L22.1328 8.4749C22.2853 8.3224 22.371 8.1156 22.371 7.9001C22.371 7.6844 22.2853 7.4777 22.1328 7.3252C21.9804 7.1727 21.7736 7.0871 21.558 7.0871C21.3424 7.0871 21.1356 7.1727 20.9831 7.3252L9.986 18.3223L9.9515 10.0213C9.9507 9.8056 9.8643 9.5989 9.7112 9.447C9.5581 9.295 9.3509 9.2099 9.1352 9.2107C8.9195 9.2115 8.7128 9.2979 8.5608 9.451C8.4088 9.6041 8.3237 9.8113 8.3245 10.027L8.3418 10.0098Z" fill="#0389FF"/>
</svg>

    </div>
  );

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl font-bold text-center mb-6">Program Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {programStructure.map((program, index) => (
            <Card key={index} className="p-4 bg-white border border-gray-200 rounded-lg relative">
              <ArrowWithTail />
              <CardContent className="p-0">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    {program.icon}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`rounded-full px-3 py-1 text-xs ${
                      index === 0 ? 'bg-gray-100 text-gray-700' :
                      index === 1 ? 'bg-blue-100 text-blue-700' :
                      index === 2 ? 'bg-gray-100 text-gray-700' :
                      'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {program.title}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-sm mb-2">{program.subtitle}</h3>
                
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-600">
                  <Calendar className="h-3 w-3" />
                  <span>{program.duration}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-600">
                  <Monitor className="h-3 w-3" />
                  <span>{program.features[0]}</span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs py-2 h-8"
                >
                  More info
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramStructure;
