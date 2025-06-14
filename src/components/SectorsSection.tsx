
const SectorsSection = () => {
  // Updated star component with the specified design
  const FourCornerStar = () => (
    <div><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0621 1.53451C22.3843 0.663891 23.6157 0.663888 23.9379 1.53451L29.3226 16.0866C29.4239 16.3603 29.6397 16.5761 29.9134 16.6774L44.4655 22.0621C45.3361 22.3843 45.3361 23.6157 44.4655 23.9379L29.9134 29.3226C29.6397 29.4239 29.4239 29.6397 29.3226 29.9134L23.9379 44.4655C23.6157 45.3361 22.3843 45.3361 22.0621 44.4655L16.6774 29.9134C16.5761 29.6397 16.3603 29.4239 16.0866 29.3226L1.53451 23.9379C0.663891 23.6157 0.663888 22.3843 1.53451 22.0621L16.0866 16.6774C16.3603 16.5761 16.5761 16.3603 16.6774 16.0866L22.0621 1.53451Z" fill="#00549F"/>
</svg>

    </div>
  );

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-500 text-center md:text-left">Sectors we Focus</h2>
        <div className="max-w-6xl mx-auto">
          {/* Row 1 - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-base">Climate Change</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-base">Technology</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-base">Life science</span>
            </div>
          </div>
          
          {/* Row 2 - 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-base">Innovation</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-base">Finance</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-base">Pharmacy</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-base">Agriculture</span>
            </div>
          </div>
          
          {/* Row 3 - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-base">Entrepreneurship</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-base">Veterinary</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-base">Medicine</span>
            </div>
          </div>
          
          {/* Row 4 - 2 items centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-base">Allied health science</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <FourCornerStar />
              <span className="text-gray-800 font-medium text-base">Environmental Science</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
