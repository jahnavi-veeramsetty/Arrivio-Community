import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, MapPin, Sparkles, Heart, CheckCircle, MessageSquare, Plus } from 'lucide-react';
import { Button, Badge } from '../components/UI';

const LandingPage = () => {
    const [selectedCity, setSelectedCity] = useState('Hyderabad');

    const cities = ['Hyderabad', 'Bangalore', 'Mumbai', 'Delhi', 'Pune', 'Chennai'];

    const events = [
        { id: 1, title: 'Sunset Networking Mixer', date: 'Oct 24, 2026', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80' },
        { id: 2, title: 'AI Founders Workshop', date: 'Oct 28, 2026', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80' },
        { id: 3, title: 'Urban Photography Walk', date: 'Nov 02, 2026', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80' },
    ];

    const clubs = [
        { name: 'Tech & Innovators', members: '1.2k', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80' },
        { name: 'Design Collective', members: '850', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
        { name: 'AI & Future Lab', members: '2.1k', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=80' },
        { name: 'Music & Vinyl', members: '430', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80' },
    ];

    const stories = [
        { title: 'Designing a home that breathes.', author: 'Sarah J.', category: 'Lifestyle', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80' },
        { title: 'My first month at the Arrivio Clubhouse.', author: 'Marc L.', category: 'Community', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80' },
    ];

    // Simple Intersection Observer for reveal animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full bg-[#fcfaf7] text-forest selection:bg-gold/20 overflow-x-hidden">

            {/* 1. Cinematic Hero Section */}
            <section className="relative min-h-[95vh] flex items-center px-8 lg:px-24 pt-24 pb-20 overflow-hidden bg-gradient-premium">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">

                    {/* Left: Editorial Text */}
                    <div className="lg:col-span-6 animate-in fade-in slide-in-from-left-8 duration-1000 stagger-1">
                        <div className="inline-flex items-center gap-3 mb-10 p-1 pr-6 bg-white/50 backdrop-blur-md rounded-full border border-forest/5 shadow-sm">
                            <span className="bg-forest text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">New</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-forest/60">Berlin Hub Opening Soon</span>
                        </div>
                        <h1 className="text-[5.5rem] md:text-[8rem] lg:text-[10rem] font-serif leading-[0.85] tracking-tighter mb-10 text-forest drop-shadow-sm">
                            Arrival to <br />
                            <span className="italic text-gold italic-gold-shimmer font-light">Belonging.</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-charcoal/70 font-light max-w-xl mb-16 leading-relaxed">
                            Fine residences and curated collectives <br className="hidden md:block" />
                            for the modern visionary.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <Button className="px-14 py-6 text-[10px] font-bold uppercase tracking-[0.3em] shadow-3xl shadow-forest/20 rounded-2xl group relative overflow-hidden">
                                <span className="relative z-10">Explore Spaces</span>
                                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </Button>
                            <Button variant="outline" className="px-14 py-6 text-[10px] font-bold uppercase tracking-[0.3em] rounded-2xl border-2 border-forest hover:bg-forest hover:text-white transition-all duration-500">
                                Join the Club
                            </Button>
                        </div>
                    </div>

                    {/* Right: Immersive Collage */}
                    <div className="lg:col-span-6 relative h-[700px] hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000 stagger-2">
                        {/* Main Image Overlay */}
                        <div className="absolute top-0 right-0 w-[450px] h-[550px] rounded-[4rem] overflow-hidden shadow-6xl z-10 animate-float-slow">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Community" />
                            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent"></div>
                            <div className="absolute bottom-12 left-12 text-white">
                                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">Member Since 2024</p>
                                <p className="text-2xl font-serif italic">Berlin Clubhouse</p>
                            </div>
                        </div>

                        {/* Secondary Floating Elements */}
                        <div className="absolute -bottom-10 left-0 glass-card p-10 rounded-[3rem] z-20 animate-fade-in-up stagger-3 group cursor-pointer hover:border-gold/30 transition-all duration-700">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden rotate-3 group-hover:rotate-0 transition-transform">
                                    <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="RSVP" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest/40 mb-1">Upcoming Mixer</p>
                                    <h4 className="text-2xl font-bold tracking-tight">Sunset Terrace</h4>
                                    <p className="text-xs text-gold font-bold uppercase tracking-widest mt-2">RSVP — Join 84 Others</p>
                                </div>
                            </div>
                        </div>

                        {/* Background Accents */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -z-10"></div>
                        <div className="absolute top-20 left-20 w-4 h-4 bg-gold rounded-full animate-ping opacity-60"></div>
                    </div>
                </div>

                {/* Vertical Scroll Label */}
                <div className="absolute bottom-20 right-14 origin-bottom-right -rotate-90 hidden lg:flex items-center gap-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-forest/20">Scroll to Explore</span>
                    <div className="w-24 h-[1px] bg-forest/10"></div>
                </div>
            </section>

            {/* 2. Upcoming Events - Refined Grid */}
            <section className="py-40 px-8 lg:px-24 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24 reveal-on-scroll">
                        <div className="max-w-2xl">
                            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">The Calendar</span>
                            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter leading-[0.9]">Curated <br /><span className="italic">Experiences.</span></h2>
                        </div>
                        <Button variant="ghost" className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-4 group px-0 hover:bg-transparent">
                            View All Events <div className="w-12 h-12 rounded-full border border-forest/10 flex items-center justify-center group-hover:bg-forest group-hover:text-white transition-all"><ArrowRight className="w-4 h-4" /></div>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {events.map((event, i) => (
                            <div key={event.id} className={`reveal-on-scroll stagger-${i + 1} group cursor-pointer`}>
                                <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden relative mb-10 shadow-xl group-hover:shadow-3xl transition-all duration-1000">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                    <div className="absolute top-10 left-10">
                                        <Badge variant="accent" className="bg-white/90 backdrop-blur-md text-forest border-none px-6 py-2 text-[10px] font-bold tracking-widest">{event.city}</Badge>
                                    </div>
                                    <div className="absolute bottom-12 left-12 right-12 text-white">
                                        <div className="flex items-center gap-2 mb-4 opacity-60 text-[10px] uppercase tracking-widest font-bold">
                                            <Calendar className="w-3 h-3" />
                                            {event.date}
                                        </div>
                                        <h3 className="text-3xl font-serif italic mb-8 group-hover:text-gold transition-colors">{event.title}</h3>
                                        <Button className="w-full py-5 text-[10px] font-bold uppercase tracking-[0.2em] bg-white text-forest border-none hover:bg-gold hover:text-white transition-all rounded-2xl">Quick RSVP</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Browse by City - Premium Snap */}
            <section className="py-32 bg-sand/30 border-y border-forest/5 relative">
                <div className="max-w-7xl mx-auto px-8 lg:px-24 mb-16 reveal-on-scroll">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-forest/40 flex items-center gap-4">
                        <div className="w-8 h-[1px] bg-forest/20"></div> Browse by Location
                    </h4>
                </div>
                <div className="flex gap-10 overflow-x-auto px-8 lg:px-24 pb-12 hide-scrollbar snap-x snap-mandatory">
                    {cities.map(city => (
                        <button
                            key={city}
                            onClick={() => setSelectedCity(city)}
                            className={`snap-center shrink-0 min-w-[320px] aspect-[4/3] rounded-[3.5rem] border transition-all duration-700 flex flex-col justify-between p-12 group
                                ${selectedCity === city
                                    ? 'bg-forest text-white border-forest shadow-4xl'
                                    : 'bg-white text-forest/40 border-forest/5 hover:border-forest/20'
                                }`}
                        >
                            <div className={`p-4 rounded-2xl w-fit transition-all duration-500 ${selectedCity === city ? 'bg-white/10' : 'bg-sand'}`}>
                                <MapPin className={`w-6 h-6 ${selectedCity === city ? 'text-gold' : 'text-forest/20'}`} />
                            </div>
                            <div className="text-left">
                                <span className="text-4xl font-serif italic mb-2 block">{city}</span>
                                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity ${selectedCity === city ? 'opacity-40' : 'opacity-0'}`}>12 Spaces Available</span>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* 4. Popular Clubs - Architectural Layout */}
            <section className="py-40 px-8 lg:px-24 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-12 mb-20 reveal-on-scroll">
                            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">The Collectives</span>
                            <h2 className="text-7xl md:text-[7rem] font-serif tracking-tighter leading-none mb-10">United by <br /><span className="italic text-gold italic-gold-shimmer font-light">Curiosity.</span></h2>
                        </div>

                        <div className="lg:col-span-5 grid grid-cols-1 gap-12">
                            {clubs.slice(0, 2).map((club, i) => (
                                <div key={club.name} className={`reveal-on-scroll stagger-${i + 1} p-10 rounded-[3.5rem] bg-white border border-forest/5 group hover:bg-forest transition-all duration-700 cursor-pointer overflow-hidden relative shadow-lg`}>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-[8] transition-all duration-[1.5s]"></div>
                                    <div className="relative z-10 flex flex-col items-start gap-8">
                                        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md">
                                            <img src={club.image} className="w-full h-full object-cover" alt={club.name} />
                                        </div>
                                        <div>
                                            <h4 className="text-3xl font-serif italic mb-2 group-hover:text-white transition-colors">{club.name}</h4>
                                            <p className="text-[10px] font-bold tracking-[0.1em] text-forest/40 uppercase group-hover:text-gold transition-colors">{club.members} Visionaries</p>
                                        </div>
                                        <button className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 group-hover:text-white transition-colors mt-4">
                                            Join Club <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-7 relative h-[700px] reveal-on-scroll">
                            <div className="absolute inset-0 rounded-[4.5rem] overflow-hidden shadow-4xl group">
                                <img src="https://images.unsplash.com/photo-1522071823991-b9671f903f60?auto=format&fit=crop&w=1200&q=80" alt="Club Meeting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent"></div>
                                <div className="absolute bottom-16 left-16 right-16">
                                    <h3 className="text-white text-5xl font-serif italic mb-6">Founders Social</h3>
                                    <p className="text-gold font-light text-xl max-w-sm mb-10 leading-relaxed italic opacity-80">Join 220 members this Friday for the AI Visionary series.</p>
                                    <Button className="px-12 py-5 text-[10px] font-bold uppercase tracking-widest bg-gold text-white border-none rounded-2xl hover:bg-white hover:text-forest transition-all">Join Live Session</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Community Stories - Editorial Slider */}
            <section className="py-40 bg-forest text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]"></div>
                <div className="max-w-7xl mx-auto px-8 lg:px-24">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24 reveal-on-scroll">
                        <div className="max-w-2xl">
                            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Member Stories</span>
                            <h2 className="text-6xl md:text-[6.5rem] font-serif leading-[0.9] tracking-tighter mb-10 reveal-on-scroll">Voices of the <br /><span className="italic">Clubhouse.</span></h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {stories.map((story, i) => (
                            <div key={i} className="group cursor-pointer reveal-on-scroll shadow-2xl">
                                <div className="aspect-[16/10] rounded-[4rem] overflow-hidden mb-12 relative">
                                    <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] grayscale group-hover:grayscale-0 contrast-125" />
                                    <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-all duration-700"></div>
                                    <div className="absolute top-10 left-10">
                                        <Badge variant="accent" className="bg-white text-forest border-none px-6 py-2 text-[10px] font-bold tracking-widest shadow-xl">{story.category}</Badge>
                                    </div>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-serif italic mb-8 hover:text-gold transition-colors leading-tight max-w-lg">{story.title}</h3>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center text-gold font-bold text-sm tracking-tighter border border-gold/10">{story.author[0]}</div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Authored by</span>
                                        <span className="text-sm font-bold tracking-tight text-white/80">{story.author}</span>
                                    </div>
                                    <div className="flex-1"></div>
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold transition-all">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Why Create an Account - Modern CTA */}
            <section className="py-52 bg-white px-8 lg:px-24 text-center relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-gold/5 rounded-full blur-[100px] animate-pulse"></div>
                <div className="max-w-5xl mx-auto reveal-on-scroll">
                    <div className="w-24 h-24 bg-forest/5 rounded-[2.5rem] flex items-center justify-center text-gold mx-auto mb-12 rotate-12 shadow-inner border border-forest/5">
                        <Sparkles className="w-10 h-10 animate-pulse" />
                    </div>
                    <h2 className="text-7xl md:text-[8rem] lg:text-[10rem] font-serif mb-16 tracking-tighter leading-[0.85] text-forest">The Membership <br /><span className="italic text-gold italic-gold-shimmer font-light">Ecosystem.</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24 text-left">
                        {[
                            { title: 'Save Events', desc: 'Personal calendar for refined networking.' },
                            { title: 'Exclusive Clubs', desc: 'Secure access to restricted interest labs.' },
                            { title: 'Publish Daily', desc: 'Share your perspective with the community.' },
                            { title: 'Collaborate', desc: 'Message and build with verified members.' },
                        ].map((benefit, i) => (
                            <div key={benefit.title} className={`p-10 rounded-[3rem] bg-sand/10 border border-forest/5 flex flex-col gap-8 group hover:bg-forest transition-all duration-700 reveal-on-scroll stagger-${i + 1}`}>
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center group-hover:bg-gold transition-colors shadow-sm">
                                    <CheckCircle className="w-6 h-6 text-forest group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-3 tracking-tight group-hover:text-white">{benefit.title}</h4>
                                    <p className="text-charcoal/50 text-xs font-light leading-relaxed group-hover:text-white/60">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button className="px-20 py-8 text-[12px] font-bold uppercase tracking-[0.4em] bg-forest text-white rounded-2xl hover:bg-gold shadow-4xl shadow-forest/20 active:scale-95 transition-all animate-float-slow">
                        Start Your Journey <ArrowRight className="inline-block ml-4 w-4 h-4" />
                    </Button>
                </div>
            </section>

            {/* Final Footer - Minimalist Luxury */}
            <footer className="py-32 bg-[#14211D] border-t border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-32">
                        <div className="lg:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-20 mb-20 gap-10">
                            <span className="text-7xl md:text-9xl font-serif italic text-white/5">Arrivio.</span>
                            <div className="flex gap-12 font-serif italic text-2xl text-white/40">
                                <a href="#" className="hover:text-gold transition-colors">Berlin.</a>
                                <a href="#" className="hover:text-gold transition-colors">London.</a>
                                <a href="#" className="hover:text-gold transition-colors">Mumbai.</a>
                            </div>
                        </div>

                        <div className="lg:col-span-6 grid grid-cols-2 gap-20">
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold mb-12">Navigation</h4>
                                <ul className="space-y-6 text-2xl font-serif italic text-white/60">
                                    <li><a href="#" className="hover:text-white transition-colors">Experiences</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Collectives</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">The Daily</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold mb-12">Social</h4>
                                <ul className="space-y-6 text-2xl font-serif italic text-white/60">
                                    <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Spotify</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-6 p-12 rounded-[4rem] bg-white/5 border border-white/5">
                            <h3 className="text-4xl font-serif italic mb-8 leading-tight text-white">Join the Newsletter.</h3>
                            <p className="text-white/40 text-sm mb-12 max-w-md font-light">Curated lifestyle insights, hub openings, and exclusive event invitations delivered monthly.</p>
                            <div className="relative">
                                <input type="text" placeholder="Email Address" className="w-full bg-white/5 border-b border-white/10 py-6 text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors" />
                                <button className="absolute right-0 bottom-4 text-gold p-2 hover:translate-x-2 transition-transform"><Plus className="w-8 h-8" /></button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-10 text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
                        <p>© 2026 Arrivio Experience Group. Elevating the art of belonging.</p>
                        <div className="flex gap-12">
                            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
                            <a href="#" className="hover:text-gold transition-colors">Terms</a>
                            <a href="#" className="hover:text-gold transition-colors">Safety</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
