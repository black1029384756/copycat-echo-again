
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="text-center bg-white rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl">
        {/* Robot Icon with 404 */}
        <div className="mb-6 relative">
          <img 
            src="/lovable-uploads/6e5eca44-9e23-4699-9f19-9be837d70c39.png" 
            alt="404 Robot Error" 
            className="w-64 h-64 mx-auto object-contain"
          />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Oops!</h1>
        <p className="text-gray-600 mb-6">Looks like you've got lost....</p>
        
        <Button 
          onClick={() => window.location.href = '/'}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          RELOAD
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
