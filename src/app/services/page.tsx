
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Brain } from 'lucide-react';

export default function ServicesPage() {
    return (
        <div className="container mx-auto py-10 fade-in">
            <header className="mb-12 text-center">
                <h1 className="text-3xl font-bold">Our Services</h1>
                <p className="text-md mt-4 text-muted-foreground">
                    Explore our AI-powered services tailored to your needs.
                </p>
            </header>

            <section className="mb-10">
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
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
