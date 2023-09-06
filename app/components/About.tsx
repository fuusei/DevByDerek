import { skills } from "@/utils/skillsList";

export function About() {
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
            Lorem ipsum dolor sit amet. Non quae consequatur aut distinctio
            minima est sunt architecto vel repellendus omnis qui nobis quisquam!
            In galisum fugiat quo saepe animi rem nesciunt iure qui adipisci
            iste.
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
        <div className="flex-1 flex-col lg:pl-6 pl-0 text-center lg:text-left ">
          <h1 className="font-bold pb-8 lg:text-5xl text-3xl underline decoration-solid decoration-2 underline-offset-8">
            Skills
          </h1>
          <div className="flex flex-col">
            {skills.map((skill, i) => (
              <div key={i}>
                <h1>{skill.category}</h1>
                <div className="flex flex-row">
                  {skill.technologies.map((tech) => (
                    <div className="flex flex-row m-8 bg-slate-800">
                      {tech.name}
                      {/* {tech.icon && (
                        <img src={tech.icon} width={30} height={30}></img>
                      )} */}
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
