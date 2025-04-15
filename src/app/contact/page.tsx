"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
    return (
        <div className="container mx-auto py-24 fade-in">
            <header className="mb-16 text-center">
                <h1 className="text-4xl font-bold text-primary mb-4">Get In Touch</h1>
                <p className="text-lg text-muted-foreground">
                    We'd love to hear from you! Reach out for inquiries, support, or just to say hello.
                </p>
            </header>

            <section className="max-w-3xl mx-auto">
                <Card className="bg-secondary shadow-lg rounded-lg overflow-hidden">
                    <CardContent className="p-12">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <Label htmlFor="name" className="text-foreground flex items-center mb-2">
                                        <User className="mr-2 h-5 w-5" />
                                        Name
                                    </Label>
                                    <Input type="text" id="name" placeholder="Your Name" />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="text-foreground flex items-center mb-2">
                                        <Mail className="mr-2 h-5 w-5" />
                                        Email
                                    </Label>
                                    <Input type="email" id="email" placeholder="Your Email" />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="message" className="text-foreground flex items-center mb-2">
                                    <MessageSquare className="mr-2 h-5 w-5" />
                                    Message
                                </Label>
                                <Textarea id="message" placeholder="Your Message" className="h-40" />
                            </div>
                            <div className="text-center">
                                <Button size="lg" className="bg-accent text-secondary-foreground hover:bg-accent-foreground">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
