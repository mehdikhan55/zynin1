
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold">Zynin AI Solutions</h1>
        <p className="text-lg mt-2">
          AI-powered customized solutions for web and app development.
        </p>
        <ThemeToggle/>
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
              <CardDescription>
                AI-driven web development solutions for modern businesses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We leverage AI to create intelligent, responsive, and user-friendly websites.
              </p>
              <Button variant="secondary" className="mt-4">Learn More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>App Development</CardTitle>
              <CardDescription>
                Customized app development solutions powered by AI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Our AI-powered apps are designed to meet your unique business needs and provide exceptional user experiences.
              </p>
              <Button variant="secondary" className="mt-4">Explore</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Solutions</CardTitle>
              <CardDescription>
                Bespoke AI solutions tailored to specific business problems.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                From automation to analytics, we harness the power of AI to drive innovation and efficiency.
              </p>
              <Button variant="secondary" className="mt-4">Discover</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Sample Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>
                AI Engineer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Expert in machine learning and AI-driven web solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Jane Smith</CardTitle>
              <CardDescription>
                App Development Specialist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Passionate about creating innovative and user-friendly app experiences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>David Lee</CardTitle>
              <CardDescription>
                Solutions Architect
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Dedicated to designing and implementing AI-powered solutions for complex business challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

