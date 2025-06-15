
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      acceptTerms: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempt:", formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Background Image with Logo */}
      <div 
        className="hidden lg:flex lg:w-1/2 relative"
        style={{
          backgroundImage: `url("/lovable-uploads/b12a3dab-9f55-4a27-b55c-f863f90283da.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 flex flex-col justify-center items-center w-full text-white p-8">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/a42a1abc-16cd-4410-8cf7-324a6c97ac20.png" 
              alt="STEM for Society Logo" 
              className="h-32 w-32 mx-auto mb-4 opacity-50"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">STEM FOR SOCIETY</h1>
            <p className="text-xl">Join us to Innovate, Incubate and Impact the world together!</p>
          </div>
        </div>
      </div>

      {/* Right Section - Signup Form with White Transparent Background and Curved Left Corner */}
      <div className="w-full lg:w-1/2 relative">
        {/* White transparent overlay with curved left corner */}
        <div className="absolute inset-0 bg-white/90 lg:rounded-l-3xl"></div>
        
        {/* Form Container */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Create an Account
              </h1>
              <p className="text-gray-600 text-lg">
                Enter your details to proceed further
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium text-base">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 font-medium text-base">
                  Phone number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium text-base">
                  Enter Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-12 bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium text-base">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="h-12 bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={handleCheckboxChange}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <Label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                  I accept the terms and conditions
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all duration-200 transform hover:scale-[1.02] mt-8"
              >
                SIGN UP
              </Button>
            </form>
            
            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">or sign up with</span>
              </div>
            </div>
            
            {/* Social Sign Up Buttons - 3 Circular Buttons */}
            <div className="flex justify-center space-x-4">
              {/* Google */}
              <Button 
                variant="outline" 
                className="h-12 w-12 rounded-full bg-white border-gray-200 hover:bg-gray-50 p-0"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </Button>
              
              {/* Email */}
              <Button 
                variant="outline" 
                className="h-12 w-12 rounded-full bg-white border-gray-200 hover:bg-gray-50 p-0"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Button>
              
              {/* User Profile */}
              <Button 
                variant="outline" 
                className="h-12 w-12 rounded-full bg-white border-gray-200 hover:bg-gray-50 p-0"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Button>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:text-blue-700 hover:underline font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
