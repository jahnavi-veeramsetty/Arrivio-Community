import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Events', path: '/events' },
        { label: 'Clubs', path: '/clubs' },
        { label: 'Arrivio Daily', path: '/daily' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-8 py-6
                ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_2px_30px_rgba(15,26,23,0.05)] py-4' : 'bg-transparent'}
            `}
        >
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">

                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:scale-110 ${isScrolled ? 'border-forest' : 'border-forest'}`}>
                            <div className={`absolute top-[-2px] left-1/2 -translate-x-1/2 w-3 h-3 border-t-2 border-l-2 rotate-45 transition-colors ${isScrolled ? 'border-forest' : 'border-forest'}`}></div>
                        </div>
                        <span className={`text-2xl font-serif font-bold tracking-tighter transition-colors text-forest`}>
                            Arrivio.
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-12">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:tracking-[0.4em]
                                ${isActive ? 'text-forest' : 'text-forest/30 hover:text-forest'}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Action Section */}
                <div className="flex items-center gap-6">
                    <Link
                        to="/auth"
                        className={`px-10 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 active:scale-95
                            ${isScrolled
                                ? 'bg-forest text-white hover:bg-gold hover:shadow-xl hover:shadow-gold/20'
                                : 'bg-white/40 backdrop-blur-md border border-forest/10 text-forest hover:bg-forest hover:text-white'
                            }`}
                    >
                        Sign In
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2 text-forest" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-6 right-6 mt-4 bg-white/98 backdrop-blur-2xl rounded-[2.5rem] p-12 shadow-3xl border border-forest/5 animate-in slide-in-from-top-4 duration-700">
                    <nav className="flex flex-col gap-10">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-serif italic text-forest border-b border-forest/5 pb-6 hover:text-gold transition-colors"
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
