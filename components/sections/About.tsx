import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title mb-16">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="relative aspect-square max-w-md mx-auto md:mx-0">
                <Image
                  src="/images/avatar.png"
                  alt="Sai Priya Veerabomma"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="reveal">
              <h3 className="text-2xl font-semibold mb-6">Machine Learning Engineer & Software Developer</h3>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Back in 2012, I channeled my creativity into designing custom boards and pins on Pinterest, which led
                  me to explore the world of coding and web development. This creative endeavor sparked a passion that
                  has carried me through various roles, from agile start-ups to large corporations.
                </p>

                <p>
                  These days, my main focus is on building accessible and data-driven applications. I enjoy working at
                  the intersection of design and engineering — creating solutions that look good and perform
                  exceptionally well. Currently, I am pursuing a Master of Science in Computer Software Engineering at
                  Northeastern University, engaging in projects like developing RAG engines and real-time chatbots.
                </p>

                <p>
                  Professionally, As a Data Engineer at Cognizant Technology Solutions, I built scalable data pipelines,
                  integrated and processed data from various databases, and implemented machine learning algorithms to
                  enhance system performance.
                </p>

                <p>
                  In addition to my technical skills, I serve as the Vice President of Finance for the Graduate Student
                  Government at Northeastern University, managing a substantial budget and ensuring financial
                  transparency.
                </p>

                <p>
                  When I'm not at the computer, I'm usually doodling, editing videos, hanging out with my family, or
                  searching for the best Tiramisu in the city.
                </p>

                <p>Feel free to connect with me on LinkedIn or explore my projects on GitHub.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
