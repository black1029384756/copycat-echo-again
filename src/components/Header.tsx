
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b px-4 py-3 bg-white">
      <div className="container mx-auto flex items-center justify-between max-w-7xl">
        <Link to="/" className="flex items-center space-x-3">
          <div className="h-10 w-10 flex items-center justify-center">
            <img 
              src="/lovable-uploads/59d4420d-7b78-4de5-bb75-88bf67aad1b0.png" 
              alt="STEM for Society Logo" 
              className="h-10 w-10 object-contain"
            />
          </div>
          <div className="text-lg font-bold text-gray-900">STEM FOR SOCIETY</div>
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-6">
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 flex items-center text-sm font-medium">
              Courses/Trainings <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 flex items-center text-sm font-medium">
              Services <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 flex items-center text-sm font-medium">
              Resources <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Link to="/partner-role">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg px-4 text-sm">
              Partner with us
            </Button>
          </Link>
          <Link to="/login">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-6 text-sm">
              LOGIN
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
