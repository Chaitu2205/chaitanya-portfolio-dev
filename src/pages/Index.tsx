import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Code,
  Database,
  Brain,
  Award,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Send,
  Menu,
  X,
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const skills = {
    "Programming": ["Python", "C", "SQL", "HTML", "CSS"],
    "Data Science & Analytics": ["Data cleaning", "Exploratory data analysis (EDA)", "Data visualization", "Statistical analysis"],
    "Machine Learning & AI": ["Classification models", "CNN-based deep learning", "Time-series forecasting"],
    "Tools & Libraries": ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow / Keras", "Prophet", "Jupyter Notebook", "Git / GitHub", "Visual Studio Code"],
    "Databases": ["MySQL (queries, joins, stored procedures)"],
    "Soft Skills": ["Communication", "Teamwork", "Self-learning", "Problem-solving", "Project execution", "Team Lead experience in hackathon settings"],
  };

  const projects = [
    {
      title: "Pulmonary Cancer Prediction System",
      description: "Developed a machine-learning model to predict lung cancer risk using patient health and lifestyle factors. Implemented data preprocessing, feature selection, and classification algorithms with a focus on improving recall to reduce false negatives.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      note: "Designed for early risk screening support",
    },
    {
      title: "Time-Series Forecasting Model (Prophet)",
      description: "Built a time-series forecasting model to predict future values from historical data. Cleaned and prepared datasets, tuned Prophet parameters, and evaluated results using metrics like RMSE and MAE to improve prediction accuracy.",
      tech: ["Python", "Facebook Prophet", "Pandas", "Matplotlib"],
    },
    {
      title: "Skin Cancer Detection Using CNN",
      description: "Built a deep learning model using Convolutional Neural Networks (CNN) to classify skin lesions as benign or malignant. Used data augmentation and an optimized CNN architecture to enhance accuracy and robustness.",
      tech: ["Python", "TensorFlow/Keras", "OpenCV"],
    },
    {
      title: "MD Chinese Restaurant – Billing & Management System",
      description: "Developed a mini-project that automates restaurant menu management, order processing, and bill generation. Integrated Python with MySQL to store orders, update prices, and handle transaction records using a simple, user-friendly console interface.",
      tech: ["Python", "MySQL", "mysql-connector", "SQL Queries"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gradient">SC</h2>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-slide-up">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-foreground/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-40 right-20 w-20 h-20 border-2 border-primary/20 rotate-45 animate-float"></div>
          <div className="absolute bottom-40 left-32 w-16 h-16 border-2 border-secondary/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-12 h-12 border-2 border-accent/20 rotate-12 animate-float" style={{ animationDelay: '0.5s' }}></div>
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
              
              <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Final-Year B.Tech CSE (Data Science) Student
              </p>
              
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed animate-slide-up max-w-2xl mx-auto lg:mx-0" style={{ animationDelay: '0.2s' }}>
                Building practical solutions with <span className="text-primary font-semibold">Python</span>, <span className="text-secondary font-semibold">Machine Learning</span>, and <span className="text-accent font-semibold">Data Science</span>. 
                Passionate about turning complex data into actionable insights.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="px-6 py-3 bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="px-6 py-3 bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <div className="text-2xl font-bold text-secondary">200+</div>
                  <div className="text-xs text-muted-foreground">Problems Solved</div>
                </div>
                <div className="px-6 py-3 bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <div className="text-2xl font-bold text-accent">7.45</div>
                  <div className="text-xs text-muted-foreground">CGPA</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-xl hover:shadow-2xl transition-all group"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </div>

              {/* Contact Quick Links */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6 text-sm animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <a 
                  href="mailto:chaitanyababu0017@gmail.com" 
                  className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-all hover:scale-105 group"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/70 group-hover:text-primary transition-colors">Email</span>
                </a>
                <a 
                  href="tel:+919948087894" 
                  className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-all hover:scale-105 group"
                >
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
            <div className="flex-shrink-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 shadow-xl">
                      <span className="text-4xl md:text-5xl font-bold text-white">SC</span>
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
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="text-gradient">Me</span>
          </h2>
          <Card className="border-2 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed text-foreground/90">
                I am a final-year B.Tech CSE (Data Science) student passionate about building practical solutions 
                using Python, SQL, machine learning, and web technologies. I enjoy working on real-world projects 
                that challenge my problem-solving skills and help me grow technically. I'm actively seeking 
                opportunities to apply my knowledge, learn from experienced professionals, and contribute to 
                impactful technology-driven work.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-3 mb-12">
            <GraduationCap className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Edu<span className="text-gradient">cation</span>
            </h2>
          </div>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Bachelor of Technology in Computer Science and Engineering (Data Science)</CardTitle>
                <CardDescription className="text-base">
                  Dadi Institute of Engineering and Technology (DIET), Anakapalle, Andhra Pradesh
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">2022 – 2026</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-medium">Current CGPA: 7.45</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Intermediate (Board of Intermediate Education, A.P.)</CardTitle>
                <CardDescription className="text-base">
                  Sri Chaitanya Junior College, Gajuwaka, Visakhapatnam
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">2020 – 2022</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-medium">81%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Schooling</CardTitle>
                <CardDescription className="text-base">
                  Life Way School, Visakhapatnam, Andhra Pradesh
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Completed schooling with strong foundation in mathematics and science.
                </p>
              </CardContent>
            </Card>
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
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Code className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Ski<span className="text-gradient">lls</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardTitle className="text-xl flex items-center gap-2">
                    {category === "Programming" && <Code className="w-5 h-5 text-primary" />}
                    {category === "Data Science & Analytics" && <Database className="w-5 h-5 text-primary" />}
                    {category === "Machine Learning & AI" && <Brain className="w-5 h-5 text-primary" />}
                    {category === "Tools & Libraries" && <Award className="w-5 h-5 text-primary" />}
                    {category === "Databases" && <Database className="w-5 h-5 text-primary" />}
                    {category === "Soft Skills" && <Award className="w-5 h-5 text-primary" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-start justify-between gap-2">
                    <span>{project.title}</span>
                    <ExternalLink className="w-5 h-5 text-primary flex-shrink-0" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed">{project.description}</p>
                  {project.note && (
                    <p className="text-sm italic text-secondary">{project.note}</p>
                  )}
                  <div>
                    <p className="text-sm font-semibold mb-2 text-foreground/70">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Achieve<span className="text-gradient">ments</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-all border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Team Lead at Samsung Hackathon, developed "Medi Predict" — an AI model for lung disease 
                  detection reported with around 90% accuracy.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-all border-l-4 border-l-secondary">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Solved 200+ problems on competitive coding platforms like CodeChef, with notable performance 
                  on LeetCode and HackerRank.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-all border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Volunteered at Vizag Navy Marathon, contributing to event coordination and demonstrating 
                  communication, teamwork, and quick problem-solving.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Download my resume to learn more about my qualifications and experience
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all px-8"
            asChild
          >
            <a href="/mnt/data/CHAI_RESUME.pdf" download>
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Feel free to reach out for internships, collaboration, or project opportunities.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a 
                          href="mailto:chaitanyababu0017@gmail.com" 
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          chaitanyababu0017@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a 
                          href="tel:+919948087894" 
                          className="text-foreground hover:text-secondary transition-colors"
                        >
                          +91 9948087894
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-foreground">Andhra Pradesh, India</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
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
    </div>
  );
};

export default Index;
