import React from 'react';
import { Users, Heart, Sparkles, Coffee, ArrowRight } from 'lucide-react';
import { Button, Card, Badge } from '../components/UI';

const ClubsPage = () => {
    const clubs = [
        {
            name: 'Venture Lounge',
            description: 'An exclusive collective for founders and investors to share insights over monthly strategy dinners.',
            members: 124,
            tag: 'Strategic',
            icon: Sparkles,
            image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800'
        },
        {
            name: 'Studio M',
            description: 'Exploring the boundary between traditional craft and modern design through intimate workshops.',
            members: 85,
            tag: 'Creative',
            icon: Heart,
            image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800'
        },
        {
            name: 'Slow Brew Society',
            description: 'The art of the perfect pour. Weekly sensory sessions in the city\'s most beautiful hidden roasteries.',
            members: 210,
            tag: 'Lifestyle',
            icon: Coffee,
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 pt-32">
            <header className="mb-24 text-center">
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Member Collectives</span>
                <h1 className="text-7xl font-serif mb-8 italic">Find your <span className="text-gold">Tribe.</span></h1>
                <p className="text-charcoal/50 text-xl font-light max-w-2xl mx-auto">
                    Arrivio clubs are decentralized, member-led collectives that form the heartbeat of our community.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {clubs.map((club, i) => (
                    <div key={i} className="group bg-white rounded-[3rem] p-4 shadow-club border border-forest/5 hover:border-gold/20 transition-all duration-700">
                        <div className="relative aspect-square mb-8 overflow-hidden rounded-[2.5rem]">
                            <img src={club.image} alt={club.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" />
                            <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/0 transition-colors duration-700"></div>
                        </div>

                        <div className="px-4 pb-8 text-center">
                            <Badge variant="accent" className="mb-6">{club.tag}</Badge>
                            <h2 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-gold transition-colors">{club.name}</h2>
                            <p className="text-charcoal/50 text-sm mb-12 font-light leading-relaxed px-2">
                                {club.description}
                            </p>

                            <div className="flex flex-col gap-4">
                                <button className="w-full bg-forest text-white py-4 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-forest/10 hover:bg-gold hover:shadow-gold/20 transition-all duration-500">
                                    Request Access
                                </button>
                                <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-forest/30">
                                    <Users className="w-3 h-3" />
                                    {club.members} Inner Circle Members
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <section className="mt-32 p-16 rounded-[4rem] bg-forest text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-serif text-white mb-6">Have a vision?</h2>
                    <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
                        Every great collective begins with a shared passion. We provide the platform and resources to help you launch your own Arrivio club.
                    </p>
                    <button className="bg-gold text-white px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-forest transition-all duration-500 shadow-2xl shadow-black/20">
                        Apply to Launch a Club
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ClubsPage;
