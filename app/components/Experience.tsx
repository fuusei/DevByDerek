export function Experience() {
  return (
    <section
      id="experience"
      className="flex items-center w-full min-h-screen justify-center lg:justify-between px-[10%]"
    >
      {/* experience projects container */}
      <div className="flex flex-col lg:flex-row">
        {/* experience container */}
        <div className="flex-1 flex-col pb-20 lg:pr-16 pr-0">
          <h1 className="font-bold pb-8 lg:text-5xl text-3xl underline decoration-solid decoration-2 underline-offset-8">
            Experience
          </h1>
        </div>
        {/* projects container */}
        <div className="flex-1 flex-col lg:pl-6 pl-0 text-center lg:text-left">
          <h1 className="font-bold pb-8 lg:text-5xl text-3xl underline decoration-solid decoration-2 underline-offset-8">
            Projects
          </h1>
          {/* <div className="flex justify-center items-center flex-wrap">
            {projects.map((project, index) => (
              <div key={index}>
                <div>
                  {project.technologies.map(
                    (tech) =>
                      tech.icon && (
                        <img
                          key={project.title + tech.name}
                          width={20}
                          height={20}
                          src={tech.icon}
                          alt={tech.name}
                        />
                      )
                  )}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
