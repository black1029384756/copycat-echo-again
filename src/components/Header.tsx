
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-gray-700 hover:text-blue-600 flex items-center text-sm font-medium">
                Courses/Trainings <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border shadow-lg">
              <DropdownMenuItem asChild>
                <Link to="/seminars-webinars" className="w-full">Seminar/Webinar</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/certificate-program" className="w-full">Certificate Program</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/corporate-training" className="w-full">Corporate Training</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/instrumentation-hands-on" className="w-full">Instrumentation Hands-on</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-gray-700 hover:text-blue-600 flex items-center text-sm font-medium">
                Services <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border shadow-lg">
              <DropdownMenuItem asChild>
                <Link to="/psychology-counselling" className="w-full">Psychology Counselling</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/career-counselling" className="w-full">Career Counselling</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/institutional-plan-pricing" className="w-full">Institutional Plan & Pricing</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-gray-700 hover:text-blue-600 flex items-center text-sm font-medium">
                Resources <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border shadow-lg">
              <DropdownMenuItem asChild>
                <Link to="/scientific-communication" className="w-full">Scientific Communication</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/join-community" className="w-full">Join the Community</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/campus-ambassador" className="w-full">Campus Ambassador</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
