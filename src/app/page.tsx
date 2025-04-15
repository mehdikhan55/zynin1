
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Rocket, Code, Smartphone, Brain, User } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto py-10 fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold">Zynin AI Solutions</h1>
        <p className="text-md mt-4 text-muted-foreground">
          AI-powered customized solutions for web and app development.
        </p>
        <ThemeToggle/>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center"><Code className="mr-2" /> Web Development</CardTitle>
              <CardDescription className="text-gray-500">
                AI-driven web development solutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We leverage AI to create intelligent, responsive websites.
              </p>
              <Button variant="secondary" className="mt-4">Learn More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center"><Smartphone className="mr-2" /> App Development</CardTitle>
              <CardDescription className="text-gray-500">
                Customized app development solutions powered by AI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our AI-powered apps are designed to meet your unique business needs.
              </p>
              <Button variant="secondary" className="mt-4">Explore</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center"><Brain className="mr-2" /> AI Solutions</CardTitle>
              <CardDescription className="text-gray-500">
                Bespoke AI solutions tailored to specific business problems.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                From automation to analytics, we harness the power of AI to drive innovation.
              </p>
              <Button variant="secondary" className="mt-4">Discover</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-md font-semibold flex items-center"><User className="mr-2" /> John Doe</CardTitle>
              <CardDescription className="text-gray-500">
                AI Engineer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Expert in machine learning and AI-driven web solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-md font-semibold flex items-center"><User className="mr-2" /> Jane Smith</CardTitle>
              <CardDescription className="text-gray-500">
                App Development Specialist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Passionate about creating innovative and user-friendly app experiences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-md font-semibold flex items-center"><User className="mr-2" /> David Lee</CardTitle>
              <CardDescription className="text-gray-500">
                Solutions Architect
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Dedicated to designing and implementing AI-powered solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
       {/* Rocket Infographic */}
       <section className="my-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Elevate Your Business with Zynin AI
        </h2>
        <div className="flex justify-center">
          <Rocket className="text-primary h-20 w-20 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold">
              AI-Driven Innovation
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Revolutionize your processes with cutting-edge AI technology.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">
              Custom Solutions
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Tailored AI solutions to meet your specific business needs.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">
              Expert Team Support
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Dedicated support from our team of AI specialists.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
