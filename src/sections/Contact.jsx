import { Mail, Phone } from "lucide-react"

export const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Let's work
                        <span className="font-serif italic font-normal text-white">
                            {" "}together.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Feel free to reach out via email or phone.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animation-delay-300">

                    {/* Email */}
                    <a
                        href="mailto:mujtabafadiel@gmail.com"
                        className="group glass rounded-2xl p-6 flex items-center gap-4 
                                   hover:border-primary/50 transition-all duration-300 w-full sm:w-auto"
                    >
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Email</p>
                            <p className="text-white font-medium group-hover:text-primary transition-colors">
                                mujtabafadiel@gmail.com
                            </p>
                        </div>
                    </a>

                    {/* Phone Sudan */}
                    <a
                        href="tel:+249903780073"
                        className="group glass rounded-2xl p-6 flex items-center gap-4 
                                   hover:border-primary/50 transition-all duration-300 w-full sm:w-auto"
                    >
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <a 
                                href="https://wa.me/249903780073"
                                className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Sudan 🇸🇩</a>
                            <a 
                                href="https://wa.me/96879919877"
                                className="text-white font-medium group-hover:text-primary transition-colors">
                                +249 903 780 073
                            </a>
                        </div>
                    </a>

                    {/* Phone Oman */}
                    <a
                        href="tel:+96879919877"
                        className="group glass rounded-2xl p-6 flex items-center gap-4 
                                   hover:border-primary/50 transition-all duration-300 w-full sm:w-auto"
                    >
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Oman 🇴🇲</p>
                            <p className="text-white font-medium group-hover:text-primary transition-colors">
                                +968 7991 9877
                            </p>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    )
}
