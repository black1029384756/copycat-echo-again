
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CorporateTraining = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Corporate Training</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Customized training solutions for organizations looking to upskill their workforce 
              in cutting-edge STEM technologies and methodologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Training Solutions</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-medium text-lg">On-site Training</h3>
                  <p className="text-gray-600">Customized programs delivered at your workplace</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="font-medium text-lg">Virtual Training</h3>
                  <p className="text-gray-600">Interactive online sessions for remote teams</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="font-medium text-lg">Hybrid Programs</h3>
                  <p className="text-gray-600">Combination of online and in-person training</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Customized curriculum based on industry needs
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Expert trainers with industry experience
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Hands-on practical workshops
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Progress tracking and assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Post-training support and resources
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4">
              Request Custom Quote
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Download Corporate Brochure
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CorporateTraining;
