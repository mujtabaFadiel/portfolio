import { Menu, X } from 'lucide-react'
import { ThemedBtn } from '../component/ThemedBtn'
import { useState } from 'react'


const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#project', label: 'Project' },
    { href: '#experience', label: 'Experience' }
]

export const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
        <header className="fixed top-0 bg-transparent start-0 py-5 end-0 z-50">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    MF<span className="text-primary">.</span>
                </a>

                {/**/}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass py-1 px-2 flex gap-1 items-center rounded-full">
                        {
                            navLinks.map((link, index) => (
                                <a
                                    href={link.href}
                                    key={index}
                                    className=
                                    "px-4 py-2 text-sm text text-muted-foreground rounded-full hover:text-foreground hover:bg-surface"
                                >
                                    {link.label}
                                </a>
                            ))
                        }
                    </div>
                </div>

                {/* Button */}
                <div className="hidden md:block">
                    <ThemedBtn size='sm'>Contact me</ThemedBtn>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24} />}
                </button>
            </nav>

            {/*Mobile Menu*/} 
            { isMobileMenuOpen && (<div className='md:hidden glass-strong animate-fade-in'>
                <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
                    {
                        navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className=
                                "text-lg text-muted-foreground py-2 hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        ))
                    }
                    <ThemedBtn size='sm'
                         onClick={() => setIsMobileMenuOpen(false)}
                    >Contact me</ThemedBtn>
                </div>
            </div>)}
        </header>
    )
}