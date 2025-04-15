"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Code, Smartphone, Brain, User } from 'lucide-react';
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO of ABC Corp',
    quote: 'Zynin AI Solutions has transformed our business operations. Their AI-driven solutions are innovative and effective.',
    image: 'https://picsum.photos/80/80?random=1',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Marketing Director at XYZ Ltd',
    quote: 'The web and app development services provided by Zynin AI are top-notch. They truly understand our needs and deliver exceptional results.',
    image: 'https://picsum.photos/80/80?random=2',
  },
  {
    id: 3,
    name: 'David Lee',
    title: 'CTO at 123 Industries',
    quote: 'We are impressed with the AI solutions developed by Zynin AI. They have significantly improved our efficiency and decision-making processes.',
    image: 'https://picsum.photos/80/80?random=3',
  },
];

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    title: 'AI Engineer',
    description: 'Expert in machine learning and AI-driven web solutions.',
    avatarUrl: 'https://picsum.photos/80/80?random=4',
    skills: ['Machine Learning', 'Web Development', 'AI Solutions'],
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'App Development Specialist',
    description: 'Passionate about creating innovative and user-friendly app experiences.',
    avatarUrl: 'https://picsum.photos/80/80?random=5',
    skills: ['App Development', 'UI/UX Design', 'Mobile Solutions'],
  },
  {
    id: 3,
    name: 'David Lee',
    title: 'Solutions Architect',
    description: 'Dedicated to designing and implementing AI-powered solutions.',
    avatarUrl: 'https://picsum.photos/80/80?random=6',
    skills: ['Solutions Architecture', 'AI Implementation', 'Cloud Computing'],
  },
];

export default function Home() {
  return (
    <div className="container mx-auto py-10 fade-in">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Zynin AI Solutions</h1>
        <p className="text-lg text-muted-foreground mb-8">
          AI-powered customized solutions for web and app development.
        </p>
        <Button variant="default" size="lg">Explore Our Solutions</Button>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center"><Code className="mr-2" /> Web Development</CardTitle>
              <CardDescription className="text-gray-500">
                AI-driven web development solutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We leverage AI to create intelligent, responsive websites tailored to your business needs. From e-commerce platforms to corporate sites, we deliver exceptional digital experiences.
              </p>
              <Button variant="secondary">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center"><Smartphone className="mr-2" /> App Development</CardTitle>
              <CardDescription className="text-gray-500">
                Customized app development solutions powered by AI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Our AI-powered apps are designed to meet your unique business needs. We create innovative and user-friendly app experiences that drive engagement and growth.
              </p>
              <Button variant="secondary">Explore</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center"><Brain className="mr-2" /> AI Solutions</CardTitle>
              <CardDescription className="text-gray-500">
                Bespoke AI solutions tailored to specific business problems.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                From automation to analytics, we harness the power of AI to drive innovation. Our tailored solutions address specific business challenges and unlock new opportunities.
              </p>
              <Button variant="secondary">Discover</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl font-semibold">{testimonial.name}</CardTitle>
                    <CardDescription className="text-gray-500">{testimonial.title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage src={member.avatarUrl} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                    <CardDescription className="text-gray-500">{member.title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Rocket Infographic Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Elevate Your Business with Zynin AI
        </h2>
        <div className="flex justify-center mb-8">
          <Rocket className="text-primary h-20 w-20" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">
              AI-Driven Innovation
            </h3>
            <p className="text-sm text-muted-foreground">
              Revolutionize your processes with cutting-edge AI technology.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">
              Custom Solutions
            </h3>
            <p className="text-sm text-muted-foreground">
              Tailored AI solutions to meet your specific business needs.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">
              Expert Team Support
            </h3>
            <p className="text-sm text-muted-foreground">
              Dedicated support from our team of AI specialists.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
