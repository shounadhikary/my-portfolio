"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { personalInfo } from "@/data/portfolio";
import toast from "react-hot-toast";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length < 20) errs.message = "Message too short";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Web3Forms access key - safe to expose publicly; routes submissions to the inbox.
    // Override via NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY if needed.
    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "4097edc9-6401-48f8-b023-c925ac5edf04";

    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: `[Portfolio] ${form.subject}`,
          message: form.message,
          from_name: form.name,
          replyto: form.email,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setForm({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        toast.success("Message sent! I'll get back to you soon 🚀");
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again or email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const socialLinks = [
    { href: personalInfo.social.github, icon: GithubIcon, label: "GitHub" },
    { href: personalInfo.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { href: personalInfo.social.twitter, icon: TwitterIcon, label: "Twitter" },
    { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <section id="contact" className="py-24 bg-base">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Contact Me"
          subtitle="Have a research opportunity, project idea, or just want to connect? I'd love to hear from you!"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-bold text-strong mb-2">Let&apos;s Collaborate</h3>
            <p className="text-dim leading-relaxed mb-8 text-justify hyphens-auto">
              I&apos;m actively looking for research collaborations, internship opportunities (Software Quality Assurance, Software Quality Control,
              Software Engineering), and exciting projects in AI/ML.
              Whether you&apos;re a recruiter, researcher, or fellow developer - let&apos;s build something amazing together.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                    <Icon size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-faint font-mono">{label}</div>
                    {href ? (
                      <a href={href} className="text-strong hover:text-cyan-400 transition-colors text-sm">{value}</a>
                    ) : (
                      <span className="text-strong text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-mono text-faint mb-3 uppercase tracking-wider">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-xl glass border border-line flex items-center justify-center text-dim hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume link */}
            <div className="mt-8 pt-6 border-t border-line">
              <a href={personalInfo.resumeUrl} download
                className="flex items-center gap-2 text-sm text-dim hover:text-cyan-400 transition-colors">
                <ExternalLink size={14} />
                Download my full resume (PDF)
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass border border-line rounded-2xl p-6 space-y-4">
              {/* Name & Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { key: "name" as const, label: "Your Name", placeholder: "Shoun Adhikary", type: "text" },
                  { key: "email" as const, label: "Email Address", placeholder: "shounadhikary725@email.com", type: "email" },
                ].map(({ key, label, placeholder, type }) => (
                  <div key={key}>
                    <label className="block text-xs font-mono text-dim mb-1.5">{label}</label>
                    <input
                      type={type}
                      value={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      placeholder={placeholder}
                      className={`w-full bg-surface border rounded-xl px-4 py-2.5 text-sm text-strong placeholder-faint focus:outline-none focus:border-cyan-400/60 transition-colors ${
                        errors[key] ? "border-red-500/60" : "border-line"
                      }`}
                    />
                    {errors[key] && <p className="text-red-400 text-xs mt-1">{errors[key]}</p>}
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-dim mb-1.5">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Research Collaboration / Internship Inquiry / ..."
                  className={`w-full bg-surface border rounded-xl px-4 py-2.5 text-sm text-strong placeholder-faint focus:outline-none focus:border-cyan-400/60 transition-colors ${
                    errors.subject ? "border-red-500/60" : "border-line"
                  }`}
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-dim mb-1.5">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the opportunity or idea you have in mind..."
                  className={`w-full bg-surface border rounded-xl px-4 py-2.5 text-sm text-strong placeholder-faint focus:outline-none focus:border-cyan-400/60 transition-colors resize-none ${
                    errors.message ? "border-red-500/60" : "border-line"
                  }`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary justify-center text-white py-3 font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={15} /> Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
