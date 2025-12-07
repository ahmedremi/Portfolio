import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { use3DTilt } from '../hooks/use3DTilt';
import { Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Secure E-Commerce Platform',
            description: 'Full-stack e-commerce solution with JWT authentication, encrypted payments, and XSS/CSRF protection. Built with React, Node.js, and MongoDB.',
            tags: ['React', 'Node.js', 'MongoDB', 'Security', 'JWT'],
            gradient: 'from-[#a855f7] to-[#7c3aed]',
            image: '/images/ecommerce.svg',
        },
        {
            title: 'Security Audit Dashboard',
            description: 'Real-time security monitoring dashboard for web applications with vulnerability scanning, threat detection, and automated alerts.',
            tags: ['React', 'TypeScript', 'WebSockets', 'Security'],
            gradient: 'from-[#3b82f6] to-[#2563eb]',
            image: '/images/security-dashboard.svg',
        },
        {
            title: 'Authentication System',
            description: 'Robust authentication and authorization system with 2FA, OAuth integration, session management, and role-based access control.',
            tags: ['React', 'OAuth', '2FA', 'Security', 'Express'],
            gradient: 'from-[#06b6d4] to-[#0891b2]',
            image: '/images/authentication.svg',
        },
    ];

    return (
        <section id="projects" className="py-24 perspective-1000">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 gradient-text">
                    Featured Projects
                </h2>
                
                <div className="flex items-center justify-center gap-2 mb-16 text-gray-400">
                    <Github className="w-5 h-5" />
                    <p className="text-sm md:text-base">
                        All projects are available on{' '}
                        <a 
                            href="https://github.com/ahmedremi" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-purple-400/50 hover:decoration-purple-300"
                        >
                            GitHub
                        </a>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ title, description, tags, gradient, image, index }) => {
    const [ref, isVisible] = useScrollAnimation();
    const { tilt, handleMouseMove, handleMouseLeave } = use3DTilt();

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`glass-card group cursor-pointer fade-in preserve-3d ${isVisible ? 'visible' : ''}`}
            style={{
                animationDelay: `${index * 0.1}s`,
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${tilt.y * 2}px)`,
                transition: 'transform 0.3s ease-out'
            }}
        >
            {/* Project Image */}
            <div className={`relative h-64 rounded-xl bg-gradient-to-br ${gradient} mb-6 overflow-hidden preserve-3d`}>
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]" />
                <img 
                    src={image} 
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
                    style={{ transform: `translateZ(20px)` }}
                />
            </div>

            {/* Project Info */}
            <h3 className="text-2xl font-bold mb-3 layer-2">{title}</h3>

            <p className="text-gray-400 mb-6 leading-relaxed layer-1">{description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-purple-600/20 text-purple-400"
                        style={{ transform: `translateZ(${5 + i * 2}px)` }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Projects;
