"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    title: 'AI Engineer',
    description: 'Expert in machine learning and AI-driven web solutions. Specializes in developing innovative algorithms and models.',
    avatarUrl: 'https://picsum.photos/80/80?random=7',
    skills: ['Machine Learning', 'Python', 'TensorFlow', 'AI Development'],
    experience: '5+ years',
    projects: ['AI-powered web applications', 'Machine learning models for data analysis'],
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'App Development Specialist',
    description: 'Passionate about creating innovative and user-friendly app experiences. Focuses on mobile solutions and UI/UX design.',
    avatarUrl: 'https://picsum.photos/80/80?random=8',
    skills: ['App Development', 'UI/UX Design', 'React Native', 'Mobile Solutions'],
    experience: '4+ years',
    projects: ['Mobile app for e-commerce', 'User interface design for healthcare app'],
  },
  {
    id: 3,
    name: 'David Lee',
    title: 'Solutions Architect',
    description: 'Dedicated to designing and implementing AI-powered solutions. Expertise in cloud computing and system architecture.',
    avatarUrl: 'https://picsum.photos/80/80?random=9',
    skills: ['Solutions Architecture', 'AI Implementation', 'Cloud Computing', 'System Design'],
    experience: '6+ years',
    projects: ['Cloud-based AI platform', 'Scalable system architecture for data processing'],
  },
];

export default function TeamPage() {
    return (
        <div className="container mx-auto py-10 fade-in">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold">Our Team</h1>
                <p className="text-md mt-4 text-muted-foreground">
                    Meet the experts driving our AI solutions.
                </p>
            </header>

            <section>
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
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {member.skills.map((skill, index) => (
                                        <Badge key={index} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-semibold">Experience:</span> {member.experience}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-semibold">Notable Projects:</span> {member.projects.join(', ')}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
