import { skills } from "@/utils/skillsList";

export function About() {
  const proficientTech = ["TypeScript", "JavaScript", "React", "MongoDB", "Next.js"];
  return (
    <section
      id="about"
      className="flex items-center w-full min-h-screen justify-center lg:justify-between px-[10%]"
    >
      {/* about skills container */}
      <div className="flex flex-col lg:flex-row">
        {/* about container */}
        <div className="flex-1 flex-col pb-20 lg:pr-16 pr-0">
          <h1 className="font-bold pb-8 lg:text-5xl text-3xl underline decoration-solid decoration-2 underline-offset-8">
            About
          </h1>
          <p className="pb-8 lg:text-xl md:text-lg">
            I am a full-stack developer that has mostly worked with MERN
            stack in my development career. 
          </p>
          <p className="lg:text-xl md:text-lg">
            Et quia nihil est autem autem et ducimus impedit in necessitatibus
            quod qui maiores voluptatem ea ipsa consequuntur. Ut rerum deleniti
            sed Quis magni est voluptatibus reprehenderit. Et ipsum tenetur eum
            tempora quia sit minus officiis est delectus dolores vel repellendus
            aspernatur! Aut quam sint et reprehenderit voluptatum sed iure
            soluta et ullam cupiditate.
          </p>
        </div>
        {/* skills container */}
        <div className="flex-1 flex-col lg:pl-6 pl-0 lg:text-left">
          <h1 className="font-bold pb-8 lg:text-5xl text-3xl underline decoration-solid decoration-2 underline-offset-8">
            Skills
          </h1>
          <div className="flex flex-col">
            {skills.map((skill, i) => (
              <div key={i} className="pb-6">
                <h1 className="font-semibold text-2xl pb-3 flex justfy-start">
                  {skill.category}
                </h1>
                <div className="flex flex-wrap">
                  {skill.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-row px-4 py-2 rounded-lg m-2 bg-content1 whitespace-nowrap hover:origin-top-left hover:rotate-1"
                    >
                      <h1>{tech.name}</h1>
                      {tech.icon ? (
                        <img
                          src={tech.icon}
                          width={20}
                          height={20}
                          className="ml-2"
                        ></img>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
