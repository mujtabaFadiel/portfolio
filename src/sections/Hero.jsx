import { ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // من مكتبة FontAwesome
import heroBg from '../assets/images/bg.jpg';
import { ThemedBtn } from '../component/ThemedBtn';
import { AnimatedBorderBtn } from '../component/AnimatedBorderBtn';


const skills = [
    "Nestjs", "ReactNative", "React", "PostgreSQL", "JS", "GitHub", "Postman", "Video Editing"
]

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/*Background*/}
            <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background'>
                <img
                    src={heroBg}
                    alt="hero-image"
                    className="h-full w-full object-cover opacity-40"
                />
            </div>

            {/*Green Dots*/}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i} // إضافة الـ key ضرورية
                        className='absolute w-1.5 h-1.5 rounded-full opacity-60'
                        style={{
                            backgroundColor: '#20b2a6',
                            left: `${Math.random() * 100}%`, // تغيير start إلى left
                            top: `${Math.random() * 100}%`,
                            // تأكد من تعريف أنيميشن slow-drift في index.css
                            animation: `slow-drift ${15 + Math.random() * 20}s 
                            ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Content */}
            <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/*left colume - Text Content*/}
                    <div className='space-y-8'>
                        <div className='animate-fade-in'>
                            <span className='inline-flex items-center gap-2 px-4 py-1 rounded-full glass text-sm text-primary'>
                                <span className='w-2 h-2 bg-primary rounded-full animate-pulse'></span>
                                <span>Backend / ReactNative Developer</span>
                            </span>
                        </div>

                        {/*Headline*/}
                        <div className='space-y-4'>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                                Crafting <span className='text-primary glow-text'>High-Performance</span>
                                <br />
                                <span className='font-serif italic font-normal text-white'>
                                    Digital Ecosystems
                                </span>
                            </h1>
                            <p className='text-lg text-muted-foreground max-w-lg opacity-0 animate-fade-in animation-delay-200'>
                                Hi, I am Mujtaba Fadiel. A Software Engineer
                                specializing in building high-performance applications
                                with NestJS and React Native.
                            </p>
                        </div>
                        <div className='flex gap-2'>
                            <ThemedBtn size='lg'>
                                Contact Me <ArrowRight className='w-5 h-5' />
                            </ThemedBtn>
                            <a href="https://drive.google.com/file/d/1hEG78nSMqTNNEol9wqDCMwcEIYgRFlvy/view?usp=sharing">
                                <AnimatedBorderBtn>
                                    <Download className="w-5 h-5" />
                                    <span className="">
                                        Download CV
                                    </span>
                                </AnimatedBorderBtn>
                            </a>
                        </div>

                        {/*Social Media*/}
                        <div className='flex items-center gap-2 animate-fade-in animation-delay-400'>
                            <span className='text-sm text-muted-foreground'>Follow me:</span>
                            {[
                                { icon: FaGithub, href: "https://github.com/mujtabaFadiel/" },
                                { icon: FaLinkedin, href: "" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className='transition-all duration-300 rounded-full p-2 hover:bg-primary/10 hover:text-primary'
                                >{<social.icon className='w-5 h-5' />}</a>
                            ))}
                        </div>
                    </div>
                    {/*Right colume - profile-image*/}
                    <div className='relative animate-fade-in animation-delay-300'>

                        {/*Profile Img*/}
                        <div className='relative max-w-md mx-auto'>
                            <div
                                className='absolute inset-0 rounded-3xl bg-gradient-to-br
                                from-primary/30 via-transparent to-primary/10 blur-2xl
                                animate-pulse-glow
                                '
                            />
                            <div className='relateive rounded-3xl p-2 glass glow-border'>
                                {/* <img src="" alt="profile" className='w-full aspect-[4/5] object-cover rounded-2xl' /> */}
                                <div  className='w-full aspect-[4/5] object-cover rounded-2xl' />
                                {/*floating Badge*/}
                                <div className='absolute -bottom-4 -right-4 glass rounded-xl
                                    px-4 py-3 animate-float
                                '>
                                    <div className='flex item-center gap-3'>
                                        <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                                        <span className='text-sm font-medium'>Available for work</span>
                                    </div>
                                </div>
                                {/*Stats Badge*/}
                                <div className='absolute -top-4 left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                                    <div className='text-2xl font-bold text-primary'></div>
                                    <div className='text-xs text-muted-foreground'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Skills Section*/}
                <div className='mt-20 animate-fade-in animation-delay-600'>
                    <p className='text-sm text-muted-foreground mb-6
                     text-center'>Technologies I work with</p>
                    <div className='relative overflow-hidden'>
                        <div className='flex animate-marquee'>
                            {[...skills, ...skills].map((skill, id) => (
                                <div key={id}
                                    className='shrink-0 px-8 py-4'
                                >
                                    <span className='text-xl font-semibold text-muted-foreground/50
                                    hover:text-muted-foreground transition-colorsّ'>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}