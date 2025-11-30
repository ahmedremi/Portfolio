import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, MapPin, Briefcase, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create mailto link with form data
        const mailtoLink = `mailto:ay.guerfi@esi-sba.dz?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/ahmedremi',
            icon: Github,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/guerfi-ahmed-yacine-6831b32b8/',
            icon: Linkedin,
        },
    ];

    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 gradient-text">
                    Get In Touch
                </h2>

                <div
                    ref={ref}
                    className={`grid md:grid-cols-2 gap-12 max-w-6xl mx-auto fade-in ${isVisible ? 'visible' : ''}`}
                >
                    {/* Left Column - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
                            <p className="text-gray-400 leading-relaxed">
                                I'm currently exploring new opportunities and building creative tools. Feel free to reach out for collaboration, , or freelance projects!
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#a855f7] to-[#7c3aed] rounded-lg">
                                    <Mail size={20} />
                                </div>
                                <span>ay.guerfi@esi-sba.dz</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#06b6d4] to-[#0891b2] rounded-lg">
                                    <MapPin size={20} />
                                </div>
                                <span>El Oued, Algeria</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#10b981] to-[#059669] rounded-lg">
                                    <Briefcase size={20} />
                                </div>
                                <span>Available for new opportunities</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                                        aria-label={social.name}
                                    >
                                        <Icon size={20} />
                                        <span className="text-sm font-medium">{social.name}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="glass-card">
                        <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                        <p className="text-gray-400 text-sm mb-6">I'll get back to you within 24 hours</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name and Email Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a855f7] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your@email.com"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#dc2626] transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a855f7] transition-colors"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or opportunity..."
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#a855f7] transition-colors resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-[#a855f7] to-[#06b6d4] rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
