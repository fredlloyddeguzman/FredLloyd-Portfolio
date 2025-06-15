import React, { act, useState } from 'react';
import { cn } from '@/lib/utils'; 

const skills = [
    //frontend skills
    {name: "TypeScript", level: "45%", category: "Frontend"},
    {name: "HTML/CSS", level: "75%", category: "Frontend"},
    {name: "JavaScript", level: "65%", category: "Frontend"},
    {name: "React", level: "45%", category: "Frontend"},
    {name: "Laravel", level: "45%", category: "Frontend"},
    {name: "TailwindCSS", level: "65%", category: "Frontend"},

    //backend skills
    {name: "Node.js", level: "50%", category: "Backend"},
    {name: "TSQL", level: "35%", category: "Backend"},   
    {name: "MySQL", level: "50%", category: "Backend"},

    //tools and technologies
    {name: "Git/Github", level: "65%", category: "Tools"},
    {name: "Figma", level: "35%", category: "Tools"},
    {name: "Postman", level: "35%", category: "Tools"},
    {name: "Axios", level: "75%", category: "Tools"},
    {name: "VS Code", level: "75%", category: "Tools"},
    {name: "Visual Studio", level: "75%", category: "Tools"},
    {name: "Photoshop", level: "75%", category: "Tools"},
    {name: "Canva", level: "55%", category: "Tools"},
    {name: "ChatGpt", level: "55%", category: "Tools"},
]   

const categories = ["All", "Frontend", "Backend", "Tools"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredSkills = skills.filter(skill => activeCategory === "All" || skill.category === activeCategory);
    return (
        <section className="py-24 px-4 relative bg-secondary/30" id="skills">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center mb-12 gap-4">
                        {categories.map((category, key) => (
                            <button onClick={() => setActiveCategory(category)} key={key} className={cn(
                                "px-5 py-2 rounded-full capitalize transition-colors duration-300",
                                 activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                                )}>
                                {category}
                            </button>
                        ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4"> 
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full originate-left animate-grow-1.5s ease-in-out"
                                    style={{ width: skill.level}}
                                ></div> 
                            </div>
                            <div className="mt-2 text-right">
                                <span className="text-sm text-muted-foreground">{skill.level}</span>
                            </div>
                        </div>
                    ))
                        }
                </div>

            </div>

        </section>
    )
}