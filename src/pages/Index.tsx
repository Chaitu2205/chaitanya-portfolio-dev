import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Download, Code, Database, Brain, Award, GraduationCap, Briefcase, ExternalLink, Send, Menu, X } from "lucide-react";
import profileImage from "@/assets/chaitu.jpg";

// Initialize EmailJS with your public key
emailjs.init('fmqSq1Fhb8otDC7b2');
const Index = () => {
  const {
    toast
  } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
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
      // Send email using EmailJS
      const result = await emailjs.send('service_uzphdkm',
      // Your service ID
      'template_bqgpqss',
      // Your template ID
      {
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

      // Clear form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
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
    element?.scrollIntoView({
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };
  const navItems = [{
    id: "home",
    label: "Home"
  }, {
    id: "about",
    label: "About"
  }, {
    id: "education",
    label: "Education"
  }, {
    id: "experience",
    label: "Experience"
  }, {
    id: "skills",
    label: "Skills"
  }, {
    id: "projects",
    label: "Projects"
  }, {
    id: "achievements",
    label: "Achievements"
  }, {
    id: "resume",
    label: "Resume"
  }, {
    id: "contact",
    label: "Contact"
  }];
  const skills = {
    "Programming": ["Python", "C", "SQL", "HTML", "CSS"],
    "Data Science & Analytics": ["Data cleaning", "Exploratory data analysis (EDA)", "Data visualization", "Statistical analysis"],
    "Machine Learning & AI": ["Classification models", "CNN-based deep learning", "Time-series forecasting"],
    "Tools & Libraries": ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow / Keras", "Prophet", "Jupyter Notebook", "Git / GitHub", "Visual Studio Code"],
    "Databases": ["MySQL (queries, joins, stored procedures)"],
    "Soft Skills": ["Communication", "Teamwork", "Self-learning", "Problem-solving", "Project execution", "Team Lead experience in hackathon settings"]
  };
  const projects = [{
    title: "Pulmonary Cancer Prediction System",
    description: "Developed a machine-learning model to predict lung cancer risk using patient health and lifestyle factors. Implemented data preprocessing, feature selection, and classification algorithms with a focus on improving recall to reduce false negatives.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    note: "Designed for early risk screening support"
  }, {
    title: "Time-Series Forecasting Model (Prophet)",
    description: "Built a time-series forecasting model to predict future values from historical data. Cleaned and prepared datasets, tuned Prophet parameters, and evaluated results using metrics like RMSE and MAE to improve prediction accuracy.",
    tech: ["Python", "Facebook Prophet", "Pandas", "Matplotlib"]
  }, {
    title: "Skin Cancer Detection Using CNN",
    description: "Built a deep learning model using Convolutional Neural Networks (CNN) to classify skin lesions as benign or malignant. Used data augmentation and an optimized CNN architecture to enhance accuracy and robustness.",
    tech: ["Python", "TensorFlow/Keras", "OpenCV"]
  }, {
    title: "MD Chinese Restaurant – Billing & Management System",
    description: "Developed a mini-project that automates restaurant menu management, order processing, and bill generation. Integrated Python with MySQL to store orders, update prices, and handle transaction records using a simple, user-friendly console interface.",
    tech: ["Python", "MySQL", "mysql-connector", "SQL Queries"]
  }];
  return <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gradient">SC</h2>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                  {item.label}
                </button>)}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-3 animate-slide-up">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left py-2 text-foreground/70 hover:text-primary transition-colors">
                  {item.label}
                </button>)}
            </div>}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen pt-24 pb-20 px-4 overflow-hidden noise-overlay">
        {/* Enhanced Grid Background */}
        <div className="absolute inset-0 hero-grid-enhanced"></div>
        
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Primary Orb */}
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[120px] animate-glow-pulse"
            style={{ background: 'radial-gradient(circle, hsla(38, 92%, 58%, 0.25) 0%, transparent 70%)' }}></div>
          
          {/* Secondary Orb */}
          <div className="absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full blur-[140px] animate-glow-pulse"
            style={{ background: 'radial-gradient(circle, hsla(186, 70%, 48%, 0.2) 0%, transparent 70%)', animationDelay: '2s' }}></div>
          
          {/* Center Morphing Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] animate-morph opacity-30"
            style={{ background: 'radial-gradient(ellipse, hsla(38, 92%, 58%, 0.1) 0%, transparent 60%)' }}></div>
          
          {/* Accent Glow */}
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] animate-glow-pulse"
            style={{ background: 'radial-gradient(circle, hsla(186, 60%, 38%, 0.15) 0%, transparent 70%)', animationDelay: '1s' }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-particle"
              style={{
                width: `${4 + (i % 3) * 2}px`,
                height: `${4 + (i % 3) * 2}px`,
                left: `${10 + (i * 8)}%`,
                top: `${20 + (i * 5) % 60}%`,
                background: i % 2 === 0 
                  ? 'hsl(38, 92%, 58%)' 
                  : 'hsl(186, 70%, 48%)',
                opacity: 0.4 + (i % 4) * 0.15,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + (i % 3)}s`,
              }}
            />
          ))}
        </div>

        {/* Geometric Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Ring */}
          <div className="absolute top-20 right-[5%] w-32 h-32 border-2 border-primary/10 rounded-full animate-spin-slow hidden lg:block"></div>
          
          {/* Orbiting Elements */}
          <div className="absolute top-1/3 left-[8%] hidden md:block">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border border-dashed border-primary/20 rounded-full"></div>
              <div className="absolute w-3 h-3 bg-primary rounded-full animate-orbit" style={{ '--orbit-radius': '48px' } as React.CSSProperties}></div>
            </div>
          </div>
          
          {/* Floating Squares */}
          <div className="absolute top-[15%] right-[15%] w-16 h-16 border border-secondary/20 rotate-45 animate-float hidden lg:block"></div>
          <div className="absolute bottom-[25%] left-[3%] w-10 h-10 border border-accent/15 rotate-12 animate-float-delayed hidden md:block"></div>
          
          {/* Gradient Lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
          <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-secondary/10 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 flex items-center min-h-[calc(100vh-6rem)]">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              {/* Status Badge */}
              <div className="opacity-0 animate-reveal-up stagger-1">
                <div className="inline-flex items-center gap-3 px-6 py-3 glass-premium rounded-full shadow-lg">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 pulse-ring"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-foreground/90 tracking-wide">Open to Opportunities</span>
                  <span className="w-px h-4 bg-border"></span>
                  <span className="text-xs text-primary font-medium">2026 Grad</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6 opacity-0 animate-reveal-up stagger-2">
                <p className="text-lg md:text-xl font-medium text-muted-foreground tracking-wide">
                  👋 Hello, I'm
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight">
                  <span className="text-gradient-aurora text-shadow-glow">Chaitanya</span>
                </h1>
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="h-1.5 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-shimmer"
                    style={{ backgroundSize: '200% 100%' }}></div>
                  <p className="text-xl md:text-2xl font-semibold text-foreground/80">
                    Data Science Enthusiast
                  </p>
                </div>
              </div>
              
              {/* Description with Typing Effect */}
              <div className="opacity-0 animate-reveal-up stagger-3">
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Final-year B.Tech CSE student specializing in{' '}
                  <span className="text-primary font-bold">Python</span>,{' '}
                  <span className="text-secondary font-bold">Machine Learning</span>, and{' '}
                  <span className="text-accent font-bold">Data Analytics</span>.
                  <br />
                  <span className="text-foreground/50">Turning complex data into actionable insights.</span>
                </p>
              </div>

              {/* Enhanced Stats Row */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start opacity-0 animate-reveal-up stagger-4">
                {[
                  { value: '4+', label: 'Projects', color: 'primary' },
                  { value: '200+', label: 'Problems Solved', color: 'secondary' },
                  { value: '7.5', label: 'CGPA', color: 'accent' },
                ].map((stat, i) => (
                  <div key={stat.label} className="group relative">
                    <div className={`absolute inset-0 bg-${stat.color}/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative glass rounded-2xl px-6 py-4 hover:scale-105 transition-transform duration-300">
                      <div className={`text-3xl md:text-4xl font-bold text-${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-reveal-up stagger-5">
                <Button 
                  size="lg" 
                  className="relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-secondary text-primary-foreground font-bold px-10 py-7 text-base shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 rounded-2xl"
                  onClick={() => scrollToSection("projects")}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Explore My Work
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glass-premium border-2 border-foreground/10 hover:border-secondary/50 font-bold px-10 py-7 text-base transition-all duration-500 group rounded-2xl hover:bg-secondary/10"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Let's Connect
                </Button>
              </div>

              {/* Social/Quick Links */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start opacity-0 animate-reveal-up stagger-6">
                {[
                  { href: 'mailto:chaitanyababu0017@gmail.com', icon: Mail, label: 'Email', color: 'primary' },
                  { href: 'tel:+919948087894', icon: Phone, label: 'Call', color: 'secondary' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`flex items-center gap-2 px-5 py-2.5 glass rounded-full hover:bg-${link.color}/10 transition-all duration-300 group hover:scale-105`}
                  >
                    <link.icon className={`w-4 h-4 text-${link.color}`} />
                    <span className="text-sm text-foreground/70 group-hover:text-foreground font-medium transition-colors">{link.label}</span>
                  </a>
                ))}
                <div className="flex items-center gap-2 px-5 py-2.5 glass rounded-full">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm text-foreground/70 font-medium">Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Right Content - Premium Profile Card */}
            <div className="flex-shrink-0 opacity-0 animate-reveal-up stagger-3">
              <div className="relative card-3d">
                {/* Multi-layer Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-[2.5rem] blur-2xl opacity-30 animate-pulse-glow"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-[2.5rem] blur-xl opacity-20 animate-glow"></div>
                
                {/* Main Card */}
                <div className="relative w-80 h-[480px] md:w-96 md:h-[520px] glass-premium rounded-[2.5rem] overflow-hidden gradient-border gradient-border-animated shadow-2xl">
                  {/* Animated Top Gradient */}
                  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/25 via-secondary/10 to-transparent"></div>
                  
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-4 left-4 w-20 h-20 border border-foreground rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-16 h-16 border border-foreground rotate-45"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-10 text-center">
                    {/* Profile Image with Premium Ring */}
                    <div className="relative mb-8 group">
                      {/* Outer Gradient Ring */}
                      <div className="absolute -inset-3 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-spin-slow opacity-70 blur-sm"></div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
                      
                      {/* Image Container */}
                      <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-500">
                        <img src={profileImage} alt="Chaitanya" className="w-full h-full object-cover" />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    
                    {/* Name & Title */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-shine">Chaitanya</h3>
                    <p className="text-lg text-primary font-semibold mb-1">Data Scientist</p>
                    <p className="text-sm text-muted-foreground mb-8">B.Tech CSE (Data Science)</p>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {[
                        { name: 'Python', color: 'primary' },
                        { name: 'ML', color: 'secondary' },
                        { name: 'AI', color: 'accent' },
                        { name: 'SQL', color: 'primary' },
                      ].map((skill) => (
                        <span 
                          key={skill.name}
                          className={`px-5 py-2 bg-${skill.color}/15 text-${skill.color} rounded-full text-sm font-bold border border-${skill.color}/25 hover:scale-110 transition-transform duration-300 cursor-default`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Floating Badge */}
                <div className="absolute -bottom-4 -right-4 px-5 py-3 glass-premium border-2 border-emerald-500/40 rounded-2xl shadow-2xl animate-bounce-subtle">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm font-bold text-foreground">Open to Work</span>
                  </div>
                </div>

                {/* Decorative Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-primary/25 rounded-2xl rotate-12 animate-float hidden md:block"></div>
                <div className="absolute -bottom-10 -left-6 w-10 h-10 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full animate-float hidden md:block" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -right-10 w-8 h-8 border border-accent/20 rotate-45 animate-float-delayed hidden lg:block"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <button 
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium group-hover:tracking-[0.3em] transition-all">Scroll Down</span>
            <div className="w-7 h-12 border-2 border-muted-foreground/30 group-hover:border-primary/50 rounded-full flex justify-center pt-3 transition-colors">
              <div className="w-1.5 h-3 bg-muted-foreground/50 group-hover:bg-primary rounded-full animate-bounce"></div>
            </div>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-4 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 hero-grid opacity-50"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-glow-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-scale-in">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-sm font-medium text-foreground/80">Get to know me</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              About <span className="text-gradient-shine">Me</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Card */}
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-20"></div>
                <Card className="relative glass-strong border-0 shadow-2xl">
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">Who I Am</h3>
                        <p className="text-sm text-muted-foreground">Data Science Enthusiast</p>
                      </div>
                    </div>
                    
                    <p className="text-lg leading-relaxed text-foreground/85 mb-6">
                      I am a final-year B.Tech CSE (Data Science) student passionate about building practical solutions 
                      using <span className="font-semibold text-primary">Python</span>, <span className="font-semibold text-secondary">SQL</span>, and <span className="font-semibold text-accent">Machine Learning</span>.
                    </p>
                    
                    <p className="text-base leading-relaxed text-foreground/70">
                      I enjoy working on real-world projects that challenge my problem-solving skills. I'm actively seeking 
                      opportunities to apply my knowledge and contribute to impactful technology-driven work.
                    </p>
                    
                    {/* Mini Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border/50">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">4+</div>
                        <div className="text-xs text-muted-foreground">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">200+</div>
                        <div className="text-xs text-muted-foreground">Problems</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">7.5</div>
                        <div className="text-xs text-muted-foreground">CGPA</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Side - Highlight Cards */}
            <div className="space-y-5 animate-slide-in-right">
              {[
                { icon: Code, title: "Problem Solver", desc: "Tackling complex challenges with creative technical solutions", color: "primary" },
                { icon: Brain, title: "Continuous Learner", desc: "Always exploring new technologies and methodologies", color: "secondary" },
                { icon: Award, title: "Team Player", desc: "Collaborating effectively to achieve common goals", color: "accent" }
              ].map((item, idx) => (
                <div 
                  key={item.title}
                  className="group relative"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color === 'primary' ? 'from-primary/50 to-primary/20' : item.color === 'secondary' ? 'from-secondary/50 to-secondary/20' : 'from-accent/50 to-accent/20'} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <Card className="relative glass border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${item.color === 'primary' ? 'bg-primary/15' : item.color === 'secondary' ? 'bg-secondary/15' : 'bg-accent/15'}`}>
                        <item.icon className={`w-7 h-7 ${item.color === 'primary' ? 'text-primary' : item.color === 'secondary' ? 'text-secondary' : 'text-accent'}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-sm text-foreground/70">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Edu<span className="text-gradient">cation</span>
              </h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {/* Bachelor's Degree */}
              <div className="relative animate-slide-up">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0">
                    <div className="inline-block md:block">
                      <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold text-sm shadow-lg">
                        2022 – 2026
                      </span>
                    </div>
                  </div>
                  <Card className="border-2 border-primary/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group relative">
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute -left-[42px] top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform"></div>
                    
                    <CardHeader className="bg-gradient-to-br from-primary/10 to-transparent">
                      <CardTitle className="text-xl md:text-2xl">Bachelor of Technology in CSE (Data Science)</CardTitle>
                      <CardDescription className="text-base flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                        <span>Dadi Institute of Engineering and Technology (DIET), Anakapalle, Andhra Pradesh</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-2">
                        <div className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg font-medium text-sm">
                          Current CGPA: 7.45
                        </div>
                        <div className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium">
                          In Progress
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Intermediate */}
              <div className="relative animate-slide-up" style={{
              animationDelay: '0.1s'
            }}>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:col-start-2 mb-4 md:mb-0">
                    <div className="inline-block">
                      <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full font-semibold text-sm shadow-lg">
                        2020 – 2022
                      </span>
                    </div>
                  </div>
                  <Card className="border-2 border-secondary/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group relative md:col-start-1 md:row-start-1">
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute -right-[42px] top-8 w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform"></div>
                    
                    <CardHeader className="bg-gradient-to-bl from-secondary/10 to-transparent">
                      <CardTitle className="text-xl md:text-2xl">Intermediate (Board of Intermediate Education, A.P.)</CardTitle>
                      <CardDescription className="text-base flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                        <span>Sri Chaitanya Junior College, Gajuwaka, Visakhapatnam</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg font-medium text-sm inline-block">
                        Percentage: 81%
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Schooling */}
              <div className="relative animate-slide-up" style={{
              animationDelay: '0.2s'
            }}>
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-4 md:mb-0">
                    <div className="inline-block md:block">
                      <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full font-semibold text-sm shadow-lg">
                        Completed
                      </span>
                    </div>
                  </div>
                  <Card className="border-2 border-accent/30 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group relative">
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute -left-[42px] top-8 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform"></div>
                    
                    <CardHeader className="bg-gradient-to-br from-accent/10 to-transparent">
                      <CardTitle className="text-xl md:text-2xl">Schooling</CardTitle>
                      <CardDescription className="text-base flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                        <span>Life Way School, Visakhapatnam, Andhra Pradesh</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-foreground/80">
                        Completed schooling with strong foundation in mathematics and science.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-24 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30"></div>
        <div className="absolute inset-0 hero-grid opacity-30"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-scale-in">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Work History</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              My <span className="text-gradient-shine">Experience</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto"></div>
          </div>
          
          <div className="relative animate-slide-up">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-50"></div>
            
            <Card className="relative glass-strong border-0 shadow-2xl overflow-hidden">
              {/* Top Gradient Bar */}
              <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
              
              <CardHeader className="p-8 pb-0">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl mb-2">Data Science & AI Intern</CardTitle>
                      <CardDescription className="text-lg font-semibold text-secondary">DATAVALLEY</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-5 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full font-semibold shadow-lg">
                      May 2024 – June 2024
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8 pt-6">
                <div className="space-y-4">
                  {[
                    { text: "Gained hands-on experience in data science covering Python, data wrangling, EDA, statistics, machine learning, deep learning, NLP, big data, and model deployment.", color: "primary" },
                    { text: "Worked on real-world style projects and practical applications, focusing on turning raw data into meaningful insights.", color: "secondary" },
                    { text: "Got exposure to cloud computing concepts and end-to-end model workflows.", color: "accent" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group">
                      <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${item.color === 'primary' ? 'bg-primary' : item.color === 'secondary' ? 'bg-secondary' : 'bg-accent'}`}></div>
                      <p className="text-foreground/85 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
                
                {/* Skills Used */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Machine Learning", "Deep Learning", "NLP", "Data Wrangling", "EDA"].map((skill, idx) => (
                      <span key={skill} className={`px-3 py-1.5 text-xs font-medium rounded-full ${idx % 3 === 0 ? 'bg-primary/15 text-primary' : idx % 3 === 1 ? 'bg-secondary/15 text-secondary' : 'bg-accent/15 text-accent'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-4 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 hero-grid opacity-40"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-scale-in">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">What I Know</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              My <span className="text-gradient-shine">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building data-driven solutions
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => {
              const colors = ['primary', 'secondary', 'accent'];
              const color = colors[idx % 3];
              const icons: Record<string, typeof Code> = {
                "Programming": Code,
                "Data Science & Analytics": Database,
                "Machine Learning & AI": Brain,
                "Tools & Libraries": Code,
                "Databases": Database,
                "Soft Skills": Award
              };
              const Icon = icons[category] || Code;
              
              return (
                <div 
                  key={category} 
                  className="group animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${color === 'primary' ? 'from-primary/30 to-primary/10' : color === 'secondary' ? 'from-secondary/30 to-secondary/10' : 'from-accent/30 to-accent/10'} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <Card className="relative glass border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                    {/* Top Gradient Line */}
                    <div className={`h-1 ${color === 'primary' ? 'bg-gradient-to-r from-primary to-primary/50' : color === 'secondary' ? 'bg-gradient-to-r from-secondary to-secondary/50' : 'bg-gradient-to-r from-accent to-accent/50'} rounded-t-lg`}></div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${color === 'primary' ? 'bg-primary/15' : color === 'secondary' ? 'bg-secondary/15' : 'bg-accent/15'}`}>
                          <Icon className={`w-6 h-6 ${color === 'primary' ? 'text-primary' : color === 'secondary' ? 'text-secondary' : 'text-accent'}`} />
                        </div>
                        <span className="group-hover:text-primary transition-colors">{category}</span>
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-2">
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill, skillIdx) => (
                          <span 
                            key={skill} 
                            className={`px-3 py-1.5 text-xs rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                              skillIdx % 3 === 0 ? "bg-primary/10 text-primary hover:bg-primary/20" : 
                              skillIdx % 3 === 1 ? "bg-secondary/10 text-secondary hover:bg-secondary/20" : 
                              "bg-accent/10 text-accent hover:bg-accent/20"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* Skill Count */}
                      <div className="mt-4 pt-4 border-t border-border/30 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {items.length} {items.length === 1 ? 'skill' : 'skills'}
                        </span>
                        <div className="flex gap-1">
                          {[...Array(Math.min(items.length, 5))].map((_, i) => (
                            <div key={i} className={`w-1.5 h-1.5 rounded-full ${color === 'primary' ? 'bg-primary/40' : color === 'secondary' ? 'bg-secondary/40' : 'bg-accent/40'}`}></div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30"></div>
        <div className="absolute inset-0 hero-grid opacity-30"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse"></div>
          <div className="absolute bottom-40 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-scale-in">
              <ExternalLink className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              My <span className="text-gradient-shine">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world applications showcasing data science and machine learning expertise
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <Card className="relative glass-strong border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden h-full">
                  {/* Top Gradient Bar */}
                  <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                  
                  {/* Project Number */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                    0{index + 1}
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl md:text-2xl pr-20 group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-5">
                    <p className="text-foreground/75 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {project.note && (
                      <div className="flex items-start gap-3 p-4 bg-secondary/5 border-l-4 border-secondary rounded-r-xl">
                        <ExternalLink className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-secondary font-medium">{project.note}</p>
                      </div>
                    )}
                    
                    <div className="pt-4 border-t border-border/30">
                      <p className="text-xs font-semibold mb-3 text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIdx) => (
                          <span 
                            key={tech} 
                            className={`px-3 py-1.5 text-xs rounded-full font-medium border transition-all duration-300 hover:scale-105 ${
                              techIdx % 3 === 0 ? "bg-primary/10 text-primary border-primary/20" : 
                              techIdx % 3 === 1 ? "bg-secondary/10 text-secondary border-secondary/20" : 
                              "bg-accent/10 text-accent border-accent/20"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-24 px-4 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 hero-grid opacity-40"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-glow-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-scale-in">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Milestones</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              My <span className="text-gradient-shine">Achievements</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Milestones that define my journey in technology and leadership
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, label: "LEADERSHIP", color: "primary", title: "Team Lead at Samsung Hackathon", desc: 'developed "Medi Predict" — an AI model for lung disease detection reported with around', highlight: "90% accuracy" },
              { icon: Code, label: "PROBLEM SOLVING", color: "secondary", title: "200+ problems", desc: "on competitive coding platforms like CodeChef, with notable performance on LeetCode and HackerRank.", highlight: null, prefix: "Solved " },
              { icon: Award, label: "COMMUNITY", color: "accent", title: "Volunteered at Vizag Navy Marathon", desc: "contributing to event coordination and demonstrating communication, teamwork, and quick problem-solving.", highlight: null }
            ].map((achievement, idx) => (
              <div 
                key={idx}
                className="group animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.color === 'primary' ? 'from-primary/30 to-primary/10' : achievement.color === 'secondary' ? 'from-secondary/30 to-secondary/10' : 'from-accent/30 to-accent/10'} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <Card className="relative glass border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full overflow-hidden">
                  {/* Top Gradient */}
                  <div className={`h-1.5 ${achievement.color === 'primary' ? 'bg-gradient-to-r from-primary to-primary/50' : achievement.color === 'secondary' ? 'bg-gradient-to-r from-secondary to-secondary/50' : 'bg-gradient-to-r from-accent to-accent/50'}`}></div>
                  
                  <CardContent className="pt-8 pb-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110 ${achievement.color === 'primary' ? 'bg-gradient-to-br from-primary to-primary/60' : achievement.color === 'secondary' ? 'bg-gradient-to-br from-secondary to-secondary/60' : 'bg-gradient-to-br from-accent to-accent/60'}`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Badge */}
                    <div className="mb-4">
                      <span className={`px-3 py-1.5 text-xs font-bold rounded-full ${achievement.color === 'primary' ? 'bg-primary/10 text-primary' : achievement.color === 'secondary' ? 'bg-secondary/10 text-secondary' : 'bg-accent/10 text-accent'}`}>
                        {achievement.label}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-foreground/85 leading-relaxed">
                      {achievement.prefix && <span>{achievement.prefix}</span>}
                      <span className={`font-bold ${achievement.color === 'primary' ? 'text-primary' : achievement.color === 'secondary' ? 'text-secondary' : 'text-accent'}`}>{achievement.title}</span>
                      {achievement.desc && <span>, {achievement.desc}</span>}
                      {achievement.highlight && <span className={`font-semibold ${achievement.color === 'primary' ? 'text-primary' : achievement.color === 'secondary' ? 'text-secondary' : 'text-accent'}`}> {achievement.highlight}</span>}
                      {achievement.highlight && "."}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="relative py-24 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="absolute inset-0 hero-grid opacity-30"></div>
        
        {/* Animated Orb */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-[150px] animate-morph"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-scale-in">
              <Download className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Download</span>
            </div>
            
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-lg opacity-40 animate-glow"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-2xl">
                <Download className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              My <span className="text-gradient-shine">Resume</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download my resume to learn more about my qualifications, experience, and technical expertise
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <Button size="lg" className="relative bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold shadow-xl px-10 py-6 text-base" asChild>
                <a href="/Res_Chaitu.pdf" download="Srigakolapu_Chaitanya_Resume.pdf">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-muted-foreground font-medium">Updated Recently</span>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {[
              { value: "PDF", label: "Format", color: "primary" },
              { value: "1", label: "Page", color: "secondary" },
              { value: "2026", label: "Version", color: "accent" }
            ].map((item) => (
              <div key={item.label} className="group">
                <div className="p-6 glass rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`text-3xl font-bold mb-1 ${item.color === 'primary' ? 'text-primary' : item.color === 'secondary' ? 'text-secondary' : 'text-accent'}`}>{item.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 hero-grid opacity-40"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-scale-in">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              Contact <span className="text-gradient-shine">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feel free to reach out for internships, collaboration, or project opportunities
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-in-left">
              {/* Contact Card */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-50"></div>
                <Card className="relative glass-strong border-0 shadow-xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xl">Let's Connect</span>
                        <p className="text-sm text-muted-foreground font-normal">I'd love to hear from you</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-4">
                    {[
                      { icon: Mail, label: "Email", value: "chaitanyababu0017@gmail.com", href: "mailto:chaitanyababu0017@gmail.com", color: "primary" },
                      { icon: Phone, label: "Phone", value: "+91 9948087894", href: "tel:+919948087894", color: "secondary" },
                      { icon: MapPin, label: "Location", value: "Andhra Pradesh, India", href: null, color: "accent" }
                    ].map((contact) => (
                      <div key={contact.label} className="group">
                        {contact.href ? (
                          <a href={contact.href} className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${contact.color === 'primary' ? 'bg-primary/15' : contact.color === 'secondary' ? 'bg-secondary/15' : 'bg-accent/15'}`}>
                              <contact.icon className={`w-6 h-6 ${contact.color === 'primary' ? 'text-primary' : contact.color === 'secondary' ? 'text-secondary' : 'text-accent'}`} />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{contact.label}</p>
                              <p className={`font-medium group-hover:${contact.color === 'primary' ? 'text-primary' : contact.color === 'secondary' ? 'text-secondary' : 'text-accent'} transition-colors`}>{contact.value}</p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${contact.color === 'primary' ? 'bg-primary/15' : contact.color === 'secondary' ? 'bg-secondary/15' : 'bg-accent/15'}`}>
                              <contact.icon className={`w-6 h-6 ${contact.color === 'primary' ? 'text-primary' : contact.color === 'secondary' ? 'text-secondary' : 'text-accent'}`} />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{contact.label}</p>
                              <p className="font-medium">{contact.value}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Response Badge */}
              <div className="p-6 glass rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="font-bold text-lg">Usually responds within 24 hours</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'm actively looking for opportunities and excited to discuss how I can contribute to your team!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl blur opacity-50"></div>
                <Card className="relative glass-strong border-0 shadow-xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center shadow-lg">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xl">Send a Message</span>
                        <p className="text-sm text-muted-foreground font-normal">I'll get back to you soon</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <Label htmlFor="name" className="text-sm font-semibold">Your Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Enter your name" 
                          value={formData.name} 
                          onChange={e => setFormData({ ...formData, name: e.target.value })} 
                          required 
                          className="mt-2 bg-muted/30 border-border/50 focus:border-primary transition-colors" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold">Your Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your.email@example.com" 
                          value={formData.email} 
                          onChange={e => setFormData({ ...formData, email: e.target.value })} 
                          required 
                          className="mt-2 bg-muted/30 border-border/50 focus:border-primary transition-colors" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-sm font-semibold">Your Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell me about your project or opportunity..." 
                          value={formData.message} 
                          onChange={e => setFormData({ ...formData, message: e.target.value })} 
                          required 
                          className="mt-2 bg-muted/30 border-border/50 focus:border-primary transition-colors resize-none" 
                          rows={5} 
                        />
                      </div>
                      <div className="relative group pt-2">
                        <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <Button 
                          type="submit" 
                          disabled={isSubmitting} 
                          className="relative w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-semibold shadow-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="mr-2 animate-spin">⏳</span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-background"></div>
        <div className="absolute inset-0 hero-grid opacity-20"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center gap-6">
            {/* Logo */}
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-2xl font-bold text-white">SC</span>
            </div>
            
            {/* Name */}
            <h3 className="text-xl font-bold">
              <span className="text-gradient-shine">Srigakolapu Chaitanya</span>
            </h3>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {["About", "Education", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            
            {/* Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © 2025 Srigakolapu Chaitanya. Built with passion and code.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;