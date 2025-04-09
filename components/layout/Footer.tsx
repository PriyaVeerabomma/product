import Link from "next/link"
import { SocialLinks } from "@/components/molecules/SocialLinks"

export default function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/#home" className="text-xl font-poppins font-bold">
              Sai<span className="text-primary">Priya</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <SocialLinks />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sai Priya Veerabomma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
