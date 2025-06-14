
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  const loginOptions = [
    {
      category: "Students (UG/PG/PhD), Job Seekers",
      title: "Career Counseling",
      description: "Get expert guidance to plan your academic and professional journey with confidence."
    },
    {
      category: "Students, Researchers, Young Professionals", 
      title: "Psychology Counselling",
      description: "Access personalized mental wellness support to thrive in both studies and life."
    },
    {
      category: "Institution Faculty, Educators, Trainers",
      title: "Institution Faculty Development", 
      description: "Empowering educators through curated training, upskilling, and teaching innovation."
    },
    {
      category: "College Students, Campus Leaders",
      title: "Ambassador Program",
      description: "Become the face of STEM in your institution and develop real-world leadership skills."
    }
  ];

  return (
    <div 
      className="min-h-screen flex relative"
      style={{
        backgroundImage: `url("/lovable-uploads/89cbe888-d974-42ee-a6ee-9ce3e9b60fb4.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      
      {/* Left Section - Logo centered */}
      <div className="w-1/2 flex items-center justify-center relative z-10">
        <img 
          src="/lovable-uploads/a42a1abc-16cd-4410-8cf7-324a6c97ac20.png" 
          alt="STEM for Society Logo" 
          className="h-64 w-64 object-contain"
        />
      </div>

      {/* Right Section - Login Options */}
      <div className="w-1/2 flex items-center justify-center pr-8 relative z-10">
        <div className="w-full max-w-lg space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Services</h1>
          </div>
          
          <div className="space-y-4">
            {loginOptions.map((option, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm hover:bg-white/95 transition-all duration-200 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2">{option.category}</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                      <p className="text-sm text-gray-700">{option.description}</p>
                    </div>
                    <div className="ml-4 text-blue-500 group-hover:text-blue-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Traditional Login Form - Hidden by default, can be shown on demand */}
          <Card className="bg-white/90 backdrop-blur-sm mt-8" style={{ display: 'none' }}>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Sign In
                </Button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-blue-600 hover:underline font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
