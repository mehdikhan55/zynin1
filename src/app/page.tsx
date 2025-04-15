
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Rocket, Code, Smartphone, Brain, User } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto py-10 fade-in">
       {/* Animated Banner */}
       <div className="banner-container">
        <div className="banner-content">
          <span className="banner-item">Innovative AI Solutions</span>
          <span className="banner-item">Web & App Development</span>
          <span className="banner-item">Expert Team</span>
          <span className="banner-item">Cutting-Edge Technology</span>
        </div>
      </div>

      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold futuristic-text glowing-text">Zynin AI Solutions</h1>
        <p className="text-xl mt-4 text-gray-300">
          AI-powered customized solutions for web and app development.
        </p>
        <ThemeToggle/>
      </header>

      <section className="mb-10">
        <h2 className="text-4xl font-semibold mb-6 futuristic-text">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center"><Code className="mr-2" /> Web Development</CardTitle>
              <CardDescription className="text-gray-400">
                AI-driven web development solutions for modern businesses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                We leverage AI to create intelligent, responsive, and user-friendly websites.
              </p>
              <Button variant="secondary" className="mt-4">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center"><Smartphone className="mr-2" /> App Development</CardTitle>
              <CardDescription className="text-gray-400">
                Customized app development solutions powered by AI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Our AI-powered apps are designed to meet your unique business needs and provide exceptional user experiences.
              </p>
              <Button variant="secondary" className="mt-4">Explore</Button>
            </CardContent>
          </Card>

          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center"><Brain className="mr-2" /> AI Solutions</CardTitle>
              <CardDescription className="text-gray-400">
                Bespoke AI solutions tailored to specific business problems.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                From automation to analytics, we harness the power of AI to drive innovation and efficiency.
              </p>
              <Button variant="secondary" className="mt-4">Discover</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-semibold mb-6 futuristic-text">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center"><User className="mr-2" /> John Doe</CardTitle>
              <CardDescription className="text-gray-400">
                AI Engineer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Expert in machine learning and AI-driven web solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center"><User className="mr-2" /> Jane Smith</CardTitle>
              <CardDescription className="text-gray-400">
                App Development Specialist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Passionate about creating innovative and user-friendly app experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center"><User className="mr-2" /> David Lee</CardTitle>
              <CardDescription className="text-gray-400">
                Solutions Architect
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Dedicated to designing and implementing AI-powered solutions for complex business challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
       {/* Rocket Infographic */}
       <section className="my-16">
        <h2 className="text-4xl font-semibold mb-6 futuristic-text text-center">
          Elevate Your Business with Zynin AI
        </h2>
        <div className="flex justify-center">
          <Rocket className="text-aqua h-32 w-32 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold futuristic-text">
              AI-Driven Innovation
            </h3>
            <p className="text-gray-300 mt-2">
              Revolutionize your processes with cutting-edge AI technology.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold futuristic-text">
              Custom Solutions
            </h3>
            <p className="text-gray-300 mt-2">
              Tailored AI solutions to meet your specific business needs.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold futuristic-text">
              Expert Team Support
            </h3>
            <p className="text-gray-300 mt-2">
              Dedicated support from our team of AI specialists.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
