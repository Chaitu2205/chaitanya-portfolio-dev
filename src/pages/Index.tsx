import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Download, Code, Database, Brain, Award, GraduationCap, Briefcase, ExternalLink, Send, Menu, X, ChevronDown, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/chaitu.jpg";

// Initialize EmailJS with your public key
emailjs.init('fmqSq1Fhb8otDC7b2');

const Index = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name.trim().length < 2) {
      toast({
        title: "Invalid Name",
        description: "Please enter a valid name (at least 2 characters)",
        variant: "destructive"
      });
      return;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    if (formData.message.trim().length < 10) {
      toast({
        title: "Message Too Short",
        description: "Please write a message with at least 10 characters",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    try {
      const result = await emailjs.send('service_uzphdkm', 'template_bqgpqss', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'chaitanyababu0017@gmail.com'
      });
      console.log('Email sent successfully:', result);
      toast({
        title: "Message Sent Successfully! ✓",
        description: "Thank you for reaching out. I'll get back to you within 24 hours!"
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try emailing me directly at chaitanyababu0017@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "education", label: "EDUCATION" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "achievements", label: "ACHIEVEMENTS" },
    { id: "contact", label: "CONTACT" }
  ];

  const skills = {
    "Programming": ["Python", "C", "SQL", "HTML", "CSS"],
    "Data Science & Analytics": ["Data cleaning", "Exploratory data analysis (EDA)", "Data visualization", "Statistical analysis"],
    "Machine Learning & AI": ["Classification models", "CNN-based deep learning", "Time-series forecasting"],
    "Tools & Libraries": ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow / Keras", "Prophet", "Jupyter Notebook", "Git / GitHub", "Visual Studio Code"],
    "Databases": ["MySQL (queries, joins, stored procedures)"],
    "Soft Skills": ["Communication", "Teamwork", "Self-learning", "Problem-solving", "Project execution", "Team Lead experience"]
  };

  const projects = [
    {
      title: "Pulmonary Cancer Prediction System",
      description: "Developed a machine-learning model to predict lung cancer risk using patient health and lifestyle factors. Implemented data preprocessing, feature selection, and classification algorithms with a focus on improving recall to reduce false negatives.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      note: "Designed for early risk screening support"
    },
    {
      title: "Time-Series Forecasting Model (Prophet)",
      description: "Built a time-series forecasting model to predict future values from historical data. Cleaned and prepared datasets, tuned Prophet parameters, and evaluated results using metrics like RMSE and MAE.",
      tech: ["Python", "Facebook Prophet", "Pandas", "Matplotlib"]
    },
    {
      title: "Skin Cancer Detection Using CNN",
      description: "Built a deep learning model using Convolutional Neural Networks (CNN) to classify skin lesions as benign or malignant. Used data augmentation and an optimized CNN architecture.",
      tech: ["Python", "TensorFlow/Keras", "OpenCV"]
    },
    {
      title: "MD Chinese Restaurant – Billing System",
      description: "Developed a mini-project that automates restaurant menu management, order processing, and bill generation. Integrated Python with MySQL to store orders and handle transaction records.",
      tech: ["Python", "MySQL", "mysql-connector", "SQL Queries"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-dark z-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => scrollToSection("home")} className="text-2xl font-bold tracking-widest">
              SC<span className="text-muted-foreground">.</span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map(item => (
                <button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)} 
                  className="text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-border/30 space-y-4 animate-fade-in">
              {navItems.map(item => (
                <button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)} 
                  className="block w-full text-left py-3 text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center diagonal-line">
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 hidden lg:block">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover object-center"
              style={{ filter: 'grayscale(100%) contrast(1.1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
          <div className="max-w-3xl">
            {/* Greeting */}
            <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in stagger-1">
              <span className="w-16 h-px bg-foreground/30" />
              <span className="text-sm tracking-widest text-muted-foreground">Hey there!</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 opacity-0 animate-slide-up stagger-2">
              I'M <span className="text-gradient">CHAITANYA</span>
            </h1>

            {/* Roles */}
            <div className="flex items-center gap-4 mb-10 opacity-0 animate-fade-in stagger-3">
              <span className="text-sm md:text-base tracking-[0.3em] text-muted-foreground">
                DATA SCIENTIST
              </span>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm md:text-base tracking-[0.3em] text-muted-foreground">
                ML ENGINEER
              </span>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm md:text-base tracking-[0.3em] text-muted-foreground">
                DEVELOPER
              </span>
            </div>

            {/* CTA Button */}
            <div className="opacity-0 animate-fade-in stagger-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="border border-foreground/20 bg-transparent hover:bg-foreground hover:text-background text-foreground px-8 py-6 text-sm tracking-widest transition-all duration-300"
              >
                CONTACT ME
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links - Left Side */}
        <div className="absolute left-6 bottom-12 hidden lg:flex flex-col items-center gap-4 opacity-0 animate-fade-in stagger-5">
          <a href="mailto:chaitanyababu0017@gmail.com" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="tel:+919948087894" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-5 h-5" />
          </a>
          <div className="w-px h-20 bg-foreground/20 mt-2" />
        </div>

        {/* Scroll Indicator - Center */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-fade-in stagger-6">
          <span className="vertical-text text-xs tracking-widest text-muted-foreground">SCROLL DOWN</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground animate-float" />
        </div>

        {/* Section Number - Right */}
        <div className="absolute right-8 bottom-8 hidden lg:block">
          <span className="text-8xl font-bold text-foreground/5">01</span>
          <span className="text-muted-foreground text-sm">/08</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6 lg:px-12 diagonal-line">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">
            <span className="text-sm tracking-widest text-muted-foreground">02</span>
            <span className="w-12 h-px bg-foreground/30" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">ABOUT ME</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8 opacity-0 animate-slide-in-left">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                I am a final-year <span className="text-foreground font-medium">B.Tech CSE (Data Science)</span> student 
                passionate about building practical solutions using Python, SQL, and Machine Learning.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                I enjoy working on real-world projects that challenge my problem-solving skills. 
                I'm actively seeking opportunities to apply my knowledge and contribute to impactful technology-driven work.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
                {[
                  { value: "4+", label: "PROJECTS" },
                  { value: "200+", label: "PROBLEMS SOLVED" },
                  { value: "7.5", label: "CGPA" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                    <div className="text-xs tracking-widest text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Cards */}
            <div className="space-y-6 opacity-0 animate-slide-in-right">
              {[
                { icon: Code, title: "Problem Solver", desc: "Tackling complex challenges with creative technical solutions" },
                { icon: Brain, title: "Continuous Learner", desc: "Always exploring new technologies and methodologies" },
                { icon: Award, title: "Team Player", desc: "Collaborating effectively to achieve common goals" }
              ].map((item, idx) => (
                <div 
                  key={item.title}
                  className="group p-6 border-gradient rounded-lg hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border border-foreground/20 rounded-lg flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Number */}
        <span className="section-number hidden lg:block">02</span>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-32 px-6 lg:px-12 bg-card diagonal-line">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">
            <span className="text-sm tracking-widest text-muted-foreground">03</span>
            <span className="w-12 h-px bg-foreground/30" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">EDUCATION</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                period: "2022 – 2026",
                degree: "Bachelor of Technology in CSE (Data Science)",
                institution: "Dadi Institute of Engineering and Technology (DIET)",
                location: "Anakapalle, Andhra Pradesh",
                grade: "Current CGPA: 7.45",
                status: "In Progress"
              },
              {
                period: "2020 – 2022",
                degree: "Intermediate (Board of Intermediate Education, A.P.)",
                institution: "Sri Chaitanya Junior College",
                location: "Gajuwaka, Visakhapatnam",
                grade: "Percentage: 81%",
                status: "Completed"
              },
              {
                period: "2020",
                degree: "Secondary School Certificate (SSC)",
                institution: "Kendriya Vidyalaya Nausenabaugh",
                location: "Visakhapatnam, Andhra Pradesh",
                grade: "Percentage: 85%",
                status: "Completed"
              }
            ].map((edu, idx) => (
              <div 
                key={idx}
                className="group p-8 border-gradient rounded-lg hover-lift opacity-0 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-40 flex-shrink-0">
                    <span className="text-sm tracking-widest text-muted-foreground">{edu.period}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-muted-foreground mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-1.5 bg-foreground/5 border border-foreground/10 rounded text-sm">
                        {edu.grade}
                      </span>
                      <span className="px-4 py-1.5 bg-foreground/5 border border-foreground/10 rounded text-sm">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <span className="section-number hidden lg:block">03</span>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6 lg:px-12 diagonal-line">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">
            <span className="text-sm tracking-widest text-muted-foreground">04</span>
            <span className="w-12 h-px bg-foreground/30" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">EXPERIENCE</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                period: "2024",
                role: "Data Science Intern",
                company: "Internship Project",
                description: "Worked on real-world data analysis projects, implementing machine learning models and data visualization techniques.",
                skills: ["Python", "Data Analysis", "ML Models", "Visualization"]
              },
              {
                period: "2023",
                role: "Team Lead - Samsung Hackathon",
                company: "Samsung Innovation Campus",
                description: "Led the development of 'Medi Predict' — an AI model for lung disease detection, achieving around 90% accuracy.",
                skills: ["Leadership", "AI/ML", "Healthcare Tech", "Team Management"]
              }
            ].map((exp, idx) => (
              <div 
                key={idx}
                className="group p-8 border-gradient rounded-lg hover-lift opacity-0 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-40 flex-shrink-0">
                    <span className="text-sm tracking-widest text-muted-foreground">{exp.period}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1">{exp.role}</h3>
                    <p className="text-muted-foreground mb-4">{exp.company}</p>
                    <p className="text-muted-foreground mb-6">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 border border-foreground/20 rounded text-xs tracking-wider">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <span className="section-number hidden lg:block">04</span>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6 lg:px-12 bg-card diagonal-line">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">
            <span className="text-sm tracking-widest text-muted-foreground">05</span>
            <span className="w-12 h-px bg-foreground/30" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">SKILLS</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div 
                key={category}
                className="group p-6 border-gradient rounded-lg hover-lift opacity-0 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-4 pb-4 border-b border-border/30">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-foreground/5 border border-foreground/10 rounded text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <span className="section-number hidden lg:block">05</span>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 lg:px-12 diagonal-line">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">
            <span className="text-sm tracking-widest text-muted-foreground">06</span>
            <span className="w-12 h-px bg-foreground/30" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">PROJECTS</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative p-8 border-gradient rounded-lg hover-lift opacity-0 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Project Number */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-foreground/5">
                  0{idx + 1}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-4 pr-16">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                
                {project.note && (
                  <div className="flex items-start gap-3 p-4 bg-foreground/5 rounded mb-6">
                    <ExternalLink className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{project.note}</p>
                  </div>
                )}

                <div className="pt-4 border-t border-border/30">
                  <p className="text-xs tracking-widest text-muted-foreground mb-3">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 border border-foreground/20 rounded text-xs tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <span className="section-number hidden lg:block">06</span>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-32 px-6 lg:px-12 bg-card diagonal-line">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">
            <span className="text-sm tracking-widest text-muted-foreground">07</span>
            <span className="w-12 h-px bg-foreground/30" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">ACHIEVEMENTS</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Award, 
                label: "LEADERSHIP", 
                title: "Team Lead at Samsung Hackathon", 
                desc: "Developed 'Medi Predict' — an AI model for lung disease detection with around 90% accuracy." 
              },
              { 
                icon: Code, 
                label: "PROBLEM SOLVING", 
                title: "200+ Problems Solved", 
                desc: "On competitive coding platforms like CodeChef, with notable performance on LeetCode and HackerRank." 
              },
              { 
                icon: Award, 
                label: "COMMUNITY", 
                title: "Vizag Navy Marathon Volunteer", 
                desc: "Contributed to event coordination and demonstrated communication, teamwork, and quick problem-solving." 
              }
            ].map((achievement, idx) => (
              <div 
                key={idx}
                className="group p-8 border-gradient rounded-lg hover-lift opacity-0 animate-slide-up text-center"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 border border-foreground/20 rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <achievement.icon className="w-6 h-6" />
                </div>
                <span className="text-xs tracking-widest text-muted-foreground">{achievement.label}</span>
                <h3 className="text-lg font-semibold mt-2 mb-3">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <span className="section-number hidden lg:block">07</span>
      </section>

      {/* Resume Section */}
      <section className="relative py-32 px-6 lg:px-12 diagonal-line">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 mx-auto mb-8 border border-foreground/20 rounded-full flex items-center justify-center">
            <Download className="w-8 h-8" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">DOWNLOAD RESUME</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Get a comprehensive overview of my qualifications, experience, and technical expertise.
          </p>
          
          <Button 
            asChild
            className="border border-foreground/20 bg-transparent hover:bg-foreground hover:text-background text-foreground px-10 py-6 text-sm tracking-widest transition-all duration-300"
          >
            <a href="/Res_Chaitu.pdf" download="Srigakolapu_Chaitanya_Resume.pdf">
              DOWNLOAD PDF
            </a>
          </Button>

          <div className="flex justify-center gap-8 mt-12">
            {[
              { value: "PDF", label: "FORMAT" },
              { value: "1 PAGE", label: "LENGTH" },
              { value: "2026", label: "UPDATED" }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-bold mb-1">{item.value}</div>
                <div className="text-xs tracking-widest text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 lg:px-12 bg-card diagonal-line">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">
            <span className="text-sm tracking-widest text-muted-foreground">08</span>
            <span className="w-12 h-px bg-foreground/30" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">CONTACT</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8 opacity-0 animate-slide-in-left">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Feel free to reach out for internships, collaboration, or project opportunities. 
                I'd love to hear from you!
              </p>
              
              <div className="space-y-6 pt-8">
                {[
                  { icon: Mail, label: "EMAIL", value: "chaitanyababu0017@gmail.com", href: "mailto:chaitanyababu0017@gmail.com" },
                  { icon: Phone, label: "PHONE", value: "+91 9948087894", href: "tel:+919948087894" },
                  { icon: MapPin, label: "LOCATION", value: "Andhra Pradesh, India", href: null }
                ].map((contact) => (
                  <div key={contact.label} className="group">
                    {contact.href ? (
                      <a href={contact.href} className="flex items-center gap-4 p-4 border-gradient rounded-lg hover-lift">
                        <div className="w-12 h-12 border border-foreground/20 rounded-lg flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                          <contact.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs tracking-widest text-muted-foreground mb-1">{contact.label}</p>
                          <p className="font-medium">{contact.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 border-gradient rounded-lg">
                        <div className="w-12 h-12 border border-foreground/20 rounded-lg flex items-center justify-center">
                          <contact.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs tracking-widest text-muted-foreground mb-1">{contact.label}</p>
                          <p className="font-medium">{contact.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="opacity-0 animate-slide-in-right">
              <div className="p-8 border-gradient rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-xs tracking-widest text-muted-foreground">YOUR NAME</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      value={formData.name} 
                      onChange={e => setFormData({ ...formData, name: e.target.value })} 
                      required 
                      className="mt-2 bg-transparent border-foreground/20 focus:border-foreground transition-colors" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs tracking-widest text-muted-foreground">YOUR EMAIL</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      value={formData.email} 
                      onChange={e => setFormData({ ...formData, email: e.target.value })} 
                      required 
                      className="mt-2 bg-transparent border-foreground/20 focus:border-foreground transition-colors" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-xs tracking-widest text-muted-foreground">YOUR MESSAGE</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or opportunity..." 
                      value={formData.message} 
                      onChange={e => setFormData({ ...formData, message: e.target.value })} 
                      required 
                      className="mt-2 bg-transparent border-foreground/20 focus:border-foreground transition-colors resize-none" 
                      rows={5} 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full border border-foreground/20 bg-foreground text-background hover:bg-transparent hover:text-foreground px-10 py-6 text-sm tracking-widest transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <span className="section-number hidden lg:block">08</span>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 border-t border-border/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold tracking-widest mb-2">CHAITANYA</h3>
              <p className="text-sm text-muted-foreground">Data Scientist | ML Engineer | Developer</p>
            </div>
            
            <div className="flex items-center gap-6">
              {["ABOUT", "PROJECTS", "CONTACT"].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Srigakolapu Chaitanya. Built with passion and code.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
