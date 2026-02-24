import React from 'react';
import { Calendar, Clock, MapPin, Search, Filter, ArrowUpRight } from 'lucide-react';
import { Button, Card, Badge } from '../components/UI';

const EventsPage = () => {
    const events = [
        {
            title: 'Solstice Networking Gala',
            date: 'Aug 24, 2026',
            time: '19:00 - 23:00',
            location: 'The Belvedere Rooftop',
            category: 'Signature Event',
            price: 'Free for Members',
            image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200'
        },
        {
            title: 'Contemporary Ceramics',
            date: 'Aug 26, 2026',
            time: '14:00 - 17:00',
            location: 'Arrivio Studio B',
            category: 'Art & Craft',
            price: '€25 for Members',
            image: 'https://images.unsplash.com/photo-1565191999001-551c187427bb?auto=format&fit=crop&w=1200'
        },
        {
            title: 'Sunrise Flow & Matcha',
            date: 'Aug 28, 2026',
            time: '07:30 - 09:00',
            location: 'Park East Sanctuary',
            category: 'Wellness',
            price: 'Free for Members',
            image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200'
        },
        {
            title: 'Founders Strategy Dinner',
            date: 'Sep 01, 2026',
            time: '20:00 - 22:30',
            location: 'The Library Room',
            category: 'Professional',
            price: 'Members Only',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200'
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 pt-32">
            <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
                <div className="max-w-2xl">
                    <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Community Calendar</span>
                    <h1 className="text-7xl font-serif mb-8 italic">Moments in <br />the City.</h1>
                    <p className="text-charcoal/50 text-xl font-light">
                        Exclusive gatherings, masterclasses, and social rituals designed to elevate your everyday.
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="relative">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-forest/20" />
                        <input
                            type="text"
                            placeholder="Filter by interest..."
                            className="bg-white border border-forest/5 pl-14 pr-8 py-4 rounded-full text-sm outline-none focus:border-gold/40 transition-all shadow-sm w-[300px]"
                        />
                    </div>
                    <button className="w-14 h-14 bg-forest text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-500 shadow-xl shadow-forest/10">
                        <Filter className="w-5 h-5" />
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {events.map((event, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="relative aspect-[16/9] mb-8 overflow-hidden rounded-[2.5rem] shadow-2xl">
                            <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                            <div className="absolute top-8 left-8">
                                <Badge variant="accent" className="bg-white/90 backdrop-blur-md text-forest border-none shadow-xl">{event.category}</Badge>
                            </div>
                        </div>

                        <div className="px-4">
                            <div className="flex justify-between items-start gap-4 mb-4">
                                <h2 className="text-3xl font-bold tracking-tight group-hover:text-gold transition-colors duration-300 underline-offset-8 group-hover:underline">{event.title}</h2>
                                <ArrowUpRight className="w-6 h-6 shrink-0 text-forest/20 group-hover:text-gold transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </div>

                            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest text-charcoal/40 border-b border-forest/5 pb-8 mb-8">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-gold" />
                                    {event.date}
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-4 h-4 text-gold" />
                                    {event.time}
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-4 h-4 text-gold" />
                                    {event.location}
                                </div>
                                <div className="flex items-center gap-3 text-gold">
                                    {event.price}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button className="flex-1 bg-forest text-white py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-forest/10 hover:bg-gold hover:shadow-gold/20 transition-all duration-500">
                                    Book Invitation
                                </button>
                                <button className="px-8 py-4 border border-forest/5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-forest/5 transition-colors">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsPage;
