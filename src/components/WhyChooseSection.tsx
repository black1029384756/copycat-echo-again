
const WhyChooseSection = () => {
  const whyChooseItems = [
    "World Class instructors",
    "1 on 1 Mentorship",
    "Industrial Training", 
    "Placement Assistant"
  ];

  return (
    <section className="py-12 md:py-16 bg-white w-full overflow-hidden">
      <div className="w-full max-w-none px-0">
        <div className="grid md:grid-cols-2 items-center relative min-h-[300px] md:min-h-[400px]">
          {/* Background with 50% opacity on left side */}
          <div 
            className="absolute left-0 top-0 w-full md:w-1/2 h-full opacity-50"
            style={{ backgroundColor: '#C0E1FF' }}
          ></div>
          
          {/* Left side - Title */}
          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 py-8 md:py-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-center md:text-left">
              Why Choose<br/>
              <span className="text-blue-600">Stem for Society</span> ?
            </h2>
          </div>

          {/* Right side - Features */}
          <div className="relative z-10 space-y-3 md:space-y-4 px-6 md:px-8 py-6 md:py-0">
            {whyChooseItems.map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-4 md:p-6 text-sm md:text-base lg:text-lg font-medium shadow-sm hover:shadow-md transition-shadow">
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
