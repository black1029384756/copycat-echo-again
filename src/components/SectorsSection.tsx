
const SectorsSection = () => {
  // Updated star component with the specified design
  const FourCornerStar = () => (
    <div className="w-10 h-10 bg-blue-900 rounded-sm flex items-center justify-center" style={{ backgroundColor: '#00549F' }}>
    </div>
  );

  return (
    <section className="py-4 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-500 text-center md:text-left">Sectors we Focus</h2>
        <div className="max-w-6xl mx-auto">
          {/* Row 1 - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <div className="bg-blue-200 rounded-2xl p-3 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-sm">Climate Change</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-3 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-sm">Technology</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-3 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-sm">Life science</span>
            </div>
          </div>
          
          {/* Row 2 - 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-2">
            <div className="bg-blue-200 rounded-2xl p-3 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-sm">Innovation</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-3 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-sm">Finance</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-3 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-sm">Pharmacy</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-3 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-sm">Agriculture</span>
            </div>
          </div>
          
          {/* Row 3 - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <div className="bg-blue-200 rounded-2xl p-3 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-sm">Entrepreneurship</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-3 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-sm">Veterinary</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-3 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-sm">Medicine</span>
            </div>
          </div>
          
          {/* Row 4 - 2 items centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto">
            <div className="bg-blue-200 rounded-2xl p-3 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-sm">Allied health science</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-3 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-sm">Environmental Science</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
