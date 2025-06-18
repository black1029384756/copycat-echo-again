
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share } from "lucide-react";

const ScientificCommunication = () => {
  const blogPosts = [
    {
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Nancy Wilson",
      date: "August 28, 2023",
      category: "Medical",
      image: "/lovable-uploads/c96202c2-70b0-4f3e-8b73-9a36a845c7e3.png"
    },
    {
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Nancy Wilson", 
      date: "August 28, 2023",
      category: "Medical",
      image: "/lovable-uploads/c96202c2-70b0-4f3e-8b73-9a36a845c7e3.png"
    },
    {
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Nancy Wilson",
      date: "August 28, 2023", 
      category: "Medical",
      image: "/lovable-uploads/c96202c2-70b0-4f3e-8b73-9a36a845c7e3.png"
    },
    {
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Nancy Wilson",
      date: "August 28, 2023",
      category: "Medical", 
      image: "/lovable-uploads/c96202c2-70b0-4f3e-8b73-9a36a845c7e3.png"
    },
    {
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Nancy Wilson",
      date: "August 28, 2023",
      category: "Medical",
      image: "/lovable-uploads/c96202c2-70b0-4f3e-8b73-9a36a845c7e3.png"
    },
    {
      title: "The Impact of Technology on the Workplace: How Technology is Changing", 
      author: "Nancy Wilson",
      date: "August 28, 2023",
      category: "Medical",
      image: "/lovable-uploads/c96202c2-70b0-4f3e-8b73-9a36a845c7e3.png"
    },
    {
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Nancy Wilson",
      date: "August 28, 2023",
      category: "Medical",
      image: "/lovable-uploads/c96202c2-70b0-4f3e-8b73-9a36a845c7e3.png"
    },
    {
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Nancy Wilson", 
      date: "August 28, 2023",
      category: "Medical",
      image: "/lovable-uploads/c96202c2-70b0-4f3e-8b73-9a36a845c7e3.png"
    },
    {
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Nancy Wilson",
      date: "August 28, 2023",
      category: "Medical", 
      image: "/lovable-uploads/c96202c2-70b0-4f3e-8b73-9a36a845c7e3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Navigation buttons */}
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Share className="h-4 w-4" />
          Share
        </Button>
      </div>

      <main className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">Explore Blogs</p>
            <h1 className="text-4xl font-bold mb-6">
              Scientific <span className="text-yellow-500">Communication</span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8 max-w-4xl">
            <p className="text-gray-700 leading-relaxed mb-4">
              Join us in making your research matter to everyone—be it empower society with 
              knowledge and encourage curiosity about the world around us! Every expert is 
              responsible for communicating their knowledge effectively.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Research dissemination and science communication will be rewarded 
              with prizes and certificates of appreciation. Recognizing your efforts to make 
              science accessible and engaging is our priority.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Stem for Society invites Scientific, Precise, PhD, masters, bachelor students and 
              researchers to share their research journey by writing blogs about their publication 
              and other information aimed at the general public and society by sharing 
              insights and engaging with readers, you can foster community connections and 
              support professional development within the research field.
            </p>
          </div>

          {/* Create Article Button */}
          <div className="text-right mb-8">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg">
              CREATE ARTICLE
            </Button>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded mb-2">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                    <span className="mr-3">{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <span className="text-gray-500">...</span>
              <Button variant="outline" size="sm">→</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ScientificCommunication;
