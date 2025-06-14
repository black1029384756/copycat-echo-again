
const WhyChooseSection = () => {
  const whyChooseItems = [
    "World Class instructors",
    "1 on 1 Mentorship",
    "Industrial Training", 
    "Placement Assistant"
  ];

  return (
    <section className="py-6 md:py-8 bg-white w-full overflow-hidden">
      <div className="w-full max-w-none px-0">
        <div className="grid md:grid-cols-2 items-center relative min-h-[200px] md:min-h-[220px]">
          {/* Background image on the left side centered with 20% opacity */}
          <div className="relative flex items-center justify-center h-full">
            <div 
              className="w-48 h-48 md:w-56 md:h-56 opacity-20 bg-center bg-no-repeat bg-contain"
              style={{ 
                backgroundImage: `url("/lovable-uploads/23bfbd17-dd0b-414b-9969-333e7b0e4606.png")`
              }}
            ></div>
            
            {/* Title overlaid on the background */}
            <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8">
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight text-center md:text-left">
                Why Choose<br/>
                <span className="text-blue-600">Stem for Society</span> ?
              </h2>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="relative z-10 space-y-2 md:space-y-3 px-4 md:px-6 py-4 md:py-0">
            {whyChooseItems.map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-3 md:p-4 text-sm md:text-base font-medium shadow-sm hover:shadow-md transition-shadow">
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
