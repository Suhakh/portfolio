import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Download, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter,
  Coffee,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentProject, setCurrentProject] = useState(0);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const projects = [
    {
      title: "AI-Powered Healthcare Analytics",
      description: "Machine learning pipeline for predicting patient outcomes using clinical data and advanced feature engineering.",
      thumbnail: "https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com"
    },
    {
      title: "Computer Vision for Manufacturing",
      description: "Real-time defect detection system using CNNs and OpenCV for quality control in production lines.",
      thumbnail: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com"
    },
    {
      title: "NLP Document Processing",
      description: "Automated document classification and information extraction using transformer models and LangChain.",
      thumbnail: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com"
    },
    {
      title: "MLOps Pipeline Automation",
      description: "End-to-end ML pipeline with automated training, validation, and deployment using MLflow and Kubernetes.",
      thumbnail: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com"
    },
    {
      title: "Generative AI Chatbot",
      description: "Intelligent conversational AI system built with Hugging Face transformers and deployed on Azure.",
      thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      github: "https://github.com"
    }
  ];

  const skills = [
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'Python', icon: '🐍' },
    { name: 'C++', icon: '⚡' },
    { name: 'Apache Airflow', icon: '🌊' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'Azure', icon: '☁️' },
    { name: 'Hugging Face', icon: '🤗' },
    { name: 'SQL', icon: '🗃️' },
    { name: 'MLflow', icon: '📊' },
    { name: 'AWS', icon: '🚀' },
    { name: 'OpenCV', icon: '👁️' },
    { name: 'LangChain', icon: '🔗' },
    { name: 'n8n', icon: '🔄' }
  ];

  const certifications = [
    "MLOps Tools: MLflow and Hugging Face",
    "Structuring Machine Learning Projects",
    "Image and Video Processing",
    "Introduction to Image Processing",
    "Generative AI Fundamentals",
    "Convolutional Neural Networks",
    "Sequence Models",
    "Neural Networks and Deep Learning",
    "Effective Problem-Solving and Decision-Making",
    "Microsoft Azure Cloud Services",
    "Introduction to Applied Machine Learning"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'publications', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900 font-['Inter',sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white"
            >
              Suha Abualoul
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                    activeSection === item.toLowerCase() ? 'text-gray-900' : 'text-gray-500'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="text-center z-10 px-6"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Suha Abualoul
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto"
          >
            AI/ML Engineer | GenAI | Data Scientist
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/30 transition-colors shadow-lg hover:shadow-xl border border-white/20"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Suha Abualoul"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                AI Engineer based in Istanbul and Saudi Arabia, with hands-on experience across the full machine learning lifecycle. From data preparation and model development to deployment and monitoring in production. Focused on AI solutions that create real-world impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Education</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of AI Engineering</h3>
              <p className="text-lg text-gray-600 mb-2">Bahçeşehir University, Istanbul</p>
              <p className="text-gray-500 font-medium">Graduated with Honours</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-medium text-gray-900 text-sm">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          </motion.div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
                    >
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        <img 
                          src={project.thumbnail} 
                          alt={project.title}
                          className="w-full md:w-64 h-48 object-cover rounded-xl"
                        />
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                          <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View on GitHub
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject ? 'bg-gray-900' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Publications</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Predicting T2D from Vocal Features
              </h3>
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
              >
                In Progress
              </motion.span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certifications</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <img 
                    src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Certificate"
                    className="w-10 h-10 object-cover rounded"
                  />
                </div>
                <h3 className="font-medium text-gray-900 text-sm leading-relaxed">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <Mail className="w-8 h-8 text-gray-700 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">suha@example.com</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <Phone className="w-8 h-8 text-gray-700 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+90 XXX XXX XXXX</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <Coffee className="w-8 h-8 text-gray-700 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Coffee Chats</h3>
                <p className="text-gray-600 text-sm">Let's discuss AI, technology, or collaborate over a virtual coffee! ☕</p>
              </motion.div>
            </div>
            
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Twitter, href: "https://twitter.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <social.icon className="w-6 h-6 text-gray-700" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center">
        <p className="text-sm">
          Made with 🤍 and lotssss of ☕☕☕☕
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;