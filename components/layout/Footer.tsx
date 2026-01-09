import Link from "next/link"
// import { SocialLinks } from "@/components/molecules/SocialLinks"

export default function Footer() {
  return (
    <footer className="bg-secondary py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sai Priya Veerabomma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

