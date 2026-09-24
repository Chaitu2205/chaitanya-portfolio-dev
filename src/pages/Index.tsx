import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowDown, ArrowUpRight, Award, Check, Download, GraduationCap, Mail, MapPin, Menu, Phone, Send, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import resumeAsset from "@/assets/chaitanya-resume.pdf.asset.json";

emailjs.init("fmqSq1Fhb8otDC7b2");

const navItems = ["about", "education", "experience", "skills", "projects", "certifications", "achievements", "contact"];

const skills = {
  Languages: ["Python"],
  Databases: ["SQL", "MySQL", "TiDB Cloud"],
  "Developer tools": ["Git / GitHub", "Jira", "Visual Studio Code", "Jupyter Notebook"],
  Libraries: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow / Keras", "Matplotlib", "Chart.js", "Prophet", "Gradio", "LIME"],
  "Core concepts": ["Data Structures", "Object-Oriented Programming", "DBMS", "Operating Systems"],
};

const projects = [
  {
    title: "Pulmonary Cancer Prediction",
    type: "Machine Learning",
    date: "March 2026",
    description: "Built a lung cancer risk prediction system from patient symptom survey data, testing Logistic Regression, Random Forest, and a Neural Network while optimizing recall to reduce false negatives.",
    tech: ["Python", "Pandas", "Scikit-learn", "TensorFlow / Keras", "Gradio", "LIME"],
    details: ["LIME-powered model explainability", "Interactive Gradio prediction interface", "Published as a research paper"],
  },
  {
    title: "AI-Powered Placement Management System",
    type: "Full-Stack AI",
    date: "September 2026",
    description: "Developed a role-based placement platform with resume parsing, AI-assisted analysis, job matching, interview question generation, and evaluation workflows.",
    tech: ["Python", "FastAPI", "React", "MySQL", "REST APIs"],
    details: ["Student, recruiter, and admin dashboards", "Application and placement analytics", "Job management and matching"],
  },
  {
    title: "Student Performance Management System",
    type: "Full-Stack Web Application",
    date: "January – June 2026",
    description: "Developed and deployed a responsive system for student records, automated results, roll-number search, and interactive performance analytics backed by cloud data.",
    tech: ["Python", "Flask", "MySQL", "TiDB Cloud", "HTML", "CSS", "Chart.js", "Render"],
    details: ["CRUD record management", "Automated grades and percentages", "Interactive Chart.js dashboards"],
  },
];

const certifications = [
  ["Programming in C", "Data Pro"],
  ["MS Office", "Data Pro"],
  ["Python for Beginners", "Simplilearn"],
  ["MySQL", "Infosys Springboard"],
  ["Python for Data Science · 72%", "NPTEL"],
  ["TCS iON NQT – IT · 61.22%", "TCS iON"],
];

const achievements = [
  ["Published Research", "Published a paper on pulmonary cancer prediction using machine learning, explainability, and a real-time interface."],
  ["Samsung Hackathon Lead", "Led the Medi Predict team to develop an AI lung-disease detection model reported at 90% accuracy."],
  ["GenAI Hackathon", "Participated in a two-day JNTU-GV hackathon focused on generative AI concepts and applications."],
  ["250+ Coding Problems", "Built problem-solving fluency across CodeChef, LeetCode, and HackerRank."],
  ["Vizag Navy Marathon", "Volunteered in event coordination, demonstrating teamwork, communication, and quick problem-solving."],
];

const SectionHeading = ({ title, note }: { title: string; note: string }) => (
  <div className="mx-auto mb-14 max-w-2xl text-center">
    <p className="eyebrow mb-4 inline-flex items-center gap-2"><Sparkles className="size-3.5" />{note}</p>
    <h2 className="text-3xl font-semibold md:text-5xl">{title}</h2>
    <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
  </div>
);

const Index = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="orb left-[-10%] top-[-10%] h-[480px] w-[480px] bg-primary/15" />
        <div className="orb right-[-15%] top-[35%] h-[520px] w-[520px] bg-accent/10" />
        <div className="orb bottom-[-15%] left-[20%] h-[420px] w-[420px] bg-primary/10" />
      </div>

      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="shell mt-4">
          <div className="glass flex h-14 items-center justify-between rounded-2xl border border-border/70 px-4">
            <button onClick={() => scrollTo("home")} className="font-mono text-sm font-semibold text-primary">SC<span className="text-foreground">.</span></button>
            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <Button key={item} variant="ghost" size="sm" onClick={() => scrollTo(item)} className="rounded-full text-xs capitalize text-muted-foreground hover:text-primary">{item}</Button>
              ))}
            </div>
            <Button asChild size="sm" className="hidden rounded-full lg:inline-flex">
              <a href={resumeAsset.url} download="Srigakolapu_Chaitanya_Resume.pdf"><Download className="mr-1 size-3.5" /> Résumé</a>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Toggle navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</Button>
          </div>
          {isMenuOpen && (
            <div className="glass mt-2 grid gap-1 rounded-2xl border border-border/70 p-3 lg:hidden">
              {navItems.map((item) => (
                <Button key={item} variant="ghost" onClick={() => scrollTo(item)} className="justify-start rounded-xl capitalize text-muted-foreground">{item}</Button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative flex min-h-screen items-center justify-center pt-28 pb-20">
        <div className="grid-fade absolute inset-0" />
        <div className="shell relative text-center">
          <p className="reveal eyebrow mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <span className="pulse-ring inline-block size-2 rounded-full bg-primary" /> Available for opportunities · 2026
          </p>
          <h1 className="reveal-1 mx-auto max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-8xl">
            Srigakolapu<br /><span className="gradient-text">Chaitanya</span>
          </h1>
          <p className="reveal-2 mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Computer Science &amp; Data Science graduate crafting practical machine learning and full-stack products that solve real problems.
          </p>
          <div className="reveal-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" onClick={() => scrollTo("projects")} className="rounded-full px-8 shadow-[0_0_40px_hsl(var(--primary)/0.35)]">View my work <ArrowDown className="ml-1 size-4" /></Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8">
              <a href={resumeAsset.url} download="Srigakolapu_Chaitanya_Resume.pdf">Download résumé <Download className="ml-1 size-4" /></a>
            </Button>
          </div>
          <div className="reveal-3 mx-auto mt-16 grid max-w-lg grid-cols-3 gap-4">
            {[["7.62", "CGPA"], ["250+", "Problems solved"], ["3", "Major builds"]].map(([value, label]) => (
              <div key={label} className="premium-card p-5">
                <p className="gradient-text text-3xl font-semibold md:text-4xl">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <div className="shell">
          <SectionHeading title="About me" note="Profile" />
          <div className="gradient-border reveal mx-auto max-w-3xl p-8 text-center md:p-12">
            <p className="text-xl leading-relaxed md:text-2xl">
              I apply <span className="text-primary">Python, SQL, and machine learning</span> to turn real problems into clear, reliable products — and I'm seeking opportunities to learn new technologies, contribute to team goals, and grow as a software professional.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
              <span className="badge"><MapPin className="mr-1 inline size-3.5 text-primary" /> Andhra Pradesh, India</span>
              <span className="badge"><GraduationCap className="mr-1 inline size-3.5 text-primary" /> B.Tech CSE (Data Science)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 md:py-32">
        <div className="shell">
          <SectionHeading title="Education" note="Academic record" />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ["2022 — 2026", "B.Tech · CSE with Data Science", "Dadi Institute of Engineering and Technology, Anakapalle", "CGPA 7.62"],
              ["2020 — 2022", "Board of Intermediate Education", "Sri Chaitanya Junior College, Visakhapatnam", "81%"],
            ].map(([years, title, place, score]) => (
              <article key={years} className="premium-card p-8">
                <div className="flex items-center justify-between">
                  <span className="tech-badge">{years}</span>
                  <GraduationCap className="size-6 text-primary/60" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-muted-foreground">{place}</p>
                <p className="gradient-text mt-8 inline-block text-2xl font-semibold">{score}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 md:py-32">
        <div className="shell">
          <SectionHeading title="Experience" note="Field work" />
          <article className="gradient-border mx-auto max-w-4xl p-8 md:p-12">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold md:text-3xl">Student Performance Management System</h3>
                <p className="mt-2 text-primary">DATAVALLEY · Data Science, ML &amp; AI</p>
              </div>
              <span className="tech-badge">Jan — Jun 2026</span>
            </div>
            <div className="mt-8 space-y-4">
              {[
                "Built a full-stack platform with Flask, MySQL/TiDB Cloud, HTML, CSS, and Chart.js for student records, automated results, and roll-number search.",
                "Implemented interactive performance visualizations, debugging, testing, troubleshooting, and defect resolution while maintaining technical documentation.",
                "Used Git/GitHub for version control, Jira for issue tracking, and Render for deployment.",
              ].map((line) => (
                <p key={line} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15"><Check className="size-3 text-primary" /></span>{line}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 md:py-32">
        <div className="shell">
          <SectionHeading title="Technical arsenal" note="Capabilities" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <article key={group} className="premium-card p-7">
                <h3 className="text-lg font-semibold">{group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => <span key={item} className="badge">{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 md:py-32">
        <div className="shell">
          <SectionHeading title="Selected work" note="Project archive" />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="premium-card group flex flex-col p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-5xl font-semibold text-primary/20 transition-colors group-hover:text-primary/40">0{index + 1}</span>
                  <span className="tech-badge">{project.type}</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold md:text-2xl">{project.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{project.date}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-6 space-y-2">
                  {project.details.map((detail) => (
                    <p key={detail} className="flex gap-2 text-sm text-muted-foreground"><ArrowUpRight className="mt-0.5 size-4 shrink-0 text-primary" />{detail}</p>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                  {project.tech.map((tech) => <span key={tech} className="tech-badge">{tech}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 md:py-32">
        <div className="shell">
          <SectionHeading title="Credentials" note="Certifications" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map(([title, issuer]) => (
              <article key={title} className="premium-card flex items-start gap-4 p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/12"><Award className="size-5 text-primary" /></span>
                <div>
                  <h3 className="font-semibold leading-snug">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{issuer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24 md:py-32">
        <div className="shell">
          <SectionHeading title="Milestones" note="Achievements" />
          <div className="mx-auto max-w-3xl space-y-4">
            {achievements.map(([title, description], index) => (
              <article key={title} className="premium-card group flex items-start gap-5 p-6">
                <span className="gradient-text font-mono text-2xl font-semibold">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Résumé banner */}
      <section className="py-24 md:py-32">
        <div className="shell">
          <div className="gradient-border relative overflow-hidden p-10 text-center md:p-16">
            <div className="orb left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 bg-primary/25" />
            <p className="eyebrow relative">Résumé · Updated 2026</p>
            <h2 className="relative mx-auto mt-4 max-w-xl text-3xl font-semibold md:text-5xl">The complete record, <span className="gradient-text">in one page.</span></h2>
            <Button asChild size="lg" className="relative mt-10 rounded-full px-8 shadow-[0_0_40px_hsl(var(--primary)/0.35)]">
              <a href={resumeAsset.url} download="Srigakolapu_Chaitanya_Resume.pdf">Download PDF <Download className="ml-1 size-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32">
        <div className="shell">
          <SectionHeading title="Start a conversation" note="Contact" />
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              <p className="text-lg leading-relaxed text-muted-foreground">Open to internships, collaborations, and technology-driven opportunities.</p>
              {[
                { Icon: Mail, label: "Email", value: "chaitanyababu0017@gmail.com", href: "mailto:chaitanyababu0017@gmail.com" },
                { Icon: Phone, label: "Phone", value: "+91 9948087894", href: "tel:+919948087894" },
                { Icon: MapPin, label: "Location", value: "Andhra Pradesh, India", href: "" },
              ].map(({ Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/12"><Icon className="size-5 text-primary" /></span>
                    <span><small className="eyebrow block">{label}</small><span className="text-sm">{value}</span></span>
                  </>
                );
                return href
                  ? <a key={label} href={href} className="premium-card flex items-center gap-4 p-4">{inner}</a>
                  : <div key={label} className="premium-card flex items-center gap-4 p-4">{inner}</div>;
              })}
            </div>
            <form onSubmit={handleSubmit} className="gradient-border space-y-5 p-7 md:p-9 lg:col-span-3">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="eyebrow">Name</Label>
                  <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="mt-2 rounded-xl bg-background/60" required />
                </div>
                <div>
                  <Label htmlFor="email" className="eyebrow">Email</Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" className="mt-2 rounded-xl bg-background/60" required />
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="eyebrow">Message</Label>
                <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell me about the opportunity..." className="mt-2 min-h-36 resize-none rounded-xl bg-background/60" required />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full rounded-full shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
                {isSubmitting ? "Sending…" : "Send message"} <Send className="ml-1 size-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-10">
        <div className="shell flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>© 2026 Srigakolapu Chaitanya</p>
          <p className="font-mono text-xs">Data Science · Machine Learning · Software</p>
          <Button variant="ghost" size="sm" onClick={() => scrollTo("home")} className="text-muted-foreground hover:text-primary">Back to top <ArrowUpRight className="ml-1 size-4" /></Button>
        </div>
      </footer>
    </main>
  );
};

export default Index;
