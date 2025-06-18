
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SeminarsWebinars = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Seminars & Webinars</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our interactive seminars and webinars featuring industry experts, researchers, and thought leaders 
              sharing the latest insights in STEM fields.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Upcoming Seminars</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Advanced Biotechnology Research Methods</li>
                <li>• AI in Healthcare: Current Trends</li>
                <li>• Sustainable Engineering Solutions</li>
                <li>• Data Science for Beginners</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-900 mb-4">Live Webinars</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Monthly Expert Sessions</li>
                <li>• Interactive Q&A Sessions</li>
                <li>• Industry Case Studies</li>
                <li>• Career Guidance Workshops</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Register for Upcoming Events
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SeminarsWebinars;
