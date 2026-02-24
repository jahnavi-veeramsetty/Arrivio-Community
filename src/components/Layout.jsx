import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-bg selection:bg-gold/30 overflow-x-hidden">
            <Header />
            <main className="w-full">
                {children}
            </main>
            <footer className="w-full bg-forest text-white py-24 mt-24">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-4xl font-serif italic mb-6 text-white">Arrivio</h2>
                        <p className="text-white/60 max-w-sm mb-8">
                            A premium community platform designed for those who value refined living and authentic connections.
                            Find your space, meet your people, and truly belong.
                        </p>
                        <div className="flex gap-6">
                            {['Instagram', 'Twitter', 'LinkedIn'].map(social => (
                                <a key={social} href="#" className="text-sm font-bold tracking-widest text-gold hover:text-white transition-colors">{social}</a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gold mb-8">Explore</h4>
                        <ul className="space-y-4 text-white/70 font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Lifestyle Events</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Interest Clubs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Arrivio Daily</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Locations</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gold mb-8">Support</h4>
                        <ul className="space-y-4 text-white/70 font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-8 mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
                    <p>&copy; 2026 Arrivio Inc. All rights reserved.</p>
                    <div className="flex gap-12">
                        <span>Made with passion in Berlin</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
