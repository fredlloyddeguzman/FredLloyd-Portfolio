import { ArrowBigRight, ArrowRight, ExternalLink } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "My First Project",
        description: "My first project when starting to learn web development. It was a simple HTML and CSS and JavaScript project that showcases my initial skills in web design and development.",
        image: "/projects/project1.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://fredlloyddeguzman.github.io/",
    },
    {
        id: 2,
        title: "Emplyoyee Management System",
        description: "A simple employee management system built with C# and Windows Forms. It allows users the CRUD operations on employee data.",
        image: "/projects/project2.jpg",
        tags: ["HTML", "CSS", "C#", "Windows Forms"],
        demoUrl: "https://github.com/fredlloyddeguzman/EmployeeSystem.git",
    },
    {
        id: 3,
        title: "PhotoBooth App",
        description: "A simple photo booth app built with HTML/CSS and JavaScript. It allows users to take photos, apply filters, and save them to their device or share them on social media.",
        image: "/projects/project3.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://fredlloyddeguzman.github.io/photobooth-web/?fbclid=IwY2xjawK7fm1leHRuA2FlbQIxMABicmlkETFXTTFuUHpIenlIbkFBQXZiAR5wb69DLe_xPq366scknjUVQ4R3sDEiKnkTGN34LPc4L277KX1XvWW0O_eFtw_aem_UzFTchURtDhWmer_66M__w",
    }
    
]

export const ProjectSection = () => {

    return(
       <section className="py-24 px-4 relative" id="projects">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
                        Here's a selection of my projects that showcase my skills and creativity. Each project reflects my dedication to quality and innovation in development.
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"></p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, key) => (
                             <div key={key} className="group bg-card rounded-lg shadow-xs card-hover overflow-hidden">
                                    <div className="h-48 overflow-hidden">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>

                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, index) => (
                                                <span key={index} className="border px-2  py-1 text-xs bg-secondary/20 text-secondary-foreground rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    
                                    <h3 className="text-lg font-semibold mb-2 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4 text-sm">
                                        {project.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                                <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                                    <ExternalLink size={20} />
                                                </a>
                                        </div>
                                    </div>
                                    </div>
                             </div>
                       ))}
                    </div>
                    <div className="text-center mt-12">
                        <a href="https://github.com/fredlloyddeguzman" className="cosmic-button inline-flex w-fit items-center mx-auto gap-2" target="_blank">
                            Check My Github <ArrowRight size={16}/>
                        </a>

                    </div>
                </div>
       </section>
    )
}