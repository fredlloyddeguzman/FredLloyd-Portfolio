
import { Briefcase, Code, User } from 'lucide-react';

export const AboutMe = () => {
    return (
    <section id="about" className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-center ">
                                Passionate Web Developer & Designer
                            </h2>
                                <p className="text-muteded-foreground">
                                    Hello! I'm Fred Lloyd De Guzman, a web developer with a passion for creating beautiful and functional websites. 
                                    With a background in both design and development, I strive to build user-friendly interfaces that not only look great but also provide an exceptional user experience.
                                </p>
                                 <p className="text-muteded-foreground"> 
                                    I specialize in front-end development, using modern technologies like React, HTML, CSS, and JavaScript to bring ideas to life. 
                                    My goal is to create responsive and accessible web applications that engage users and meet their needs.
                                </p>
                        <div className=" flex fflex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get in Touch</a>
                             <a href="/projects/deGuzmanFredCV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" target='_blank'> Download CV</a>
                        </div>  
                    </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Code className='h-6 w-6 text-primary' />
                                    </div>
                                    <div className='text-left'>
                                            <h4 className='font-semibold text-lg'>Web Development</h4>
                                            <p className='text-muteded-foreground'>
                                                Creating responsive and dynamic websites using modern technologies.
                                            </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                 <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <User className='h-6 w-6 text-primary' />
                                    </div>
                                    <div className='text-left'>
                                            <h4 className='font-semibold text-lg'>Graphic Design</h4>
                                            <p className='text-muteded-foreground'>
                                                Crafting visually appealing designs that communicate effectively.
                                            </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                 <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Briefcase className='h-6 w-6 text-primary' />
                                    </div>
                                    <div className='text-left'>
                                            <h4 className='font-semibold text-lg'>Project Management</h4>
                                            <p className='text-muteded-foreground'>
                                                Overseeing projects from conception to completion, ensuring timely delivery.
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>

        </div>
    </section>
    )
} 