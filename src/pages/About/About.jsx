import HeroImg from "@/assets/hero.jpg";


export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
            <div className="relative space-y-4">
                    <p className="text-white">
                      Hello! I'm <span className="font-bold text-white">Arshath</span>, a
                      passionate software developer and Computer Science student who enjoys
                      building modern, responsive, and user-friendly web applications. I
                      specialize in Java, Spring Boot, React, and JavaScript, with a strong focus
                      on creating clean, efficient, and scalable solutions.
                    </p>

                    <p className="text-white">
                      As the founder of <span className="font-bold text-white">ARSHTEX</span>, I
                      enjoy turning ideas into real-world digital products. From portfolio
                      websites to full-stack applications, I continuously explore new
                      technologies, improve my development skills, and build projects that solve
                      practical problems while delivering great user experiences.
                    </p>

                    <div className="pt-6">
                      <blockquote className="border-l-4 border-gray-300 pl-4">
                        <p className="text-white">
                          I believe that learning never stops. Every project is an opportunity to
                          grow, experiment, and create something meaningful. My goal is to become
                          a skilled Full-Stack Java Developer while contributing innovative
                          solutions that help businesses and inspire fellow developers.
                        </p>
                      </blockquote>
                    </div>
                  </div>

            
          </div>
        </div>
      </section>
    </>
  );
}
