import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  Code,
  Database,
  Monitor,
  Server,
  Layout,
  Cloud,
  BookOpen,
  Award,
  Menu,
  X,
  Sun,
  Moon,
  GraduationCap,
  Brain,
  Cpu,
  Globe,
  Terminal,
  Layers
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode ? {
    bg: 'bg-gray-900',
    text: 'text-white',
    textSecondary: 'text-gray-300',
    border: 'border-indigo-500',
    boxBg: 'bg-gray-800',
    hover: 'hover:bg-gray-700',
    accent: 'text-indigo-400'
  } : {
    bg: 'bg-gray-50',
    text: 'text-gray-900',
    textSecondary: 'text-gray-600',
    border: 'border-indigo-500',
    boxBg: 'bg-white',
    hover: 'hover:bg-gray-50',
    accent: 'text-indigo-600'
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['C', 'Java', 'JavaScript', 'TypeScript', 'Python']
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="w-6 h-6" />,
      skills: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Express.js']
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
    },
    {
      title: 'Development Tools',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Git', 'VS Code', 'Postman', 'Docker']
    },
    {
      title: 'Core Concepts',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Data Structures', 'Algorithms', 'OOP', 'System Design']
    },
    {
      title: 'Other Skills',
      icon: <Layers className="w-6 h-6" />,
      skills: ['Agile', 'CI/CD']
    }
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg}`}>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 ${themeClasses.bg} shadow-lg z-50 border-b ${themeClasses.border}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className={`text-xl font-bold ${themeClasses.text}`}>TSP</h1>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${themeClasses.text}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button 
                className={`md:hidden ${themeClasses.text}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>

              <div className="hidden md:flex space-x-8">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Education', id: 'education' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Experience', id: 'experience' },
                  { name: 'Certifications', id: 'certifications' },
                  { name: 'Contact', id: 'contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`${themeClasses.text} hover:opacity-80 transition-colors duration-300`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className={`md:hidden py-4 border-t ${themeClasses.border}`}>
              {[
                { name: 'Home', id: 'home' },
                { name: 'Education', id: 'education' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Experience', id: 'experience' },
                { name: 'Certifications', id: 'certifications' },
                { name: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 ${themeClasses.text} ${themeClasses.hover}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header id="home" className="pt-24 pb-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className={`p-8 ${themeClasses.boxBg} rounded-xl border ${themeClasses.border}`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQGXx-NW2R-xAQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709556969932?e=2147483647&v=beta&t=Q_1KoIkaUH_SQ6nMP4BTZlVGJA8hAA6kY6rAy8IJXpY" 
                  alt="Profile" 
                  className={`rounded-full w-48 h-48 object-cover border-2 ${themeClasses.border} hover:scale-105 transition-transform duration-300`}
                />
              </div>
              <div className="md:w-2/3">
                <h1 className={`text-3xl md:text-4xl font-bold ${themeClasses.text} mb-4 text-center md:text-left`}>
                  Thippareddy Sai Pravigna
                </h1>
                <p className={`text-xl ${themeClasses.accent} mb-6 text-center md:text-left`}>Software Developer</p>
                <div className="space-y-3">
                  <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                    Currently pursuing my Bachelor's degree at KL University with a CGPA of 9.38.
                  </p>
                  <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                    Strong foundation in MERN Stack and Web Application Development.
                  </p>
                  <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                    Passionate about building efficient and user-friendly applications.
                  </p>
                  <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                    Graduating in 2026, seeking opportunities to grow as a Software Developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Education Section */}
      <section id="education" className="py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className={`p-8 ${themeClasses.boxBg} rounded-xl border ${themeClasses.border}`}>
            <h2 className={`text-2xl font-bold text-center mb-8 ${themeClasses.text}`}>
              Education
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className={`${themeClasses.boxBg} p-6 rounded-lg border ${themeClasses.border}`}>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className={`w-6 h-6 ${themeClasses.accent}`} />
                  <h3 className={`text-xl font-bold ${themeClasses.text}`}>KL University</h3>
                </div>
                <div className={`${themeClasses.textSecondary} space-y-2`}>
                  <p>Bachelor of Technology</p>
                  <p>CGPA: 9.38</p>
                  <p>Graduating: 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className={`p-8 ${themeClasses.boxBg} rounded-xl border ${themeClasses.border}`}>
            <h2 className={`text-2xl font-bold text-center mb-8 ${themeClasses.text}`}>
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, idx) => (
                <div key={idx} className={`p-6 ${themeClasses.boxBg} rounded-lg border ${themeClasses.border} h-full`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={themeClasses.accent}>{category.icon}</span>
                    <h3 className={`font-semibold ${themeClasses.text}`}>{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIdx) => (
                      <li key={skillIdx} className={`${themeClasses.textSecondary} flex items-center gap-2`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${themeClasses.accent} bg-current`}></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className={`p-8 ${themeClasses.boxBg} rounded-xl border ${themeClasses.border}`}>
            <h2 className={`text-2xl font-bold text-center mb-8 ${themeClasses.text}`}>
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`${themeClasses.boxBg} rounded-lg overflow-hidden border ${themeClasses.border}`}>
                <img src="https://electionbuddy.com/wp-content/uploads/2022/01/Voting-image-6-scaled.jpg" alt="Online Voting System" className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className={`text-lg font-bold ${themeClasses.text} mb-2`}>Online Voting System</h3>
                  <p className={`${themeClasses.textSecondary}`}>A secure and efficient online voting platform</p>
                </div>
              </div>
              <div className={`${themeClasses.boxBg} rounded-lg overflow-hidden border ${themeClasses.border}`}>
                <img src="https://blog.upskillist.com/wp-content/uploads/2022/01/New-Project-61.png" alt="Online Blogging System" className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className={`text-lg font-bold ${themeClasses.text} mb-2`}>Online Blogging System</h3>
                  <p className={`${themeClasses.textSecondary}`}>A feature-rich blogging platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className={`p-8 ${themeClasses.boxBg} rounded-xl border ${themeClasses.border}`}>
            <h2 className={`text-2xl font-bold text-center mb-8 ${themeClasses.text}`}>
              Experience
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className={`${themeClasses.boxBg} p-6 rounded-lg border ${themeClasses.border}`}>
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className={`text-lg font-bold ${themeClasses.text}`}>Junior Web Developer</h3>
                    <span className={`${themeClasses.accent}`}>October, 2024 - Present</span>
                  </div>
                  <p className={`${themeClasses.textSecondary} font-medium`}>VSTechWorld5</p>
                  <ul className={`${themeClasses.textSecondary} space-y-2 list-disc pl-5`}>
                    <li>Developing an online exam proctoring system using the MERN stack</li>
                    <li>Implementing real-time proctoring features</li>
                    <li>Designing a scalable backend with Node.js and MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className={`p-8 ${themeClasses.boxBg} rounded-xl border ${themeClasses.border}`}>
            <h2 className={`text-2xl font-bold text-center mb-8 ${themeClasses.text}`}>
              Certifications
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { 
                  title: 'AWS Cloud Practitioner', 
                  icon: <Cloud className="w-5 h-5" />,
                  link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/d17b8a104e1d4edc986067e550ffcfc3'
                },
                { 
                  title: 'Salesforce AI Associate', 
                  icon: <Award className="w-5 h-5" />,
                  link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=3+61XIGxcwXs15IFlt2IPjpWsMIINFD6t05CiBQoEgOArEzdwRovwGN3mQ9pXbLv'
                },
                { 
                  title: 'Red Hat Certified', 
                  icon: <BookOpen className="w-5 h-5" />,
                  link: 'https://www.credly.com/badges/1ecd2be8-954e-47ab-8a0d-2baffb44ac79/public_url'
                },
              ].map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-4 p-6 ${themeClasses.boxBg} rounded-lg border ${themeClasses.border} ${themeClasses.hover} group`}
                >
                  <span className={`${themeClasses.accent} group-hover:scale-110 transition-transform`}>{cert.icon}</span>
                  <span className={`${themeClasses.text} text-lg`}>{cert.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className={`p-8 ${themeClasses.boxBg} rounded-xl border ${themeClasses.border}`}>
            <h2 className={`text-2xl font-bold text-center mb-8 ${themeClasses.text}`}>
              Contact Me
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Phone className="w-5 h-5" />, text: '9390365253', href: 'tel:9390365253' },
                { icon: <Mail className="w-5 h-5" />, text: 'pravignareddy@gmail.com', href: 'mailto:pravignareddy@gmail.com' },
                { icon: <Linkedin className="w-5 h-5" />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/thippareddy-sai-pravigna-6b542428b/' },
                { icon: <Github className="w-5 h-5" />, text: 'GitHub', href: 'https://github.com/TSaiPravigna' },
              ].map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 p-6 ${themeClasses.boxBg} rounded-lg border ${themeClasses.border} ${themeClasses.hover} group`}
                >
                  <span className={`${themeClasses.accent} group-hover:scale-110 transition-transform`}>{contact.icon}</span>
                  <span className={`${themeClasses.text} hidden md:inline text-sm truncate`}>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
