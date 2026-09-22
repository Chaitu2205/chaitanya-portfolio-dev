import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowDown, ArrowUpRight, Award, BriefcaseBusiness, Check, Download, Mail, MapPin, Menu, Phone, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import profileImage from "@/assets/linkedin_profile_pic.jpeg";
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
    type: "Machine Learning / March 2026",
    description: "Built a lung cancer risk prediction system from patient symptom survey data, testing Logistic Regression, Random Forest, and a Neural Network while optimizing recall to reduce false negatives.",
    tech: ["Python", "Pandas", "Scikit-learn", "TensorFlow / Keras", "Gradio", "LIME"],
    details: ["LIME-powered model explainability", "Interactive Gradio prediction interface", "Published as a research paper"],
  },
  {
    title: "AI-Powered Placement Management System",
    type: "Full-Stack AI / September 2026",
    description: "Developed a role-based placement platform with resume parsing, AI-assisted analysis, job matching, interview question generation, and evaluation workflows.",
    tech: ["Python", "FastAPI", "React", "MySQL", "REST APIs"],
    details: ["Student, recruiter, and admin dashboards", "Application and placement analytics", "Job management and matching"],
  },
  {
    title: "Student Performance Management System",
    type: "Full-Stack Web Application / January–June 2026",
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
  ["01", "Published Research", "Published a paper on pulmonary cancer prediction using machine learning, explainability, and a real-time interface."],
  ["02", "Samsung Hackathon Lead", "Led the Medi Predict team to develop an AI lung-disease detection model reported at 90% accuracy."],
  ["03", "GenAI Hackathon", "Participated in a two-day JNTU-GV hackathon focused on generative AI concepts and applications."],
  ["04", "250+ Coding Problems", "Built problem-solving fluency across CodeChef, LeetCode, and HackerRank."],
  ["05", "Vizag Navy Marathon", "Volunteered in event coordination, demonstrating teamwork, communication, and quick problem-solving."],
];

function SectionHeading({ number, title, note }: { number: string; title: string; note: string }) {
  return (
    <div className="grid gap-5 border-t border-border pt-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-3"><span className="eyebrow">{number} / {note}</span></div>
      <h2 className="section-title md:col-span-9">{title}</h2>
    </div>
  );
}

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
      toast({ title: "Message sent", description: "Thanks for reaching out. I’ll respond soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Message not sent", description: "Please email me directly at chaitanyababu0017@gmail.com.", variant: "destructive" });
    } finally { setIsSubmitting(false); }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="editorial-shell flex h-16 items-center justify-between">
          <Button variant="ghost" className="h-auto px-0 font-mono text-xs text-primary hover:bg-transparent" onClick={() => scrollTo("home")}>SC / 26</Button>
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, index) => <Button key={item} variant="ghost" size="sm" onClick={() => scrollTo(item)} className="font-mono text-[10px] uppercase text-muted-foreground hover:bg-secondary hover:text-primary">{String(index + 1).padStart(2, "0")} {item}</Button>)}
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Toggle navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</Button>
        </div>
        {isMenuOpen && <div className="editorial-shell grid border-t border-border bg-background py-4 lg:hidden">{navItems.map((item, index) => <Button key={item} variant="ghost" onClick={() => scrollTo(item)} className="justify-start font-mono text-xs uppercase text-muted-foreground">{String(index + 1).padStart(2, "0")} / {item}</Button>)}</div>}
      </nav>

      <section id="home" className="relative min-h-[760px] pt-28 md:min-h-screen md:pt-32">
        <div className="scan-grid absolute inset-0 opacity-50" />
        <div className="editorial-shell relative grid gap-12 border-t border-border py-10 lg:grid-cols-12 lg:gap-10">
          <div className="reveal flex flex-col justify-between lg:col-span-5 lg:min-h-[650px]">
            <div>
              <p className="eyebrow mb-10">Portfolio / Data Science / 2026</p>
              <h1 className="max-w-[9ch] text-6xl font-semibold leading-[0.88] md:text-8xl lg:text-[6.4rem]">Srigakolapu<br/><span className="text-primary">Chaitanya.</span></h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">Final-year Computer Science & Data Science student building practical machine learning and full-stack systems.</p>
            </div>
            <div className="mt-12 grid gap-3 border-t border-border pt-6 sm:grid-cols-2 lg:mt-0">
              <Button onClick={() => scrollTo("projects")} className="justify-between rounded-sm">View selected work <ArrowDown className="size-4" /></Button>
              <Button variant="outline" asChild className="justify-between rounded-sm"><a href={resumeAsset.url} download="Srigakolapu_Chaitanya_Resume.pdf">Download résumé <Download className="size-4" /></a></Button>
            </div>
          </div>
          <div className="reveal-delay lg:col-span-7">
            <div className="group relative overflow-hidden border border-border bg-card">
              <img src={profileImage} alt="Srigakolapu Chaitanya" className="aspect-[4/4.6] w-full object-cover object-top grayscale transition duration-700 group-hover:grayscale-0 md:aspect-[16/12] lg:aspect-[4/4.6]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-background via-background/50 to-transparent p-6 pt-24">
                <div><p className="eyebrow">Current focus</p><p className="mt-2 font-medium">ML systems & practical software</p></div>
                <span className="font-mono text-xs text-primary">AP / INDIA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 md:py-32"><div className="editorial-shell"><SectionHeading number="01" title="Career profile" note="Biography" /><div className="mt-14 grid gap-12 md:grid-cols-12"><p className="text-2xl leading-snug md:col-span-7 md:text-4xl">I apply Python, SQL, machine learning, and software development to turn real problems into clear, reliable products.</p><div className="space-y-7 text-muted-foreground md:col-span-4 md:col-start-9"><p>Seeking opportunities to learn new technologies, contribute to team goals, and grow as a software professional.</p><div className="grid grid-cols-3 gap-4 border-t border-border pt-6"><div><b className="block text-3xl text-foreground">7.62</b><span className="eyebrow">CGPA</span></div><div><b className="block text-3xl text-foreground">250+</b><span className="eyebrow">Problems</span></div><div><b className="block text-3xl text-foreground">3</b><span className="eyebrow">Major builds</span></div></div></div></div></div></section>

      <section id="education" className="surface py-24 md:py-32"><div className="editorial-shell"><SectionHeading number="02" title="Education" note="Academic record" /><div className="mt-14 grid gap-px bg-border md:grid-cols-2">{[
        ["2022 — 2026", "B.Tech · CSE with Data Science", "Dadi Institute of Engineering and Technology", "Anakapalle, Andhra Pradesh", "CGPA 7.62"],
        ["2020 — 2022", "Board of Intermediate Education", "Sri Chaitanya Junior College", "Visakhapatnam, Andhra Pradesh", "81%"],
      ].map((item) => <article key={item[0]} className="bg-card p-7 md:p-10"><p className="eyebrow">{item[0]}</p><h3 className="mt-8 text-2xl font-medium">{item[1]}</h3><p className="mt-3 text-muted-foreground">{item[2]}<br/>{item[3]}</p><p className="mt-10 inline-block border-b border-primary pb-1 font-mono text-xs text-primary">{item[4]}</p></article>)}</div></div></section>

      <section id="experience" className="py-24 md:py-32"><div className="editorial-shell"><SectionHeading number="03" title="Experience" note="Field work" /><article className="mt-14 grid gap-10 border border-border bg-card p-7 md:grid-cols-12 md:p-10"><div className="md:col-span-4"><p className="eyebrow">Jan — Jun 2026</p><h3 className="mt-6 text-3xl font-medium">Student Performance Management System</h3><p className="mt-3 text-primary">DATAVALLEY · Data Science, ML & AI</p></div><div className="space-y-5 md:col-span-7 md:col-start-6">{[
        "Built a full-stack platform with Flask, MySQL/TiDB Cloud, HTML, CSS, and Chart.js for student records, automated results, and roll-number search.",
        "Implemented interactive performance visualizations, debugging, testing, troubleshooting, and defect resolution while maintaining technical documentation.",
        "Used Git/GitHub for version control, Jira for issue tracking, and Render for deployment."
      ].map((line) => <p key={line} className="flex gap-4 leading-relaxed text-muted-foreground"><Check className="mt-1 size-4 shrink-0 text-primary" />{line}</p>)}</div></article></div></section>

      <section id="skills" className="surface py-24 md:py-32"><div className="editorial-shell"><SectionHeading number="04" title="Technical index" note="Capabilities" /><div className="mt-14 divide-y divide-border border-y border-border">{Object.entries(skills).map(([group, items], index) => <div key={group} className="grid gap-5 py-7 md:grid-cols-12 md:items-start"><p className="font-mono text-xs text-primary md:col-span-3">0{index + 1} / {group}</p><div className="flex flex-wrap gap-2 md:col-span-9">{items.map((item) => <span key={item} className="border border-border bg-background px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground">{item}</span>)}</div></div>)}</div></div></section>

      <section id="projects" className="py-24 md:py-32"><div className="editorial-shell"><SectionHeading number="05" title="Selected work" note="Project archive" /><div className="mt-16 space-y-16">{projects.map((project, index) => <article key={project.title} className="grid gap-8 border-t border-border pt-8 md:grid-cols-12"><div className="md:col-span-2"><span className="text-6xl font-semibold text-primary/25">0{index + 1}</span></div><div className="md:col-span-5"><p className="eyebrow">{project.type}</p><h3 className="mt-5 text-3xl font-medium md:text-4xl">{project.title}</h3><p className="mt-5 leading-relaxed text-muted-foreground">{project.description}</p></div><div className="md:col-span-4 md:col-start-9"><div className="space-y-3">{project.details.map((detail) => <p key={detail} className="flex gap-3 text-sm text-muted-foreground"><ArrowUpRight className="size-4 shrink-0 text-primary" />{detail}</p>)}</div><div className="mt-8 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="border border-border px-2 py-1 font-mono text-[10px] text-primary">{tech}</span>)}</div></div></article>)}</div></div></section>

      <section id="certifications" className="surface py-24 md:py-32"><div className="editorial-shell"><SectionHeading number="06" title="Credentials" note="Certifications" /><div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">{certifications.map(([title, issuer], index) => <article key={title} className="editorial-card bg-card p-7"><span className="font-mono text-xs text-primary">CERT / 0{index + 1}</span><h3 className="mt-12 text-xl font-medium">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{issuer}</p></article>)}</div></div></section>

      <section id="achievements" className="py-24 md:py-32"><div className="editorial-shell"><SectionHeading number="07" title="Milestones" note="Achievements" /><div className="mt-14 divide-y divide-border border-y border-border">{achievements.map(([number, title, description]) => <article key={number} className="group grid gap-5 py-7 md:grid-cols-12 md:items-center"><span className="font-mono text-xs text-primary md:col-span-2">{number}</span><h3 className="text-xl font-medium transition-colors group-hover:text-primary md:col-span-4">{title}</h3><p className="leading-relaxed text-muted-foreground md:col-span-6">{description}</p></article>)}</div></div></section>

      <section className="surface py-24 md:py-32"><div className="editorial-shell grid gap-10 border-y border-border py-12 md:grid-cols-12 md:items-center"><div className="md:col-span-8"><p className="eyebrow">Résumé / Updated 2026</p><h2 className="mt-5 text-4xl font-semibold md:text-6xl">The complete record,<br/>in one page.</h2></div><div className="md:col-span-4 md:text-right"><Button asChild size="lg" className="w-full justify-between rounded-sm md:w-auto"><a href={resumeAsset.url} download="Srigakolapu_Chaitanya_Resume.pdf">Download PDF <Download className="size-4" /></a></Button></div></div></section>

      <section id="contact" className="py-24 md:py-32"><div className="editorial-shell"><SectionHeading number="08" title="Start a conversation" note="Contact" /><div className="mt-14 grid gap-14 md:grid-cols-12"><div className="md:col-span-5"><p className="max-w-md text-2xl leading-snug">Open to internships, collaborations, and technology-driven opportunities.</p><div className="mt-10 space-y-5 text-sm">{[
        [Mail, "Email", "chaitanyababu0017@gmail.com", "mailto:chaitanyababu0017@gmail.com"],
        [Phone, "Phone", "+91 9948087894", "tel:+919948087894"],
        [MapPin, "Location", "Andhra Pradesh, India", ""],
      ].map(([Icon, label, value, href]) => { const icon = Icon as typeof Mail; const content = <><icon className="size-4 text-primary" /><span><small className="eyebrow block">{label as string}</small>{value as string}</span></>; return href ? <a key={label as string} href={href as string} className="flex items-center gap-4 text-muted-foreground hover:text-foreground">{content}</a> : <div key={label as string} className="flex items-center gap-4 text-muted-foreground">{content}</div>; })}</div></div><form onSubmit={handleSubmit} className="space-y-6 border border-border bg-card p-6 md:col-span-7 md:p-9"><div className="grid gap-6 sm:grid-cols-2"><div><Label htmlFor="name" className="eyebrow">Name</Label><Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="mt-2 rounded-sm bg-background" required /></div><div><Label htmlFor="email" className="eyebrow">Email</Label><Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" className="mt-2 rounded-sm bg-background" required /></div></div><div><Label htmlFor="message" className="eyebrow">Message</Label><Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell me about the opportunity..." className="mt-2 min-h-36 resize-none rounded-sm bg-background" required /></div><Button type="submit" disabled={isSubmitting} className="w-full justify-between rounded-sm">{isSubmitting ? "Sending…" : "Send message"}<Send className="size-4" /></Button></form></div></div></section>

      <footer className="surface border-t border-border py-10"><div className="editorial-shell flex flex-col gap-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between"><p>© 2026 Srigakolapu Chaitanya</p><div className="flex items-center gap-3"><BriefcaseBusiness className="size-4 text-primary" /><span>Data Science · Machine Learning · Software</span></div><Button variant="ghost" size="sm" onClick={() => scrollTo("home")} className="justify-start px-0 text-muted-foreground hover:bg-transparent hover:text-primary">Back to top <ArrowUpRight className="ml-2 size-4" /></Button></div></footer>
    </main>
  );
};

export default Index;
