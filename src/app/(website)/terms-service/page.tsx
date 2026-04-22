"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  FileText,
  Gavel,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      {
        subtitle: "Agreement to Terms",
        text: "By accessing or using our services, website, or any applications made available by YourCompany (collectively, 'Services'), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Services.",
      },
      {
        subtitle: "Eligibility",
        text: "You must be at least 18 years of age to use our Services. By agreeing to these Terms, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into a binding agreement.",
      },
    ],
  },
  {
    id: "account-registration",
    title: "Account Registration",
    content: [
      {
        subtitle: "Account Creation",
        text: "To access certain features of our Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.",
      },
      {
        subtitle: "Account Security",
        text: "You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.",
      },
      {
        subtitle: "Account Termination",
        text: "We reserve the right to suspend or terminate your account at our sole discretion without notice if you violate these Terms.",
      },
    ],
  },
];

const highlights = [
  {
    title: "Clear use terms",
    description: "Understand the rules and responsibilities tied to your use of the platform.",
    icon: FileText,
  },
  {
    title: "Account protection",
    description: "Know what is expected to keep your account information secure.",
    icon: ShieldCheck,
  },
  {
    title: "Legal transparency",
    description: "Review the commitments, limits, and rights that apply to both sides.",
    icon: Gavel,
  },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          )[0];

        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6fbff_0%,#ffffff_22%,#f7f7f2_100%)] text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <section className="relative overflow-hidden rounded-[32px] border border-sky-100 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0024DA] via-sky-400 to-emerald-400" />
          <div className="absolute -right-16 top-0 h-52 w-52 rounded-full bg-sky-100/80 blur-3xl" />
          <div className="absolute -bottom-16 left-8 h-44 w-44 rounded-full bg-blue-100/70 blur-3xl" />

          <div className="relative grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.25fr_0.85fr] lg:px-12 lg:py-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0024DA]">
                <Sparkles className="h-3.5 w-3.5" />
                Legal Overview
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                Terms & Conditions for a safer, clearer experience.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Please read these terms carefully before using our services.
                They explain the expectations, account responsibilities, and
                protections that apply when you interact with the platform.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                  Last updated: April 22, 2026
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                  {sections.length} sections
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                  Approx. 3 min read
                </span>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_50px_rgba(2,6,23,0.25)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Gavel className="h-5 w-5 text-sky-300" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-sky-200/80">
                    Important Notice
                  </p>
                  <h2 className="mt-1 text-xl font-semibold">
                    Review before you continue
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                These terms may include limitations, responsibilities, and
                dispute-related provisions that affect your legal rights. Please
                take a moment to read each section carefully.
              </p>

              <button
                type="button"
                onClick={() => scrollToSection(sections[0].id)}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-100"
              >
                Start reading
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/70 bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] backdrop-blur"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0024DA]/10 text-[#0024DA]">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </section>

        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-[28px] border border-slate-200 bg-white/85 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Contents
              </p>

              <div className="mt-4 flex gap-3 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
                {sections.map((section, index) => {
                  const isActive = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className={`group min-w-[220px] rounded-2xl border px-4 py-4 text-left transition lg:min-w-0 ${
                        isActive
                          ? "border-[#0024DA] bg-[#0024DA] text-white shadow-[0_14px_35px_rgba(0,36,218,0.24)]"
                          : "border-slate-200 bg-slate-50/80 text-slate-700 hover:border-sky-200 hover:bg-sky-50 hover:text-slate-950"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`text-xs font-semibold tracking-[0.2em] ${
                            isActive ? "text-sky-100" : "text-slate-400"
                          }`}
                        >
                          0{index + 1}
                        </span>
                        <ArrowRight
                          className={`h-4 w-4 transition ${
                            isActive
                              ? "translate-x-0 text-white"
                              : "text-slate-300 group-hover:translate-x-1 group-hover:text-[#0024DA]"
                          }`}
                        />
                      </div>
                      <p className="mt-3 text-sm font-semibold leading-6">
                        {section.title}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <main className="space-y-8">
            {sections.map((section, sectionIndex) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-[30px] border border-slate-200 bg-white/90 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] backdrop-blur sm:p-8"
              >
                <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0024DA]">
                      Section 0{sectionIndex + 1}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm leading-6 text-slate-600">
                    Review this section carefully before continuing to use the
                    service.
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  {section.content.map((block, index) => (
                    <article
                      key={block.subtitle}
                      className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5 sm:p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                          {index + 1}
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            {block.subtitle}
                          </h3>
                          <p className="mt-3 text-[15px] leading-8 text-slate-600 sm:text-base">
                            {block.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
