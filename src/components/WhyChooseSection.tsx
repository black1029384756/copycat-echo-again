
const WhyChooseSection = () => {
  const whyChooseItems = [
    "World Class instructors",
    "1 on 1 Mentorship",
    "Industrial Training", 
    "Placement Assistant"
  ];

  return (
    <section className="py-16 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-6 max-w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center relative min-h-[400px]">
          {/* Background with 50% opacity on left side */}
          <div 
            className="absolute left-0 top-0 w-full md:w-1/2 h-full opacity-50 rounded-r-2xl"
            style={{ backgroundColor: '#C0E1FF' }}
          ></div>
          
          {/* Left side - Title */}
          <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Why Choose<br/>
              <span className="text-blue-600">Stem for Society</span> ?
            </h2>
          </div>

          {/* Right side - Features */}
          <div className="relative z-10 space-y-4 px-4 md:px-8">
            {whyChooseItems.map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-4 md:p-6 text-base md:text-lg font-medium shadow-sm hover:shadow-md transition-shadow">
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
