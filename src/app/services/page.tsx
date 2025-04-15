"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Brain, Cloud, Shield, TrendingUp, CheckCircle, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const servicesData = [
    {
        id: 1,
        title: 'Web Development',
        description: 'AI-driven web development solutions.',
        content: 'We leverage AI to create intelligent, responsive websites tailored to your business needs.',
        icon: Code,
    },
    {
        id: 2,
        title: 'App Development',
        description: 'Customized app development solutions powered by AI.',
        content: 'Our AI-powered apps are designed to meet your unique business needs, driving engagement and growth.',
        icon: Smartphone,
    },
    {
        id: 3,
        title: 'AI Solutions',
        description: 'Bespoke AI solutions tailored to specific business problems.',
        content: 'From automation to analytics, we harness the power of AI to drive innovation and unlock new opportunities.',
        icon: Brain,
    },
    {
        id: 4,
        title: 'Cloud Integration',
        description: 'Seamlessly integrate AI solutions with your existing cloud infrastructure.',
        content: 'Our cloud integration services ensure smooth deployment and optimal performance of AI applications.',
        icon: Cloud,
    },
    {
        id: 5,
        title: 'Data Security',
        description: 'Protect your data with advanced AI-powered security solutions.',
        content: 'We provide robust security measures to safeguard your sensitive data and ensure compliance.',
        icon: Shield,
    },
    {
        id: 6,
        title: 'Data Analytics',
        description: 'Gain valuable insights with our comprehensive data analytics tools.',
        content: 'Our AI-driven analytics tools help you uncover hidden patterns and make informed decisions.',
        icon: TrendingUp,
    },
    {
        id: 7,
        title: 'Automated Processes',
        description: 'Automate repetitive tasks and improve overall efficiency.',
        content: 'We automate key processes to streamline operations and reduce manual effort.',
        icon: CheckCircle,
    },
    {
        id: 8,
        title: 'Innovation Consulting',
        description: 'Expert consulting services to drive AI innovation in your organization.',
        content: 'Our consultants help you identify new opportunities and develop innovative AI strategies.',
        icon: Lightbulb,
    },
];

export default function ServicesPage() {
    return (
        <div className="container mx-auto py-10 fade-in">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold">Our Services</h1>
                <p className="text-md mt-4 text-muted-foreground">
                    Explore our AI-powered services tailored to your needs.
                </p>
            </header>

            <section className="mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <Card key={service.id} className="hover:shadow-xl transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold flex items-center">
                                    <service.icon className="mr-2" />
                                    {service.title}
                                </CardTitle>
                                <CardDescription className="text-gray-500">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {service.content}
                                </p>
                                <Button variant="secondary">Learn More</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Additional Sections */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Zynin AI Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Customized Solutions</h3>
                        <p className="text-sm text-muted-foreground">
                            We tailor our AI services to meet your unique business needs, ensuring optimal results.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
                        <p className="text-sm text-muted-foreground">
                            Our team of AI specialists provides dedicated support and guidance throughout the entire process.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
                        <p className="text-sm text-muted-foreground">
                            We leverage the latest advancements in AI to deliver innovative and effective solutions.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
                        <p className="text-sm text-muted-foreground">
                            Our AI services have helped numerous clients improve efficiency, enhance customer engagement, and drive growth.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8 text-center">Our Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">1. Consultation</h3>
                        <p className="text-sm text-muted-foreground">
                            We start by understanding your business goals and challenges.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">2. Planning</h3>
                        <p className="text-sm text-muted-foreground">
                            We develop a customized AI strategy tailored to your specific needs.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">3. Implementation</h3>
                        <p className="text-sm text-muted-foreground">
                            We implement the AI solutions seamlessly into your existing systems.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">4. Support</h3>
                        <p className="text-sm text-muted-foreground">
                            We provide ongoing support and maintenance to ensure optimal performance.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-16 text-center">
                <h2 className="text-3xl font-semibold mb-8">Explore Our AI Solutions</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Discover how our AI services can transform your business.
                </p>
                <Image
                    src="https://picsum.photos/800/300"
                    alt="AI Solutions"
                    width={800}
                    height={300}
                    className="rounded-lg shadow-md mx-auto"
                />
                <div className="mt-8">
                    <Button variant="default" size="lg">Get Started</Button>
                </div>
            </section>

            {/* Client Success Stories Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8 text-center">Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">Increased Efficiency by 40%</CardTitle>
                            <CardDescription className="text-gray-500">Manufacturing Company</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                By implementing our AI-driven automation solutions, the company reduced operational costs and improved productivity.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-xl transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">Enhanced Customer Engagement by 60%</CardTitle>
                            <CardDescription className="text-gray-500">E-commerce Platform</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Our AI-powered personalization algorithms helped the platform deliver tailored experiences, resulting in higher customer satisfaction and retention.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="text-center">
                <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Contact us today to learn how Zynin AI Solutions can help you achieve your business goals.
                </p>
                <Button variant="default" size="lg">Get Started</Button>
            </section>
        </div>
    );
}
