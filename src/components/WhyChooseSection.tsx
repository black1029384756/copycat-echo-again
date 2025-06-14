
const WhyChooseSection = () => {
  const whyChooseItems = [
    "World Class instructors",
    "1 on 1 Mentorship",
    "Industrial Training", 
    "Placement Assistant"
  ];

  return (
    <section className="py-8 md:py-12 bg-white w-full overflow-hidden">
      <div className="w-full max-w-none px-0">
        <div className="grid md:grid-cols-2 items-center relative min-h-[400px] md:min-h-[500px]">
          {/* Background image with 70% opacity covering full section */}
          <div 
            className="absolute inset-0 w-full h-full opacity-70 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ 
              backgroundImage: 'url(/lovable-uploads/67328f51-8d07-4749-915c-0ea3dfac6080.png)',
              backgroundColor: '#C0E1FF'
            }}
          ></div>
          
          {/* Left side - Title */}
          <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-8 py-6 md:py-0">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-center md:text-left">
              Why Choose<br/>
              <span className="text-blue-600">Stem for Society</span> ?
            </h2>
          </div>

          {/* Right side - Features */}
          <div className="relative z-10 space-y-3 md:space-y-4 px-4 md:px-6 py-4 md:py-0">
            {whyChooseItems.map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-4 md:p-5 text-sm md:text-base font-medium shadow-sm hover:shadow-md transition-shadow">
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
