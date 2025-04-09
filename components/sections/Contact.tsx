import { personal } from "@/lib/data"
import { ContactForm } from "@/components/molecules/ContactForm"
import { SocialLinks } from "@/components/molecules/SocialLinks"
import { MapPin, Mail, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-16">Contact</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

              <p className="text-muted-foreground mb-8">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out. I'm always
                open to new challenges and collaborations.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{personal.email}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{personal.phone}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{personal.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <SocialLinks size="md" />
              </div>
            </div>

            <div className="reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
