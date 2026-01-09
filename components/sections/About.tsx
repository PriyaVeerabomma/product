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
              <h3 className="text-2xl font-semibold mb-6">Software Developer</h3>

              <div className="space-y-4 text-muted-foreground">
                {/* <p>
                Back in 2012, I channeled my creativity into designing custom boards and pins on Pinterest, which led me 
                to explore the world of coding and web development. This creative endeavor sparked a passion that has 
                carried me through various roles, from agile start-ups to large corporations.
                </p>

                <p>
                These days, my main focus is on building accessible, scalable and reliable applications. I enjoy working 
                at the intersection of design and engineering — creating solutions that look good and perform 
                exceptionally well. Currently, I have recently graduated with a Master of Science in Computer Software 
                Engineering degree at Northeastern University, engaging in projects like developing RAG engines and real-time chatbots.
                </p>

                <p>
                Professionally, As a Software Engineer at Cognizant Technology Solutions, I built scalable micro services
                based application, integrated and processed multiple IoT devices for web applications at Verizon and 
                optimized the user to server interaction using multi threaded programming and object oriented designing 
                principles. I have also excelled at using Sonarqube for code analysis and improving the security.
                </p>

                <p>
                During my free time I love to get my hands on different technologies and explore different tools by 
                getting my hands dirty, using the platforms and getting to know what the user is looking for. I have 
                recently developed a project that develops user intinerary  like a holiday planner using Agentic AI, 
                FastAPI.
                </p>

                <p>
                In addition to my technical skills, I served as the Vice President of Finance for the Graduate Student 
                Government at Northeastern University, managing a substantial budget and ensuring financial transparency.
                </p>

                <p>
                When I'm not at the computer, I'm usually doodling, editing videos, hanging out with my family, 
                or searching for the best Tiramisu in the city.
                </p>
              
                <p>
                  Feel free to connect with me on LinkedIn or explore my projects on GitHub.
                </p> */}
                <p>
                  I’m the kind of person who still lives on Stack Overflow, when things breaks see how they work, and always wants to try every new tool the day it launches. Curiosity just kinda runs the show for me.
                </p>
                <p>
                  Technically I am a full stack developer, and an AI enthusiast. Right now, I’m juggling between applications, projects, data structures and algorithms(for life).
                </p>
                <p>
                  My hidden talents would be I’ve kept a Wordle streak going for over a year even got a few on the first try. Honestly, it’s my proudest daily habit compared to leetcode.
                </p>
                <p>
                  And the list of my favorite people would be Padmasree Warrior(alive), Tim Cook(dead but still lives in spirit and in my phone), and maybe I’ll add you to the list if you happen to be a recruiter looking for an SDE 😏
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
