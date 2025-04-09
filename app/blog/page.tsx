import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Sai Priya Veerabomma",
  description: "Thoughts and insights on AI, machine learning, and software development.",
}

export default function BlogPage() {
  return (
    <section className="py-20 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-16">
          My <span className="text-primary">Blog</span>
        </h1>

        <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
          <h2 className="text-2xl font-medium mb-4">Coming Soon</h2>
          <p className="text-muted-foreground max-w-lg">
            I'm working on valuable content related to AI, machine learning, and software development. Check back soon
            for insights and tutorials!
          </p>
        </div>
      </div>
    </section>
  )
}
