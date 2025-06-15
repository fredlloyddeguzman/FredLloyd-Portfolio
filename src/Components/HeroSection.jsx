import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-6xl mx-auto z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16">
                    
                    {/* Text Section */}
                    <div className="text-center md:text-left space-y-6 max-w-xl">
                        <h1 className="flex flex-wrap  text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            <span className="mr-3 opacity-0 animate-fade-in">Hi! I'm </span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Fred De Guzman</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
                            A passionate <span className="text-primary">Web Developer</span> with a knack for creating dynamic and responsive web applications.
                            I love turning ideas into reality through code, and I'm always eager to learn new technologies and improve my skills.
                        </p>
                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="#projects" className="cosmic-button">
                                View my work
                            </a>
                        </div>
                    </div>

                   {/* Image Section */}
                    <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-square rounded-xl overflow-hidden border-4 border-primary shadow-lg opacity-0 animate-fade-in-delay-2">
                    <img
                         src="/projects/me.jpg"
                         alt="Fred Lloyd De Guzman"
                         className="w-full h-full object-cover"/>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="w-5 h-5 text-primary" />
            </div>
        </section>
    );
};
