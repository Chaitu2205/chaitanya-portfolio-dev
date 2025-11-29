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
      <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-float" style={{
          animationDelay: '2s'
        }}></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-40 right-20 w-20 h-20 border-2 border-primary/20 rotate-45 animate-float"></div>
          <div className="absolute bottom-40 left-32 w-16 h-16 border-2 border-secondary/20 rounded-full animate-float" style={{
          animationDelay: '1.5s'
        }}></div>
          <div className="absolute top-1/3 left-1/4 w-12 h-12 border-2 border-accent/20 rotate-12 animate-float" style={{
          animationDelay: '0.5s'
        }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-2 animate-slide-up">
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
                  <p className="text-sm font-semibold text-primary flex items-center gap-2 justify-center lg:justify-start">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    Available for Opportunities
                  </p>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hey, I'm{" "}
                  <span className="text-gradient block mt-2">
                    Chaitanya
                  </span>
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-glow mx-auto lg:mx-0"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-slide-up" style={{
              animationDelay: '0.1s'
            }}>
                Final-Year B.Tech CSE (Data Science) Student
              </p>
              
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed animate-slide-up max-w-2xl mx-auto lg:mx-0" style={{
              animationDelay: '0.2s'
            }}>
                Building practical solutions with <span className="text-primary font-semibold">Python</span>, <span className="text-secondary font-semibold">Machine Learning</span>, and <span className="text-accent font-semibold">Data Science</span>. 
                Passionate about turning complex data into actionable insights.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up" style={{
              animationDelay: '0.3s'
            }}>
                <div className="px-6 py-3 bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="px-6 py-3 bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <div className="text-2xl font-bold text-secondary">200+</div>
                  <div className="text-xs text-muted-foreground">Problems Solved</div>
                </div>
                <div className="px-6 py-3 bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <div className="text-2xl font-bold text-accent">7.5</div>
                  <div className="text-xs text-muted-foreground">CGPA</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-slide-up" style={{
              animationDelay: '0.4s'
            }}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-xl hover:shadow-2xl transition-all group" onClick={() => scrollToSection("projects")}>
                  View My Work
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold shadow-lg hover:shadow-xl transition-all" onClick={() => scrollToSection("contact")}>
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </div>

              {/* Contact Quick Links */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6 text-sm animate-slide-up" style={{
              animationDelay: '0.5s'
            }}>
                <a href="mailto:chaitanyababu0017@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-all hover:scale-105 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/70 group-hover:text-primary transition-colors">Email</span>
                </a>
                <a href="tel:+919948087894" className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-all hover:scale-105 group">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Phone className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground/70 group-hover:text-secondary transition-colors">Call</span>
                </a>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground/70">Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Card */}
            <div className="flex-shrink-0 animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-glow"></div>
                
                {/* Profile Card */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl shadow-2xl overflow-hidden border-2 border-primary/30">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 shadow-xl border-4 border-primary/30">
                      <img src={profileImage} alt="Chaitanya" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Data Scientist</h3>
                    <p className="text-sm text-muted-foreground mb-4">Turning Data into Insights</p>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs font-medium">Python</div>
                      <div className="px-3 py-1 bg-secondary/20 backdrop-blur-sm rounded-full text-xs font-medium">ML</div>
                      <div className="px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-xs font-medium">AI</div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-card border-2 border-primary rounded-xl shadow-xl animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">Open to Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 bg-muted/30 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <Card className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all group animate-slide-up">
              <CardContent className="p-8 md:p-10 relative overflow-hidden">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                
                <p className="text-lg leading-relaxed text-foreground/90 relative z-10">
                  I am a final-year B.Tech CSE (Data Science) student passionate about building practical solutions 
                  using <span className="font-semibold text-primary">Python</span>, <span className="font-semibold text-secondary">SQL</span>, <span className="font-semibold text-accent">machine learning</span>, and web technologies. I enjoy working on real-world projects 
                  that challenge my problem-solving skills and help me grow technically. I'm actively seeking 
                  opportunities to apply my knowledge, learn from experienced professionals, and contribute to 
                  impactful technology-driven work.
                </p>
              </CardContent>
            </Card>

            {/* Right Side - Highlight Cards */}
            <div className="space-y-4 animate-slide-up" style={{
            animationDelay: '0.1s'
          }}>
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all group">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Problem Solver</h3>
                    <p className="text-sm text-foreground/70">Tackling complex challenges with creative technical solutions</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all group">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Brain className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Continuous Learner</h3>
                    <p className="text-sm text-foreground/70">Always exploring new technologies and methodologies</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all group">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Team Player</h3>
                    <p className="text-sm text-foreground/70">Collaborating effectively to achieve common goals</p>
                  </div>
                </CardContent>
              </Card>
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
      <section id="experience" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Briefcase className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Expe<span className="text-gradient">rience</span>
            </h2>
          </div>
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl md:text-3xl mb-2">Data Science & AI Intern</CardTitle>
                  <CardDescription className="text-lg font-medium text-secondary">DATAVALLEY</CardDescription>
                </div>
                <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium">
                  May 2024 – June 2024
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/90">
                    Gained hands-on experience in data science covering Python, data wrangling, EDA, statistics, 
                    machine learning, deep learning, NLP, big data, and model deployment.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/90">
                    Worked on real-world style projects and practical applications, focusing on turning raw data 
                    into meaningful insights.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/90">
                    Got exposure to cloud computing concepts and end-to-end model workflows.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1.5s'
        }}></div>
          
          {/* Floating Icons */}
          <div className="absolute top-20 left-1/4 w-16 h-16 border-2 border-primary/10 rounded-lg rotate-12 animate-float"></div>
          <div className="absolute bottom-32 right-1/4 w-12 h-12 border-2 border-secondary/10 rounded-full animate-float" style={{
          animationDelay: '0.8s'
        }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Code className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Ski<span className="text-gradient">lls</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building data-driven solutions
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => <Card key={category} className="shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-transparent hover:border-primary/30 group animate-slide-up relative overflow-hidden" style={{
            animationDelay: `${idx * 0.1}s`
          }}>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all"></div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-lg md:text-xl flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category === "Programming" ? "bg-primary/10" : category === "Data Science & Analytics" ? "bg-secondary/10" : category === "Machine Learning & AI" ? "bg-accent/10" : category === "Tools & Libraries" ? "bg-primary/10" : category === "Databases" ? "bg-secondary/10" : "bg-accent/10"}`}>
                      {category === "Programming" && <Code className="w-5 h-5 text-primary" />}
                      {category === "Data Science & Analytics" && <Database className="w-5 h-5 text-secondary" />}
                      {category === "Machine Learning & AI" && <Brain className="w-5 h-5 text-accent" />}
                      {category === "Tools & Libraries" && <Award className="w-5 h-5 text-primary" />}
                      {category === "Databases" && <Database className="w-5 h-5 text-secondary" />}
                      {category === "Soft Skills" && <Award className="w-5 h-5 text-accent" />}
                    </div>
                    <span className="group-hover:text-primary transition-colors">{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, skillIdx) => <span key={skill} className={`px-3 py-1.5 text-sm rounded-full font-medium transition-all hover:scale-110 hover:shadow-md ${skillIdx % 3 === 0 ? "bg-primary/10 text-primary hover:bg-primary/20" : skillIdx % 3 === 1 ? "bg-secondary/10 text-secondary hover:bg-secondary/20" : "bg-accent/10 text-accent hover:bg-accent/20"}`}>
                        {skill}
                      </span>)}
                  </div>
                  
                  {/* Skill Count Badge */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground font-medium">
                      {items.length} {items.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 bg-muted/30 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1.2s'
        }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world applications showcasing data science and machine learning expertise
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => <Card key={index} className="shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-transparent hover:border-primary/30 group animate-slide-up relative overflow-hidden" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all"></div>
                
                {/* Project Number Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                <CardHeader className="relative z-10 pb-4">
                  <CardTitle className="text-xl md:text-2xl pr-16 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.note && <div className="flex items-start gap-2 p-3 bg-secondary/5 border-l-4 border-secondary rounded-r">
                      <ExternalLink className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <p className="text-sm italic text-secondary">{project.note}</p>
                    </div>}
                  
                  <div className="pt-2">
                    <p className="text-sm font-semibold mb-3 text-foreground/70 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIdx) => <span key={tech} className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-all hover:scale-110 ${techIdx % 3 === 0 ? "bg-primary/10 text-primary border border-primary/20" : techIdx % 3 === 1 ? "bg-secondary/10 text-secondary border border-secondary/20" : "bg-accent/10 text-accent border border-accent/20"}`}>
                          {tech}
                        </span>)}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{
          animationDelay: '0.8s'
        }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Achieve<span className="text-gradient">ments</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Milestones that define my journey in technology and leadership
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Achievement 1 */}
            <Card className="shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-transparent hover:border-primary/40 group animate-slide-up relative overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all"></div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full"></div>
              
              <CardContent className="pt-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">LEADERSHIP</span>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  <span className="font-bold text-primary">Team Lead at Samsung Hackathon</span>, developed "Medi Predict" — an AI model for lung disease 
                  detection reported with around <span className="font-semibold text-primary">90% accuracy</span>.
                </p>
              </CardContent>
            </Card>

            {/* Achievement 2 */}
            <Card className="shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-transparent hover:border-secondary/40 group animate-slide-up relative overflow-hidden" style={{
            animationDelay: '0.1s'
          }}>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:to-secondary/5 transition-all"></div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/20 to-transparent rounded-bl-full"></div>
              
              <CardContent className="pt-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/60 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="mb-3">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">PROBLEM SOLVING</span>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Solved <span className="font-bold text-secondary">200+ problems</span> on competitive coding platforms like CodeChef, with notable performance 
                  on LeetCode and HackerRank.
                </p>
              </CardContent>
            </Card>

            {/* Achievement 3 */}
            <Card className="shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-transparent hover:border-accent/40 group animate-slide-up relative overflow-hidden" style={{
            animationDelay: '0.2s'
          }}>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-accent/5 transition-all"></div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full"></div>
              
              <CardContent className="pt-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="mb-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">COMMUNITY</span>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  <span className="font-bold text-accent">Volunteered at Vizag Navy Marathon</span>, contributing to event coordination and demonstrating 
                  communication, teamwork, and quick problem-solving.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/5 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-glow"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-float">
                <Download className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Resume</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download my resume to learn more about my qualifications, experience, and technical expertise
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-xl hover:shadow-2xl transition-all px-8 group" asChild>
                <a href="/mnt/data/CHAI_RESUME.pdf" download>
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Updated Recently</span>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              <div className="p-4 bg-card border border-border rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary mb-1">PDF</div>
                <div className="text-xs text-muted-foreground">Format</div>
              </div>
              <div className="p-4 bg-card border border-border rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-secondary mb-1">1</div>
                <div className="text-xs text-muted-foreground">Page</div>
              </div>
              <div className="p-4 bg-card border border-border rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-accent mb-1">2025</div>
                <div className="text-xs text-muted-foreground">Version</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Feel free to reach out for internships, collaboration, or project opportunities. Let's build something amazing together!
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up">
              <Card className="shadow-xl border-2 border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-all group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Email</p>
                      <a href="mailto:chaitanyababu0017@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium break-all">
                        chaitanyababu0017@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-all group">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Phone</p>
                      <a href="tel:+919948087894" className="text-foreground hover:text-secondary transition-colors font-medium">
                        +91 9948087894
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Location</p>
                      <p className="text-foreground font-medium">Andhra Pradesh, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Badge */}
              <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border-2 border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-bold text-lg">Usually responds within 24 hours</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'm actively looking for opportunities and excited to discuss how I can contribute to your team!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-xl border-2 border-secondary/20 hover:border-secondary/40 transition-all animate-slide-up" style={{
            animationDelay: '0.1s'
          }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Send className="w-5 h-5 text-secondary" />
                  </div>
                  Send a Message
                </CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold">Your Name</Label>
                    <Input id="name" placeholder="Enter your name" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} required className="mt-2 border-2 focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold">Your Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} required className="mt-2 border-2 focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold">Your Message</Label>
                    <Textarea id="message" placeholder="Tell me about your project or opportunity..." value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} required className="mt-2 border-2 focus:border-primary transition-colors resize-none" rows={5} />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground font-semibold shadow-lg hover:shadow-xl transition-all group disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? <>
                        <span className="mr-2 animate-spin">⏳</span>
                        Sending...
                      </> : <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted/30 border-t">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2025 Srigakolapu Chaitanya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;