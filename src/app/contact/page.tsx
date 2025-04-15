
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
    return (
        <div className="container mx-auto py-10 fade-in">
            <header className="mb-12 text-center">
                <h1 className="text-3xl font-bold">Contact Us</h1>
                <p className="text-md mt-4 text-muted-foreground">
                    Get in touch with our team for inquiries and support.
                </p>
            </header>

            <section className="max-w-lg mx-auto">
                <form className="space-y-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" placeholder="Your Name" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Your Email" />
                    </div>
                    <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your Message" />
                    </div>
                    <Button>Send Message</Button>
                </form>
            </section>
        </div>
    );
}
