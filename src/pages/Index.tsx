import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import portraitImage from "@/assets/linkedin_profile_pic.jpeg";

emailjs.init("fmqSq1Fhb8otDC7b2");

const navItems = ["about", "skills", "experience", "projects", "achievements", "certifications", "education", "contact"];
const resumeUrl = "/Chaitanya_Resume.pdf";

const skills = [
  { group: "Languages & Web", items: ["Python", "HTML", "CSS"] },
  { group: "Databases", items: ["SQL", "MySQL", "TiDB Cloud"] },
  { group: "Frameworks & APIs", items: ["Flask", "FastAPI", "React", "REST APIs"] },
  { group: "Data & AI", items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow / Keras", "Matplotlib", "Chart.js", "Prophet", "Gradio", "LIME"] },
  { group: "Developer Tools", items: ["Git / GitHub", "Jira", "Visual Studio Code", "Jupyter Notebook"] },
  { group: "Core Concepts", items: ["Data Structures", "Object-Oriented Programming", "DBMS", "Operating Systems"] },
];

type Project = {
  title: string;
  category: string;
  date: string;
  description: string;
  tech: string[];
  features: string[];
  problem: string;
  solution: string;
  implementation: string;
  outcome: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "AI-Powered Placement Management System",
    category: "Featured · Full-Stack AI",
    date: "September 2026",
    description: "A role-based platform that combines placement workflows with AI-assisted resume analysis and interview support.",
    tech: ["Python", "FastAPI", "React", "MySQL", "REST APIs"],
    features: ["Resume parsing and AI-based analysis", "Job matching and interview workflows", "Student, recruiter, and admin dashboards", "Application tracking and placement analytics"],
    problem: "Placement activity spans student profiles, job applications, recruitment tasks, and interview preparation across separate workflows.",
    solution: "A unified, role-based system for students, recruiters, and administrators with AI-assisted placement features.",
    implementation: "Built with a FastAPI backend, React interface, MySQL storage, REST APIs, and role-based authentication.",
    outcome: "Delivered a complete academic full-stack system covering job management, applications, interviews, and placement analytics.",
    featured: true,
  },
  {
    title: "Pulmonary Cancer Prediction",
    category: "Machine Learning",
    date: "March 2026",
    description: "A lung-cancer risk prediction project using symptom survey data, explainable models, and an interactive interface.",
    tech: ["Python", "Pandas", "Scikit-learn", "TensorFlow / Keras", "Gradio", "LIME"],
    features: ["Compared Logistic Regression, Random Forest, and a Neural Network", "Optimized for high recall to reduce false negatives", "Used LIME for model explainability", "Built an interactive Gradio web app"],
    problem: "Explore whether symptom survey data could support an understandable machine-learning risk prediction workflow.",
    solution: "Tested multiple classification approaches and prioritized recall while adding local model explanations.",
    implementation: "Prepared data with Pandas, trained models with Scikit-learn and TensorFlow/Keras, added LIME explanations, and created a Gradio interface.",
    outcome: "Produced a research-backed prediction prototype for educational use, not a clinical diagnostic product.",
    featured: true,
  },
  {
    title: "Student Performance Management System",
    category: "Full-Stack Web Application",
    date: "January – June 2026",
    description: "A deployed system for managing student records, automating result calculations, and visualizing performance.",
    tech: ["Python", "Flask", "MySQL / TiDB Cloud", "HTML", "CSS", "Chart.js", "Git / GitHub", "Jira", "Render"],
    features: ["Student record management", "Automated grades and percentages", "Roll-number-based search", "Interactive performance visualizations"],
    problem: "Manual student record and result workflows make searching, calculation, and performance review less efficient.",
    solution: "A responsive full-stack application that centralizes records and automates common academic-result tasks.",
    implementation: "Used Flask, MySQL/TiDB Cloud, HTML, CSS, and Chart.js, with Git/GitHub, Jira, testing, and deployment on Render.",
    outcome: "Completed and deployed a working academic management application with searchable records and visual analytics.",
  },
];

const achievements = [
  { title: "Published Research", text: "Published a research paper on pulmonary cancer prediction using machine learning models with high accuracy and a real-time prediction interface.", emphasis: true },
  { title: "Samsung Hackathon Team Lead", text: "Led a team to develop Medi Predict, achieving 90% accuracy in lung disease detection.", emphasis: true },
  { title: "GenAI Hackathon", text: "Participated in a two-day hackathon at JNTU-GV focused on Generative AI concepts and applications." },
  { title: "250+ Coding Problems", text: "Solved 250+ problems on CodeChef, with notable performance on LeetCode and HackerRank." },
  { title: "Vizag Navy Marathon", text: "Volunteered at the event, demonstrating teamwork, communication, and problem-solving skills." },
];

const certifications = [
  ["Programming in C", "Data Pro"],
  ["MS Office", "Data Pro"],
  ["Python for Beginners", "Simplilearn"],
  ["MySQL", "Infosys Springboard"],
  ["Python for Data Science · 72%", "NPTEL"],
  ["TCS iON NQT – IT · 61.22%", "TCS iON"],
];

const SectionHeading = ({ number, eyebrow, title, intro }: { number: string; eyebrow: string; title: string; intro?: string }) => (
  <header className="section-heading">
    <p className="eyebrow"><span>{number}</span>{eyebrow}</p>
    <div>
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  </header>
);

const TechBadge = ({ children }: { children: React.ReactNode }) => <span className="tech-badge">{children}</span>;

const Index = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) || formData.message.trim().length < 10) {
      toast({ title: "Check your details", description: "Enter a valid name, email, and a message of at least 10 characters.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send("service_uzphdkm", "template_bqgpqss", { ...formData, from_name: formData.name, from_email: formData.email, to_email: "chaitanyababu0017@gmail.com" });
      toast({ title: "Message sent", description: "Thanks for reaching out. I'll respond soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Message not sent", description: "Please email me directly at chaitanyababu0017@gmail.com.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl" aria-label="Primary navigation">
        <div className="shell flex h-16 items-center justify-between">
          <Button variant="ghost" onClick={() => scrollTo("home")} className="h-auto px-0 font-mono text-sm font-semibold text-foreground hover:bg-transparent hover:text-primary" aria-label="Go to homepage">
            SC<span className="text-primary">/</span>DS
          </Button>
          <div className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => <Button key={item} variant="ghost" size="sm" onClick={() => scrollTo(item)} className="capitalize text-muted-foreground hover:text-foreground">{item}</Button>)}
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex"><a href={resumeUrl} target="_blank" rel="noreferrer"><FileText />Resume</a></Button>
            <Button variant="ghost" size="icon" className="xl:hidden" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>{isMenuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-16 min-h-[calc(100vh-4rem)] border-t border-border bg-background p-5 xl:hidden">
            <div className="mx-auto grid max-w-lg gap-1">
              {navItems.map((item) => <Button key={item} variant="ghost" onClick={() => scrollTo(item)} className="h-12 justify-between capitalize text-foreground">{item}<ChevronRight /></Button>)}
              <Button asChild className="mt-4"><a href={resumeUrl} target="_blank" rel="noreferrer">View Resume<FileText /></a></Button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="hero-section section-anchor">
        <div className="hero-grid" aria-hidden="true" />
        <div className="shell relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)] lg:gap-16">
          <div className="hero-copy">
            <p className="eyebrow reveal"><span>Portfolio · 2026</span>Andhra Pradesh, India</p>
            <h1 className="reveal-1 mt-7 max-w-5xl text-[clamp(2.75rem,8vw,6.8rem)] font-semibold leading-[0.94]">Srigakolapu<br /><span className="text-primary">Chaitanya</span></h1>
            <p className="reveal-2 mt-7 text-xl font-medium text-foreground md:text-2xl">Data Science &amp; AI/ML Graduate</p>
            <p className="reveal-2 mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">B.Tech graduate with practical experience in Python, SQL, Machine Learning, Data Science, and software development. Interested in building practical, data-driven and AI-powered applications.</p>
            <div className="reveal-3 mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href={resumeUrl} target="_blank" rel="noreferrer">View Resume<FileText /></a></Button>
              <Button variant="outline" size="lg" onClick={() => scrollTo("projects")}>Explore Projects<ArrowRight /></Button>
              <Button variant="ghost" size="lg" onClick={() => scrollTo("contact")}>Contact Me<Mail /></Button>
            </div>
            <div className="hero-proof reveal-3 mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
              <span className="font-mono uppercase tracking-[0.14em] text-primary">Focused on</span>
              <span>Applied ML</span><span>Full-stack systems</span><span>Data-driven products</span>
            </div>
          </div>
          <div className="hero-visual reveal-3">
            <div className="portrait-frame">
              <img src={portraitImage} alt="Professional portrait of Srigakolapu Chaitanya" className="portrait-image" />
              <div className="portrait-caption"><span className="status-dot" aria-hidden="true" />Available for opportunities</div>
            </div>
            <aside className="hero-toolkit" aria-label="Primary technologies">
              <p className="mb-4 font-mono text-xs uppercase text-muted-foreground">Core toolkit</p>
              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "Machine Learning", "TensorFlow / Keras", "FastAPI", "MySQL", "Git / GitHub"].map((item) => <TechBadge key={item}>{item}</TechBadge>)}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="about" className="section-anchor section-band">
        <div className="shell">
          <SectionHeading number="01" eyebrow="Profile" title="A practical foundation in data and software." />
          <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
            <div className="surface p-7 md:p-10">
              <p className="text-xl leading-8 text-foreground md:text-2xl">B.Tech graduate in Computer Science and Engineering with Data Science, focused on turning technical knowledge into reliable applications.</p>
              <p className="mt-5 leading-7 text-muted-foreground">My work spans data science, AI/ML, Python, SQL, backend and full-stack development. Through academic projects and project exposure at DATAVALLEY, I have practiced building, testing, troubleshooting, documenting, and deploying software while continuing to learn new technologies.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border">
              {["B.Tech · CSE with Data Science", "Python & SQL", "Machine Learning", "Full-Stack / Backend Development", "AI-powered Applications"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card px-5 py-4"><Check className="size-4 text-primary" /><span className="text-sm font-medium">{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-anchor section-band bg-card/30">
        <div className="shell">
          <SectionHeading number="02" eyebrow="Technical skills" title="Tools chosen for the work." intro="A focused toolkit across software development, databases, data science, and machine learning." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ group, items }) => (
              <article key={group} className="surface p-6">
                <div className="flex items-center gap-3"><span className="icon-box"><Code2 /></span><h3 className="text-lg font-semibold">{group}</h3></div>
                <div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="skill-badge">{item}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-anchor section-band">
        <div className="shell">
          <SectionHeading number="03" eyebrow="Experience" title="Applied project exposure." />
          <article className="surface overflow-hidden">
            <div className="grid lg:grid-cols-[18rem_1fr]">
              <header className="border-b border-border bg-secondary/40 p-7 lg:border-b-0 lg:border-r md:p-9">
                <p className="eyebrow">Jan — Jun 2026</p>
                <h3 className="mt-5 text-2xl font-semibold">DATAVALLEY</h3>
                <p className="mt-2 text-sm text-primary">Data Science / Machine Learning / AI</p>
                <p className="mt-6 text-sm text-muted-foreground">Project exposure</p>
              </header>
              <div className="p-7 md:p-9">
                <div className="flex items-start gap-4"><span className="icon-box"><BriefcaseBusiness /></span><div><h3 className="text-xl font-semibold md:text-2xl">Student Performance Management System</h3><p className="mt-2 text-sm text-muted-foreground">Full-stack application development and deployment</p></div></div>
                <ul className="mt-7 grid gap-4">
                  {["Developed a full-stack system using Python, Flask, MySQL/TiDB Cloud, HTML, CSS, and Chart.js for student records, automated results, and roll-number search.", "Implemented interactive performance visualizations and performed debugging, testing, troubleshooting, and defect resolution while maintaining clean code and technical documentation.", "Used Git/GitHub for version control and Jira for task and issue tracking, then deployed the application on Render."].map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><Check className="mt-1 size-4 shrink-0 text-primary" />{item}</li>)}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" className="section-anchor section-band bg-card/30">
        <div className="shell">
          <SectionHeading number="04" eyebrow="Featured projects" title="Built to solve clear problems." intro="Three end-to-end projects across applied AI, backend systems, and data-driven web applications." />
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className={`project-card ${index === 0 ? "lg:col-span-2" : ""}`}>
                <div className={index === 0 ? "grid gap-8 lg:grid-cols-[1fr_0.85fr]" : ""}>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3"><span className="eyebrow">0{index + 1} · {project.category}</span><span className="font-mono text-xs text-muted-foreground">{project.date}</span></div>
                    <h3 className="mt-6 text-2xl font-semibold md:text-3xl">{project.title}</h3>
                    <p className="mt-4 leading-7 text-muted-foreground">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">{project.tech.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
                  </div>
                  <div className={index === 0 ? "mt-0 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" : "mt-7 border-t border-border pt-6"}>
                    <p className="mb-4 font-mono text-xs uppercase text-muted-foreground">Key features</p>
                    <ul className="space-y-3">{project.features.slice(0, index === 0 ? 4 : 3).map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-muted-foreground"><Check className="mt-1 size-4 shrink-0 text-primary" />{feature}</li>)}</ul>
                    <Button variant="outline" className="mt-7" onClick={() => setSelectedProject(project)}>View Details<ArrowRight /></Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="section-anchor section-band">
        <div className="shell">
          <SectionHeading number="05" eyebrow="Achievements" title="Evidence of initiative." />
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((item, index) => (
              <article key={item.title} className={`surface p-6 ${item.emphasis ? "achievement-featured" : ""} ${index === achievements.length - 1 ? "md:col-span-2" : ""}`}>
                <div className="flex items-start gap-4"><span className="icon-box">{index === 0 ? <BookOpen /> : <Trophy />}</span><div><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section-anchor section-band bg-card/30">
        <div className="shell">
          <SectionHeading number="06" eyebrow="Certifications" title="Structured learning, verified progress." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map(([title, issuer]) => <article key={title} className="surface flex min-h-36 flex-col justify-between p-6"><Award className="size-5 text-primary" /><div><h3 className="mt-6 font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{issuer}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="education" className="section-anchor section-band">
        <div className="shell">
          <SectionHeading number="07" eyebrow="Education" title="Academic foundation." />
          <div className="relative grid gap-4 md:grid-cols-2">
            {[
              { period: "2022 — 2026", degree: "B.Tech in Computer Science and Engineering with Data Science", place: "Dadi Institute of Engineering and Technology", location: "Anakapalle, Andhra Pradesh", score: "CGPA · 7.62" },
              { period: "2020 — 2022", degree: "Intermediate", place: "Sri Chaitanya Junior College", location: "Visakhapatnam, Andhra Pradesh", score: "Percentage · 81%" },
            ].map((item) => <article key={item.period} className="surface p-7 md:p-8"><div className="flex items-center justify-between gap-4"><span className="eyebrow">{item.period}</span><GraduationCap className="size-5 text-primary" /></div><h3 className="mt-7 text-xl font-semibold">{item.degree}</h3><p className="mt-3 text-sm text-foreground">{item.place}</p><p className="mt-1 text-sm text-muted-foreground">{item.location}</p><p className="mt-7 inline-flex border-l-2 border-primary pl-3 font-mono text-sm text-primary">{item.score}</p></article>)}
          </div>
        </div>
      </section>

      <section id="resume" className="section-anchor pb-10 pt-14 md:pb-16 md:pt-20">
        <div className="shell">
          <div className="resume-panel">
            <div><p className="eyebrow">Résumé · Updated 2026</p><h2 className="mt-4 text-3xl font-semibold md:text-5xl">A concise view of my technical journey.</h2></div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg"><a href={resumeUrl} target="_blank" rel="noreferrer">View Resume<ExternalLink /></a></Button>
              <Button asChild variant="outline" size="lg"><a href={resumeUrl} download="Srigakolapu_Chaitanya_Resume.pdf">Download Resume<Download /></a></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-anchor section-band">
        <div className="shell">
          <SectionHeading number="08" eyebrow="Contact" title="Let’s discuss the next opportunity." intro="Open to entry-level IT roles, collaborations, and projects in data science, AI/ML, Python, SQL, and software development." />
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="space-y-3">
              <a href="mailto:chaitanyababu0017@gmail.com" className="contact-link"><span className="icon-box"><Mail /></span><span><small>Email</small>chaitanyababu0017@gmail.com</span><ArrowRight /></a>
              <a href="tel:+919948087894" className="contact-link"><span className="icon-box"><Phone /></span><span><small>Phone</small>+91 9948087894</span><ArrowRight /></a>
              <div className="contact-link"><span className="icon-box"><MapPin /></span><span><small>Location</small>Andhra Pradesh, India</span></div>
            </div>
            <form onSubmit={handleSubmit} className="surface space-y-5 p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div><Label htmlFor="name">Name</Label><Input id="name" autoComplete="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Your name" className="mt-2" required /></div>
                <div><Label htmlFor="email">Email</Label><Input id="email" type="email" autoComplete="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="you@example.com" className="mt-2" required /></div>
              </div>
              <div><Label htmlFor="message">Message</Label><Textarea id="message" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Tell me about the role or project…" className="mt-2 min-h-36 resize-y" required /></div>
              <Button type="submit" size="lg" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send Message"}<Send /></Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="shell grid gap-6 text-sm md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="font-semibold text-foreground">Srigakolapu Chaitanya</p><p className="mt-1 text-muted-foreground">Data Science &amp; AI/ML Graduate</p></div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-muted-foreground"><Button variant="link" className="h-auto p-0 text-muted-foreground" onClick={() => scrollTo("home")}>Home</Button><a className="transition-colors hover:text-primary" href="mailto:chaitanyababu0017@gmail.com">Email</a><span>© 2026 Srigakolapu Chaitanya. All rights reserved.</span></div>
        </div>
      </footer>

      <Dialog open={selectedProject !== null} onOpenChange={(open) => { if (!open) setSelectedProject(null); }}>
        {selectedProject && <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto rounded-md border-border bg-card p-6 md:p-9">
          <DialogHeader><p className="eyebrow">{selectedProject.category} · {selectedProject.date}</p><DialogTitle className="pt-3 text-left text-2xl leading-tight md:text-3xl">{selectedProject.title}</DialogTitle><DialogDescription className="pt-2 text-left leading-6">{selectedProject.description}</DialogDescription></DialogHeader>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {[['Problem', selectedProject.problem], ['Solution', selectedProject.solution], ['Implementation', selectedProject.implementation], ['Outcome', selectedProject.outcome]].map(([label, text]) => <section key={label} className="border-t border-border pt-4"><h3 className="text-sm font-semibold text-foreground">{label}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></section>)}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">{selectedProject.tech.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>
          <p className="mt-6 text-xs text-muted-foreground">Repository and live-demo links are not shown because no verified project URLs are configured.</p>
        </DialogContent>}
      </Dialog>
    </main>
  );
};

export default Index;