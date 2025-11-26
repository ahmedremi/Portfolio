import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { use3DTilt } from '../hooks/use3DTilt';

const Skills = () => {
    const skills = [
        {
            icon: '⚛️',
            title: 'React Development',
            description: 'Building modern, performant web applications with React, React Hooks, Redux, and Next.js for optimal user experiences.',
        },
        {
            icon: '🔒',
            title: 'Cyber Security',
            description: 'Implementing security best practices, penetration testing, vulnerability assessment, and secure coding standards.',
        },
        {
            icon: '🎨',
            title: 'Frontend Engineering',
            description: 'Crafting responsive UIs with modern CSS frameworks like Tailwind, optimizing performance, and ensuring accessibility.',
        },
        {
            icon: '🛡️',
            title: 'Application Security',
            description: 'Securing web applications through authentication systems, JWT, OAuth, XSS/CSRF prevention, and input validation.',
        },
        {
            icon: '🚀',
            title: 'Performance & DevOps',
            description: 'Optimizing applications for speed, implementing CI/CD pipelines, containerization with Docker, and cloud deployment.',
        },
        {
            icon: '🔐',
            title: 'Security Research',
            description: 'Staying updated with latest security trends, participating in bug bounty programs, and ethical hacking practices.',
        },
    ];

    return (
        <section id="skills" className="py-24 perspective-1000">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 gradient-text">
                    My Skills
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} {...skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ icon, title, description, index }) => {
    const [ref, isVisible] = useScrollAnimation();
    const { tilt, handleMouseMove, handleMouseLeave } = use3DTilt();

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`glass-card relative overflow-hidden fade-in preserve-3d ${isVisible ? 'visible' : ''}`}
            style={{
                animationDelay: `${index * 0.1}s`,
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(10px)`,
                transition: 'transform 0.3s ease-out'
            }}
        >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

            <div className="text-5xl mb-4 gradient-text layer-2">{icon}</div>

            <h3 className="text-2xl font-bold mb-3 layer-1">{title}</h3>

            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
};

export default Skills;
