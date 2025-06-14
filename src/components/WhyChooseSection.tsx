
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
          {/* Background image with 80% opacity on left side only */}
          <div 
            className="absolute left-0 top-0 w-full md:w-1/2 h-full opacity-80 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(/lovable-uploads/28baf67a-5d5f-4282-9bd1-e2ff93c77a38.png)',
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
