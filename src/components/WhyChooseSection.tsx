
const WhyChooseSection = () => {
  const whyChooseItems = [
    "World Class instructors",
    "1 on 1 Mentorship",
    "Industrial Training", 
    "Placement Assistant"
  ];

  return (
    <section className="py-8 bg-white w-full">
      <div className="container mx-auto px-6 max-w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center relative">
          {/* Background with 50% opacity on left side */}
          <div 
            className="absolute left-0 top-0 w-1/2 h-full opacity-50 rounded-r-2xl hidden md:block"
            style={{ backgroundColor: '#C0E1FF' }}
          ></div>
          
          <div className="relative z-10">
            <p className="text-gray-600 mb-3 bg-gray-100 inline-block px-3 py-2 rounded-full text-sm">World-Class Instructors</p>
            <h2 className="text-2xl font-bold mb-4">
              Why Choose <br/><span className="text-blue-600">Stem for Society</span> ?
            </h2>
          </div>
          <div className="space-y-3 relative z-10">
            {whyChooseItems.map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-3 text-base font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
