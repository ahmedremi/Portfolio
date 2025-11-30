import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { use3DTilt } from '../hooks/use3DTilt';
import {
    Code2,
    FileCode,
    Palette,
    Server,
    GitBranch,
    Zap,
    RefreshCw,
    Globe
} from 'lucide-react';

const Technologies = () => {
    const technologies = [
        {
            name: 'React',
            icon: Code2,
            description: 'Building dynamic and interactive user interfaces',
            color: 'from-[#61dafb] to-[#21a1c4]'
        },
        {
            name: 'JavaScript',
            icon: FileCode,
            description: 'Core language for modern web development',
            color: 'from-[#f7df1e] to-[#d4b91e]'
        },
        {
            name: 'Tailwind CSS',
            icon: Palette,
            description: 'Utility-first CSS framework for rapid UI development',
            color: 'from-[#38bdf8] to-[#0284c7]'
        },
        {
            name: 'Node.js',
            icon: Server,
            description: 'Server-side JavaScript runtime environment',
            color: 'from-[#68a063] to-[#3c6e3a]'
        },
        {
            name: 'Git & GitHub',
            icon: GitBranch,
            description: 'Version control and collaborative development',
            color: 'from-[#f05032] to-[#c9402d]'
        },
        {
            name: 'Vite',
            icon: Zap,
            description: 'Next-generation frontend build tool',
            color: 'from-[#646cff] to-[#535bf2]'
        },
        {
            name: 'Redux',
            icon: RefreshCw,
            description: 'State management for complex applications',
            color: 'from-[#764abc] to-[#5a3690]'
        },
        {
            name: 'REST APIs',
            icon: Globe,
            description: 'Building and consuming RESTful web services',
            color: 'from-[#ec4899] to-[#d946ef]'
        }
    ];

    return (
        <section id="technologies" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 gradient-text">
                    Technologies I Work With
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <TechCard key={index} {...tech} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TechCard = ({ name, icon: Icon, description, color, index }) => {
    const [ref, isVisible] = useScrollAnimation();
    const { tilt, handleMouseMove, handleMouseLeave } = use3DTilt();

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`glass-card relative overflow-hidden fade-in preserve-3d group ${isVisible ? 'visible' : ''}`}
            style={{
                animationDelay: `${index * 0.1}s`,
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(10px)`,
                transition: 'transform 0.3s ease-out'
            }}
        >
            {/* Top gradient bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`} />

            {/* Icon */}
            <div className={`mb-4 layer-2 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                <Icon size={48} strokeWidth={1.5} className="text-white" style={{ filter: 'drop-shadow(0 0 8px currentColor)' }} />
            </div>

            {/* Technology name */}
            <h3 className="text-xl font-bold mb-2 layer-1">{name}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export default Technologies;
