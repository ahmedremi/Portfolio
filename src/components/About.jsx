import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="about" className="py-24 bg-[#13131a]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 gradient-text">
                    About Me
                </h2>

                <div
                    ref={ref}
                    className={`grid md:grid-cols-2 gap-16 items-center fade-in ${isVisible ? 'visible' : ''}`}
                >
                    {/* Image */}
                    <div className="relative">
                        <div className="w-full h-96 rounded-3xl bg-gradient-to-br from-[#dc2626] to-[#7f1d1d] shadow-2xl" />
                        <div className="absolute top-[-20px] left-[-20px] right-[20px] bottom-[20px] bg-gradient-to-br from-[#dc2626] to-[#7f1d1d] opacity-50 rounded-3xl -z-10" />
                    </div>

                    {/* Text */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">
                            Building <span className="gradient-text">Secure</span> Web Experiences
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            I'm Ahmed Yacine, a passionate React developer with a strong focus on cyber security.
                            I combine my expertise in modern web technologies with security best practices to create
                            robust, user-friendly applications that prioritize both functionality and protection.
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            My journey in tech started with a curiosity about how systems work and how to make them
                            more secure. Today, I specialize in building React applications with a security-first
                            mindset, implementing authentication systems, secure API integrations, and following
                            industry standards for web application security.
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            When I'm not coding, you'll find me researching the latest security vulnerabilities,
                            contributing to open-source security tools, or participating in CTF competitions to
                            sharpen my skills in identifying and mitigating threats.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
