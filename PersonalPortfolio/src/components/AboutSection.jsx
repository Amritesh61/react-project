import { Code, User , Briefcase} from "lucide-react";


export const AboutSection = () => { 

    return (
        <section id = "about" className = "py-24 px-4 relative">
        {" "}
        <div className="container max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>

                    <p className="text-muted-foreground">
                        With over 2 years of experience in web development, I specialize in creating dynamic and responsive web applications.
                         My journey began with a fascination for technology and has evolved into a passion for building innovative solutions that
                          enhance user experiences.
                    </p>
                    <p className="text-muted-foreground"> 
                        I thrive on challenges and continuously seek to expand my skill set. From front-end design to back-end development,
                        I enjoy every aspect of the web development process. My goal is to create seamless, user-friendly applications that not only meet
                        client needs but also push the boundaries of what's possible in the digital space.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="contact" className="cosmic-button">
                            {" "}
                            Get in Touch 
                        </a>
                        <a href="" className="px-6 py-2 rounded-full border border=primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>

                    </div>

                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary" />
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary" />
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary" />
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
            
        </section>

    );
};
