import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Download, Code, Database, Brain, Award, GraduationCap, Briefcase, ExternalLink, Send, Menu, X, ChevronDown, Sparkles, Target, TrendingUp, Zap } from "lucide-react";
import profileImage from "@/assets/linkedin_profile_pic.jpeg";

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
    { id: "certifications", label: "CERTIFICATIONS" },
    { id: "achievements", label: "ACHIEVEMENTS" },
    { id: "contact", label: "CONTACT" }
  ];

  const skills = {
    "Languages": ["Python", "Java"],
    "Database": ["SQL", "MySQL"],
    "Web Technologies": ["HTML", "CSS"],
    "Developer Tools": ["Microsoft Excel", "Git / GitHub", "Visual Studio Code", "Jupyter Notebook"],
    "Data Science & ML": ["Data cleaning", "EDA", "Statistical analysis", "Machine learning", "Deep learning", "NLP", "Model deployment"],
    "Soft Skills": ["Communication", "Teamwork", "Self-learning", "Problem-solving", "Project execution", "Team Lead experience"]
  };

  interface Project {
    title: string;
    description: string;
    tech: string[];
    note?: string;
    category?: string;
    features?: string[];
    status?: string;
  }

  const projects: Project[] = [
    {
      title: "Pulmonary Cancer Prediction",
      category: "Machine Learning",
      description: "Built a lung cancer risk prediction system using patient symptom survey data and tested multiple models, including Logistic Regression, Random Forest, and a simple Neural Network. Optimized for high Recall to reduce false negatives and used LIME for clear model explainability.",
      tech: ["Python", "Pandas", "Scikit-learn", "TensorFlow/Keras", "Gradio", "LIME"],
      features: [
        "Multi-model comparison: Logistic Regression, Random Forest, Neural Network",
        "Optimized for high Recall to reduce false negatives",
        "LIME-based model explainability for transparent predictions",
        "Interactive Gradio web app for quick risk assessment"
      ],
      note: "Published a research paper on pulmonary cancer prediction using ML and deep learning techniques",
      status: "Completed"
    },
    {
      title: "Retail Sales Forecasting",
      category: "Time-Series Forecasting",
      description: "Built a retail sales forecasting model using Facebook Prophet to generate actionable business insights. Cleaned and prepared data with Pandas and evaluated model accuracy using RMSE and MAE.",
      tech: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Prophet", "Seaborn"],
      features: [
        "Sales forecasting with Facebook Prophet",
        "Data cleaning and preparation with Pandas",
        "Model evaluation using RMSE and MAE",
        "Visualized forecasts, trends, and seasonality with Matplotlib"
      ],
      status: "Completed"
    },
    {
      title: "Student Performance Management System",
      category: "Full-Stack Web Application",
      description: "Developed and deployed a full-stack Student Performance Management System using Python (Flask), MySQL/TiDB Cloud, HTML, CSS, and Render to manage student records, automate result processing, and enable efficient data retrieval.",
      tech: ["HTML", "CSS", "Python (Flask)", "MySQL", "TiDB Cloud", "Chart.js", "Render"],
      features: [
        "Student record management with CRUD operations",
        "Automated grade calculation and percentage computation",
        "Roll number-based student search",
        "Interactive performance visualization using Chart.js",
        "Cloud database integration with TiDB Cloud",
        "Deployed on Render with a responsive interface"
      ],
      status: "Completed"
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
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Mesh */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-tl from-muted/20 to-transparent rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Greeting Badge */}
              <div className="inline-flex items-center gap-3 mb-8 opacity-0 animate-fade-in stagger-1">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm tracking-widest text-muted-foreground uppercase">Available for opportunities</span>
              </div>

              {/* Main Heading */}
              <div className="mb-6 opacity-0 animate-slide-up stagger-2">
                <span className="text-lg md:text-xl tracking-widest text-muted-foreground block mb-2">Hello, I'm</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="text-gradient">CHAITANYA</span>
                </h1>
              </div>

              {/* Role with Animated Border */}
              <div className="inline-flex items-center gap-4 px-6 py-3 mb-8 glass-ultra rounded-full opacity-0 animate-fade-in stagger-3">
                <span className="text-sm md:text-base tracking-[0.2em] text-muted-foreground">
                  DATA SCIENTIST
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                <span className="text-sm md:text-base tracking-[0.2em] text-muted-foreground">
                  ML ENGINEER
                </span>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed opacity-0 animate-fade-in stagger-3">
                Crafting intelligent solutions through data science and machine learning to solve real-world problems.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in stagger-4">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-sm tracking-widest transition-all duration-300 group"
                >
                  GET IN TOUCH
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => scrollToSection("projects")}
                  variant="outline"
                  className="border-foreground/20 hover:bg-foreground/5 px-8 py-6 text-sm tracking-widest"
                >
                  VIEW WORK
                </Button>
              </div>

              {/* Social Links - Removed per user preference */}
            </div>

            {/* Right Content - Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-in stagger-2">
              <div className="relative">
                {/* Outer Glow Ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-foreground/20 via-transparent to-foreground/10 blur-xl animate-pulse-soft" />
                
                {/* Rotating Border */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-foreground/30 via-transparent to-foreground/30 animate-spin" style={{ animationDuration: '8s' }} />
                
                {/* Image Container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-foreground/10">
                  <img 
                    src={profileImage} 
                    alt="Chaitanya Srigakolapu" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                </div>

                {/* Floating Stats */}
                <div className="absolute -right-4 top-1/4 glass-ultra px-4 py-3 rounded-lg animate-float opacity-0 animate-fade-in stagger-4">
                  <div className="text-2xl font-bold">4+</div>
                  <div className="text-xs text-muted-foreground tracking-wider">PROJECTS</div>
                </div>
                
                <div className="absolute -left-4 bottom-1/4 glass-ultra px-4 py-3 rounded-lg animate-float opacity-0 animate-fade-in stagger-5" style={{ animationDelay: '0.3s' }}>
                  <div className="text-2xl font-bold">7.62</div>
                  <div className="text-xs text-muted-foreground tracking-wider">CGPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-fade-in stagger-6">
          <span className="text-xs tracking-widest text-muted-foreground">SCROLL</span>
          <div className="w-6 h-10 border border-foreground/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-foreground rounded-full animate-bounce" />
          </div>
        </div>

        {/* Section Number */}
        <div className="absolute right-8 bottom-8 hidden lg:block">
          <span className="text-8xl font-bold text-foreground/5">01</span>
          <span className="text-muted-foreground text-sm">/09</span>
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
                  { value: "3+", label: "PROJECTS" },
                  { value: "250+", label: "PROBLEMS SOLVED" },
                  { value: "7.62", label: "CGPA" }
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
      <section id="education" className="relative py-32 px-6 lg:px-12 bg-card overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02]">
          <GraduationCap className="w-full h-full" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-6">
              <span className="text-sm tracking-widest text-muted-foreground">03</span>
              <span className="w-12 h-px bg-foreground/30" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">EDUCATION</h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm tracking-widest">ACADEMIC JOURNEY</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {[
                {
                  period: "2022 – 2026",
                  degree: "Bachelor of Technology in CSE (Data Science)",
                  institution: "Dadi Institute of Engineering and Technology (DIET)",
                  location: "Anakapalle, Andhra Pradesh",
                  grade: "Current CGPA: 7.62",
                  status: "In Progress",
                  highlight: true
                },
                {
                  period: "2020 – 2022",
                  degree: "Intermediate (Board of Intermediate Education, A.P.)",
                  institution: "Sri Chaitanya Junior College",
                  location: "Gajuwaka, Visakhapatnam",
                  grade: "Percentage: 81%",
                  status: "Completed",
                  highlight: false
                },
                {
                  period: "2020",
                  degree: "Secondary School Certificate (SSC)",
                  institution: "Kendriya Vidyalaya Nausenabaugh",
                  location: "Visakhapatnam, Andhra Pradesh",
                  grade: "Percentage: 85%",
                  status: "Completed",
                  highlight: false
                }
              ].map((edu, idx) => (
                <div 
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 border-foreground/30 bg-background transform -translate-x-1/2 mt-2">
                    {edu.highlight && <div className="absolute inset-1 rounded-full bg-foreground animate-pulse" />}
                  </div>
                  
                  {/* Content Card */}
                  <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className={`group p-8 glass-ultra rounded-xl hover-lift border border-foreground/5 ${edu.highlight ? 'ring-1 ring-foreground/10' : ''}`}>
                      <span className="inline-block px-3 py-1 mb-4 text-xs tracking-widest bg-foreground/5 rounded-full">
                        {edu.period}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <div className={`flex flex-wrap gap-3 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="px-4 py-1.5 bg-foreground/5 border border-foreground/10 rounded-full text-sm font-medium">
                          {edu.grade}
                        </span>
                        <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${edu.highlight ? 'bg-foreground text-background' : 'bg-foreground/5 border border-foreground/10'}`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <span className="section-number hidden lg:block">03</span>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6 lg:px-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-6">
              <span className="text-sm tracking-widest text-muted-foreground">04</span>
              <span className="w-12 h-px bg-foreground/30" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">EXPERIENCE</h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <Briefcase className="w-5 h-5" />
              <span className="text-sm tracking-widest">WORK HISTORY</span>
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                period: "May – June 2024",
                role: "Data Science, Machine Learning & AI Intern",
                company: "DATAVALLEY",
                description: "Gained hands-on experience in data science, covering Python, data wrangling, EDA, statistics, basics of machine learning, deep learning, NLP, big data, and model deployment. Worked on hands-on projects, real-world applications, and cloud computing concepts.",
                skills: ["Python", "Data Wrangling", "EDA", "Machine Learning", "Deep Learning", "NLP", "Big Data", "Model Deployment"],
                icon: Database
              },
              {
                period: "2023",
                role: "Team Lead - Samsung Hackathon",
                company: "Samsung Innovation Campus",
                description: "Led the development of 'Medi Predict' — an AI model for lung disease detection, achieving around 90% accuracy.",
                skills: ["Leadership", "AI/ML", "Healthcare Tech", "Team Management"],
                icon: Award
              }
            ].map((exp, idx) => (
              <div 
                key={idx}
                className="group relative"
              >
                {/* Connecting Line */}
                {idx < 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-foreground/20 to-transparent hidden md:block" />
                )}
                
                <div className="relative p-8 glass-ultra rounded-xl hover-lift border border-foreground/5">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                      <exp.icon className="w-7 h-7" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        <h3 className="text-xl md:text-2xl font-semibold">{exp.role}</h3>
                        <span className="px-3 py-1 text-xs tracking-widest bg-foreground/5 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="px-4 py-1.5 border border-foreground/20 rounded-full text-xs tracking-wider hover:bg-foreground hover:text-background transition-all duration-300">
                            {skill}
                          </span>
                        ))}
                      </div>
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
      <section id="skills" className="relative py-32 px-6 lg:px-12 bg-card overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute top-20 left-20 w-72 h-72 border border-foreground rounded-full" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-foreground rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-foreground rounded-full" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-6">
              <span className="text-sm tracking-widest text-muted-foreground">05</span>
              <span className="w-12 h-px bg-foreground/30" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">SKILLS</h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <Zap className="w-5 h-5" />
              <span className="text-sm tracking-widest">EXPERTISE</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div 
                key={category}
                className="group relative p-6 glass-ultra rounded-xl hover-lift border border-foreground/5"
              >
                {/* Category Icon */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-lg font-bold">
                  {idx + 1}
                </div>
                
                <h3 className="text-lg font-semibold mb-6 pb-4 border-b border-border/30 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-foreground" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-foreground/5 border border-foreground/10 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/10 hover:border-foreground/30 transition-all duration-300 cursor-default"
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
      <section id="projects" className="relative py-32 px-6 lg:px-12 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02]">
          <div className="w-full h-full border border-foreground rounded-full animate-spin" style={{ animationDuration: '60s' }} />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-6">
              <span className="text-sm tracking-widest text-muted-foreground">06</span>
              <span className="w-12 h-px bg-foreground/30" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">PROJECTS</h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <Target className="w-5 h-5" />
              <span className="text-sm tracking-widest">FEATURED WORK</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative"
              >
                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-foreground/0 via-foreground/5 to-foreground/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative p-8 glass-ultra rounded-xl hover-lift border border-foreground/5 h-full">
                  {/* Project Number */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center text-lg font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors">
                    0{idx + 1}
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-5 h-5 text-muted-foreground" />
                    <span className="text-xs tracking-widest text-muted-foreground uppercase">
                      {project.category || "Featured Project"}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 pr-16">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  
                  {project.features && project.features.length > 0 && (
                    <div className="mb-6 space-y-2">
                      {project.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {project.note && (
                    <div className="flex items-start gap-3 p-4 bg-foreground/5 rounded-lg mb-6 border border-foreground/5">
                      <ExternalLink className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{project.note}</p>
                    </div>
                  )}
                  
                  {project.status && (
                    <div className="mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                      <span className="text-xs tracking-widest text-muted-foreground">{project.status}</span>
                    </div>
                  )}

                  <div className="pt-4 border-t border-border/30">
                    <p className="text-xs tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                      <Code className="w-3 h-3" />
                      TECH STACK
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 border border-foreground/20 rounded-full text-xs tracking-wider hover:bg-foreground hover:text-background transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <span className="section-number hidden lg:block">06</span>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-32 px-6 lg:px-12 bg-card overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-foreground/5 via-transparent to-foreground/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-6">
              <span className="text-sm tracking-widest text-muted-foreground">07</span>
              <span className="w-12 h-px bg-foreground/30" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">ACHIEVEMENTS</h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm tracking-widest">MILESTONES</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Award, 
                label: "RESEARCH", 
                title: "Published Research Paper", 
                desc: "Published a research paper on pulmonary cancer prediction using machine learning and deep learning techniques.",
                highlight: true
              },
              { 
                icon: Award, 
                label: "LEADERSHIP", 
                title: "Team Lead at Samsung Hackathon", 
                desc: "Developed 'Medi Predict' — an AI-based lung disease prediction system achieving 90% accuracy.",
                highlight: false
              },
              { 
                icon: Brain, 
                label: "HACKATHON", 
                title: "Generative AI Hackathon", 
                desc: "Participated in a two-day Generative AI Hackathon conducted by JNTU-GV, focusing on real-world AI applications.",
                highlight: false
              },
              { 
                icon: Code, 
                label: "PROBLEM SOLVING", 
                title: "250+ Problems Solved", 
                desc: "Solved 250+ coding problems on CodeChef, strengthening Data Structures and problem-solving skills.",
                highlight: false
              },
              { 
                icon: Award, 
                label: "COMMUNITY", 
                title: "Vizag Navy Marathon Volunteer", 
                desc: "Volunteered at the Vizag Navy Marathon, demonstrating teamwork, communication, and event coordination skills.",
                highlight: false
              }
            ].map((achievement, idx) => (
              <div 
                key={idx}
                className={`group relative p-8 glass-ultra rounded-xl hover-lift border text-center ${achievement.highlight ? 'border-foreground/20 ring-1 ring-foreground/10' : 'border-foreground/5'}`}
              >
                {/* Highlight Badge */}
                {achievement.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background text-xs tracking-widest rounded-full">
                    FEATURED
                  </div>
                )}
                
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-500 ${achievement.highlight ? 'bg-foreground text-background' : 'border border-foreground/20 group-hover:bg-foreground group-hover:text-background'}`}>
                  <achievement.icon className="w-8 h-8" />
                </div>
                <span className="inline-block px-3 py-1 mb-3 text-xs tracking-widest bg-foreground/5 rounded-full">{achievement.label}</span>
                <h3 className="text-lg font-semibold mb-3">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <span className="section-number hidden lg:block">07</span>
      </section>

      {/* Resume Section */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(45deg, hsl(var(--foreground)) 25%, transparent 25%), linear-gradient(-45deg, hsl(var(--foreground)) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, hsl(var(--foreground)) 75%), linear-gradient(-45deg, transparent 75%, hsl(var(--foreground)) 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }} />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          {/* Icon with Glow */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-foreground/10 rounded-2xl blur-xl" />
            <div className="relative w-full h-full bg-foreground/5 border border-foreground/20 rounded-2xl flex items-center justify-center">
              <Download className="w-10 h-10" />
            </div>
          </div>
          
          <span className="inline-block px-4 py-2 mb-6 text-xs tracking-widest bg-foreground/5 border border-foreground/10 rounded-full">
            CURRICULUM VITAE
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">DOWNLOAD RESUME</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Get a comprehensive overview of my qualifications, experience, and technical expertise.
          </p>
          
          <Button 
            asChild
            className="bg-foreground text-background hover:bg-foreground/90 px-10 py-6 text-sm tracking-widest transition-all duration-300 group"
          >
            <a href="/Res_Chaitu.pdf" download="Srigakolapu_Chaitanya_Resume.pdf" className="flex items-center gap-3">
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              DOWNLOAD PDF
            </a>
          </Button>

          <div className="flex justify-center gap-12 mt-12">
            {[
              { value: "PDF", label: "FORMAT" },
              { value: "1 PAGE", label: "LENGTH" },
              { value: "2026", label: "UPDATED" }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl font-bold mb-1">{item.value}</div>
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
