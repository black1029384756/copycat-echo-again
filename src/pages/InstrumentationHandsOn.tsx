
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const InstrumentationHandsOn = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Instrumentation Hands-on Training</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Gain practical experience with state-of-the-art scientific instruments and analytical equipment 
              used in research and industry settings.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">Available Instruments</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-medium text-gray-900">Spectroscopy</h3>
                  <p className="text-sm text-gray-600">UV-Vis, FTIR, NMR</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-medium text-gray-900">Chromatography</h3>
                  <p className="text-sm text-gray-600">HPLC, GC-MS</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-medium text-gray-900">Microscopy</h3>
                  <p className="text-sm text-gray-600">SEM, TEM, AFM</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-medium text-gray-900">Analytical</h3>
                  <p className="text-sm text-gray-600">XRD, DSC, TGA</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Training Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                  <div>
                    <h3 className="font-medium text-lg">Theory Foundation</h3>
                    <p className="text-gray-600">Understanding instrument principles and applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                  <div>
                    <h3 className="font-medium text-lg">Hands-on Practice</h3>
                    <p className="text-gray-600">Direct operation under expert supervision</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                  <div>
                    <h3 className="font-medium text-lg">Data Analysis</h3>
                    <p className="text-gray-600">Interpretation and reporting of results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Our Instrumentation Training?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl mb-2">🔬</div>
                <h3 className="font-medium">Advanced Equipment</h3>
                <p className="text-gray-600 text-sm">Latest scientific instruments and technology</p>
              </div>
              <div>
                <div className="text-3xl mb-2">👨‍🔬</div>
                <h3 className="font-medium">Expert Instructors</h3>
                <p className="text-gray-600 text-sm">Experienced professionals and researchers</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📋</div>
                <h3 className="font-medium">Certification</h3>
                <p className="text-gray-600 text-sm">Industry-recognized competency certificates</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InstrumentationHandsOn;
