
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CertificateProgram = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Certificate Programs</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Earn industry-recognized certificates through our comprehensive programs designed to enhance 
              your professional skills and career prospects.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Biotechnology Certificate</h3>
              <p className="text-gray-600 mb-4">6-month comprehensive program covering modern biotechnology techniques and applications.</p>
              <div className="text-blue-600 font-medium">Duration: 6 months</div>
            </div>
            
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Data Science Certificate</h3>
              <p className="text-gray-600 mb-4">Master data analysis, machine learning, and statistical modeling techniques.</p>
              <div className="text-blue-600 font-medium">Duration: 4 months</div>
            </div>
            
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Research Methodology</h3>
              <p className="text-gray-600 mb-4">Learn advanced research techniques and scientific writing skills.</p>
              <div className="text-blue-600 font-medium">Duration: 3 months</div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Program Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <ul className="space-y-2">
                <li>• Industry-recognized certification</li>
                <li>• Hands-on practical experience</li>
                <li>• Expert mentorship</li>
              </ul>
              <ul className="space-y-2">
                <li>• Career placement assistance</li>
                <li>• Networking opportunities</li>
                <li>• Flexible learning schedules</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CertificateProgram;
