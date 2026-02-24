import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const variants = {
        primary: 'btn-premium',
        secondary: 'bg-sand text-forest hover:bg-sand/80',
        accent: 'bg-gold text-white hover:bg-gold-soft',
        outline: 'btn-premium-outline',
        ghost: 'text-forest hover:bg-forest/5',
    };

    return (
        <button
            className={`px-8 py-3.5 rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export const Card = ({ children, className = '', title, subtitle, image }) => {
    return (
        <div className={`card-premium group ${className}`}>
            {image && (
                <div className="aspect-[16/10] -mx-8 -mt-8 mb-8 overflow-hidden rounded-t-[2rem]">
                    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
            )}
            {title && <h3 className="text-2xl font-bold mb-2 leading-tight">{title}</h3>}
            {subtitle && <p className="text-gold font-semibold text-xs uppercase tracking-widest mb-4">{subtitle}</p>}
            <div className="text-charcoal/70">
                {children}
            </div>
        </div>
    );
};

export const Badge = ({ children, variant = 'primary', className = '' }) => {
    const variants = {
        primary: 'bg-forest/5 text-forest border border-forest/10',
        accent: 'bg-gold/10 text-gold border border-gold/20',
        outline: 'border border-sand text-earth',
    };

    return (
        <span className={`inline-flex items-center px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export const Input = ({ label, error, className = '', ...props }) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && <label className="text-xs font-bold text-forest/40 uppercase tracking-widest pl-1">{label}</label>}
            <input
                className={`bg-bg border-forest/5 border-2 rounded-2xl px-6 py-4 outline-none focus:border-gold/40 transition-all text-forest placeholder:text-forest/20 ${error ? 'border-red-500' : ''}`}
                {...props}
            />
            {error && <span className="text-xs text-red-500 pl-1">{error}</span>}
        </div>
    );
};
