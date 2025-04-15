
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from 'lucide-react';

export default function TeamPage() {
    return (
        <div className="container mx-auto py-10 fade-in">
            <header className="mb-12 text-center">
                <h1 className="text-3xl font-bold">Our Team</h1>
                <p className="text-md mt-4 text-muted-foreground">
                    Meet the experts driving our AI solutions.
                </p>
            </header>

            <section>
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
        </div>
    );
}
