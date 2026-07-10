import { ArrowRight, ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { AnimatedBorderBtn } from "../component/AnimatedBorderBtn"

const projects = [
    {
        title: "AI-Powered WhatsApp Assistant for Photography Studios",
        isMobile: false,
        description: `
        Developed a complete fullstack system consisting of a NestJS REST API and 
        a React admin dashboard. The system features an intelligent WhatsApp bot that 
        understands natural language, remembers conversation context, and automatically 
        creates bookings when customer data is complete.
        `,
        image: '/projects/dashboardLens.png',
        tags: ["NestJS" , "PostgreSQL", "TypeORM", "Groq AI", "Twilio WhatsApp API",
            "React", "TypeScript"],
        link: '#',
        github: 'https://github.com/mujtabaFadiel/lens-bot-backend'
    },
    {
        title: "E-Commerce Fullstack App",
        isMobile: true,
        description: `
        Built a complete e-commerce platform with a NestJS REST API 
        and React Native mobile app. The system supports product 
        browsing with search and category filtering, cart management, 
        order processing, and mock payment integration.
        `,
        images: [
            '/projects/ecommerc (2).jpeg',
            '/projects/ecommerc (6).jpeg',
            '/projects/ecommerc (4).jpeg',
            '/projects/ecommerc (3).jpeg',
            '/projects/ecommerc (1).jpeg',
            '/projects/ecommerc (5).jpeg',
        ],
        tags: ["NestJS", "PostgreSQL", "JWT", "React Native", "TypeScript"],
        link: '#',
        github: 'https://github.com/mujtabaFadiel/e-commerce'
    },
    {
        title: "Social Media App",
        isMobile: true,
        description: `
        Built a fullstack social media application
        `,
        images: [
            '/projects/social1 (1).jpg',
            '/projects/social1 (3).jpg',
            '/projects/social1 (4).jpg',
            '/projects/social1 (2).jpg',
            '/projects/social1 (5).jpg',
            '/projects/social1 (6).jpg',
            '/projects/social1 (7).jpg',
        ],
        tags: ["NestJS", "PostgreSQL", "JWT", "React Native", "TypeScript"],
        link: '#',
        github: "https://github.com/mujtabaFadiel/Wave-App",
    },
    {
        title: "Real-time Full-stack Chat Application",
        isMobile: true,
        description: ` 
        It supports private messaging between users using WebSocket (Socket.IO), 
        JWT-based authentication, and PostgreSQL for persistent storage..
        `,
        images: [
            '/projects/social2 (1).jpeg',
            '/projects/social2 (3).jpeg',
            '/projects/social2 (4).jpeg',
            '/projects/social2 (2).jpeg',
            '/projects/social2 (5).jpeg',
            '/projects/social2 (6).jpeg',

        ],
        tags: ["NestJS", "WebSocket", "JWT", "React Native", "TypeScript", "PostgreSQL"],
        link: '#',
        github: 'https://github.com/mujtabaFadiel/chat-app-backend'
    },
    
    {
        title: "Landing page",
        isMobile: false,
        description: `
        A responsive landing page built with React.js
        featuring a multi-section layout including Hero, Services, and About.
        Built as a frontend learning project to practice component structure,
        responsive design, and UI layout.   
        `,
        image: '/projects/pro1.PNG',
        tags: ["React", "CSS", "HTML"],
        link: 'https://mujtabafadiel.github.io/react-js/',
        github: "https://mujtabafadiel.github.io/react-js/",
    },
    {
        title: "ebook-Templete",
        isMobile: false,
        description: `
        A responsive eBook landing page built with React.js,
        featuring sections for book preview, author bio, chapter breakdown,
        reviews, and a download form. Built as a frontend learning project
        to practice multi-section layouts and responsive design.   
        `,
        image: '/projects/pro2.PNG',
        tags: ["React", "CSS", "HTML"],
        link: 'https://mujtabafadiel.github.io/ebook-Templete/',
        github: "https://mujtabafadiel.github.io/react-js/",
    }
]
export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 
                 via-transparent to-primary/10 blur-2xl animate-pulse-glow'
            /> */}
            <div className="container px-6 mx-auto relative z-10">

                {/*Header*/}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium
                                    tracking-wider uppercase animate-fade-in"
                    >
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5 animate-fade-in
                    animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white">
                            {" "}make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work.
                    </p>
                </div>

                {/*Project grid*/}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, id) => (
                        <div
                            key={id}
                            className="group glass rounded-2xl 
                            overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(id + 1) * 100}ms` }}
                        >
                            {/*Image*/}
                            <div className={`relative flex   ${project.isMobile ? 'aspect-[9/16] max-h-[400px]'
                                : 'aspect-video'
                                }`}>
                                {project.images ? (
                                    project.images.map((img, i) => (
                                      
                                            <img
                                            key={i}
                                            src={img}
                                            alt={`image`}
                                            className="
                                                h-full w-auto rounded-xl 
                                                object-cover flex-1 
                                                transition-transform duration-700 
                                                group-hover:scale-105
                                            "
                                        />
                                    ))
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover 
                                        transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0
                                    bg-gradient-to-t from-card via-card/50
                                    to-transparent opacity-60
                                ">
                                    {/*Overlay links*/}
                                    <div className="absolute inset-0 flex items-center 
                                    justify-center gap-6 opacity-0 group-hover:opacity-100 
                                    transition-transform duration-300">
                                        <a href={project.link}
                                            className="rounded-full glass p-3 hover:bg-primary
                                            hover:text-primary-foreground transition-all"
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                        <a href={project.github}
                                            className="rounded-full glass p-3 hover:bg-primary
                                            hover:text-primary-foreground transition-all"
                                        >
                                            <FaGithub className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/*Content*/}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold 
                                        group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight
                                        className="w-5 h-5 text-muted-foreground
                                            group-hover:text-primary
                                            group-hover:translate-x-1  
                                            group-hover:translate-y-1 transition-all"
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">{project.tags.map((tag, index) => (
                                    <span key={index}
                                        className="px-4 py-1.5 rounded-full bg-surface
                                            text-xs font-medium border border-border/50
                                            text-muted-foreground hover:border-primary/50
                                            hover:text-primary transition-all duration-300"
                                    >{tag}</span>
                                ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/**/}
                <div className="mt-12 text-center animate-fade-in animation-delay-500 flex items-center justify-center">
                    <AnimatedBorderBtn >
                        View All Projects
                        <ArrowRight className="w-5 h-5" />
                    </AnimatedBorderBtn>
                </div>
            </div>
        </section>
    )
}