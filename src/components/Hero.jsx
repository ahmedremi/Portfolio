import { useTypingEffect } from '../hooks/useTypingEffect';
import { useState, useEffect } from 'react';

const Hero = () => {
    const roles = [
        'React Developer',
        'Cyber Security Enthusiast',
        'Frontend Engineer',
        'Security Researcher',
        'Full Stack Developer'
    ];

    const displayText = useTypingEffect(roles);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 perspective-1000"
        >
            {/* Animated Background with 3D depth */}
            <div
                className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-rotate"
                style={{
                    transform: `translateZ(-50px) translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`
                }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(220,38,38,0.15)_0%,transparent_70%)]" />
            </div>

            {/* Content with 3D layers */}
            <div className="container mx-auto px-6 text-center relative z-10 preserve-3d">
                <div className="space-y-6">
                    <p
                        className="text-xl text-gray-400 animate-fade-in-up layer-1"
                        style={{
                            animationDelay: '0s',
                            transform: `translateZ(30px) translateX(${mousePosition.x * 0.5}px)`
                        }}
                    >
                        Hi there, I'm
                    </p>

                    <h1
                        className="text-5xl md:text-7xl lg:text-8xl font-extrabold animate-fade-in-up layer-3"
                        style={{
                            animationDelay: '0.2s',
                            transform: `translateZ(50px) translateX(${mousePosition.x * 0.3}px) translateY(${mousePosition.y * 0.3}px)`
                        }}
                    >
                        <span className="gradient-text">Ahmed Yacine</span>
                    </h1>

                    <p
                        className="text-2xl md:text-3xl lg:text-4xl text-gray-400 animate-fade-in-up layer-2"
                        style={{
                            animationDelay: '0.4s',
                            transform: `translateZ(40px) translateX(${mousePosition.x * 0.4}px)`
                        }}
                    >
                        I'm a{' '}
                        <span className="inline-block border-r-[3px] border-red-600 animate-blink">
                            {displayText}
                        </span>
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-fade-in-up layer-1"
                        style={{
                            animationDelay: '0.6s',
                            transform: `translateZ(30px) translateY(${mousePosition.y * 0.2}px)`
                        }}
                    >
                        <a href="#projects" className="btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
