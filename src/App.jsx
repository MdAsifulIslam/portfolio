import React, { useState } from 'react';
import { Mail, Phone, Code, Server, Cloud, Database, Award, Briefcase, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('sending');

    // EmailJS configuration - Replace these with your actual values from emailjs.com
    const SERVICE_ID = 'your_service_id'; // Get from EmailJS dashboard
    const TEMPLATE_ID = 'your_template_id'; // Create email template in EmailJS
    const PUBLIC_KEY = 'your_public_key'; // Get from EmailJS dashboard

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'asifulislamshamrat@gmail.com',
      message: formData.message,
      reply_to: formData.email,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus('error');
    }
  };

  const skills = [
    { category: 'Cloud & Infrastructure', items: ['AWS EC2', 'Docker', 'AWS ECS', 'Linux'] },
    { category: 'Monitoring & Tools', items: ['Grafana', 'Zabbix', 'Loki', 'Prometheus'] },
    { category: 'Operations', items: ['CI/CD', 'IaC', 'Incident Management', 'Disaster Recovery'] },
    { category: 'Development', items: ['Microservices', 'SQL', 'Superset', 'Log Analysis'] }
  ];

  const experience = [
    {
      title: 'System Engineer (L1)',
      company: 'Sheba Fintech Ltd.',
      period: 'July 2025 - Present',
      achievements: [
        'Full ownership of production system monitoring in 24/7 roster shifts',
        'Reduced downtime through quick service restoration',
        'Handled 10+ critical incidents per shift independently',
        'Supported production services used by 2M+ users'
      ]
    },
    {
      title: 'Junior System Engineer',
      company: 'Sheba Fintech Ltd.',
      period: 'Oct 2024 - June 2025',
      achievements: [
        'Reduced average incident resolution time by 20%',
        'Independently monitored live production services',
        'Handled 8-10 incidents per shift independently',
        'Worked with microservices architecture'
      ]
    },
    {
      title: 'Trainee System Engineer',
      company: 'Sheba Fintech Ltd.',
      period: 'April 2024 - Oct 2024',
      achievements: [
        'Monitored production systems using AWS and Grafana',
        'Assisted in resolving partial outages within SLA',
        'Supported handling of 5-8 incidents per shift',
        'Learned AWS EC2 operations and incident escalation'
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ASIFUL ISLAM
            </div>
            
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {['About', 'Skills', 'Experience', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-cyan-400 transition-colors text-sm lg:text-base"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-slate-700">
              {['About', 'Skills', 'Experience', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 hover:text-cyan-400 hover:bg-slate-800 rounded transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full max-w-6xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-3xl sm:text-4xl font-bold shadow-xl">
              <img src="profileimage.jpg" alt="Profile" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-4">
            System Engineer L1
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-4 sm:mb-6 px-4">
            Cloud & Infrastructure Operations | System Monitoring
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
            Dedicated to ensuring system stability, efficient monitoring, and reliable production operations in dynamic cloud environments. 
            Aspiring DevOps Engineer with hands-on experience in AWS, Docker, and microservices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
            <a href="mailto:asifulislamshamrat@gmail.com" className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-5 sm:px-6 py-3 rounded-lg transition-colors text-sm sm:text-base">
              <Mail size={18} />
              Email Me
            </a>
            <a href="tel:+8801960259599" className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 px-5 sm:px-6 py-3 rounded-lg transition-colors text-sm sm:text-base">
              <Phone size={18} />
              Call Me
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce hidden sm:inline-block"
          >
            <ChevronDown size={32} className="text-cyan-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 w-full">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-slate-900/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
              <Server className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Professional Summary</h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                System Engineer with hands-on experience in production system monitoring, incident handling, and cloud & infrastructure operations. 
                Skilled in full and partial service outage management, microservices troubleshooting, and AWS & Docker operations, with direct access to live production environments.
              </p>
            </div>
            <div className="bg-slate-900/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
              <Award className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Key Highlights</h3>
              <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                  <span>24/7 production monitoring experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                  <span>Supporting 2M+ users in e-Money systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                  <span>AWS, Docker & microservices expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                  <span>20% improvement in incident resolution time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-slate-900/50 p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  {idx === 0 && <Cloud className="text-cyan-400 flex-shrink-0" size={24} />}
                  {idx === 1 && <Server className="text-cyan-400 flex-shrink-0" size={24} />}
                  {idx === 2 && <Code className="text-cyan-400 flex-shrink-0" size={24} />}
                  {idx === 3 && <Database className="text-cyan-400 flex-shrink-0" size={24} />}
                  <h3 className="font-bold text-sm sm:text-base">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-slate-300 text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 w-full">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-slate-900/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-cyan-400">{exp.title}</h3>
                    <p className="text-base sm:text-lg text-slate-300">{exp.company}</p>
                  </div>
                  <p className="text-slate-400 text-sm sm:text-base">{exp.period}</p>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-slate-300 flex items-start gap-3 text-sm sm:text-base">
                      <Briefcase className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-slate-900/50 p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
                <Phone className="text-cyan-400 mb-3" size={24} />
                <h3 className="font-bold mb-2 text-sm sm:text-base">Phone</h3>
                <a href="tel:+8801960259599" className="text-slate-300 hover:text-cyan-400 text-sm sm:text-base break-all">
                  +880 1960-259599
                </a>
              </div>
              <div className="bg-slate-900/50 p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
                <Mail className="text-cyan-400 mb-3" size={24} />
                <h3 className="font-bold mb-2 text-sm sm:text-base">Email</h3>
                <a href="mailto:asifulislamshamrat@gmail.com" className="text-slate-300 hover:text-cyan-400 break-all text-sm sm:text-base">
                  asifulislamshamrat@gmail.com
                </a>
              </div>
              <div className="bg-slate-900/50 p-5 sm:p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
                <ExternalLink className="text-cyan-400 mb-3" size={24} />
                <h3 className="font-bold mb-2 text-sm sm:text-base">Portfolio</h3>
                <a href="https://asifulislam.netlify.app" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 text-sm sm:text-base break-all">
                  asifulislam.netlify.app
                </a>
              </div>
            </div>
            <div className="bg-slate-900/50 p-6 sm:p-8 rounded-xl border border-slate-700">
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block mb-2 text-xs sm:text-sm font-medium">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-xs sm:text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-xs sm:text-sm font-medium">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors resize-none text-sm sm:text-base"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={formStatus === 'sending'}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && (
                  <p className="text-green-400 text-center text-sm sm:text-base">Message sent successfully!</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-400 text-center text-sm sm:text-base">Failed to send. Please try again.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 border-t border-slate-700 w-full">
        <div className="w-full max-w-6xl mx-auto text-center text-slate-400">
          <p className="text-sm sm:text-base">&copy; 2025 Asiful Islam. All rights reserved.</p>
          <p className="mt-2 text-xs sm:text-sm">System Engineer | Cloud & Infrastructure Operations</p>
        </div>
      </footer>
    </div>
  );
}