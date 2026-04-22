"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Eye,
  LockKeyhole,
  Mail,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, phone number, billing address, and payment information.",
      },
      {
        subtitle: "Usage Data",
        text: "We automatically collect certain information about how you interact with our services, including your IP address, browser type, operating system, referring URLs, device identifiers, and pages visited. This data helps us understand how our service is used and how we can improve it.",
      },
      {
        subtitle: "Cookies & Tracking",
        text: "We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "We use your information to provide, maintain, and improve our services, process transactions, send you service-related notices, and respond to your comments and questions.",
      },
      {
        subtitle: "Communications",
        text: "With your consent, we may send you promotional communications such as news, special offers, and information about products and services offered by us and our partners.",
      },
      {
        subtitle: "Analytics & Research",
        text: "We use collected data for analytics purposes to understand user behavior, trends, and preferences, helping us build a better product experience over time.",
      },
    ],
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Disclosure",
    content: [
      {
        subtitle: "Third-Party Service Providers",
        text: "We may share your personal information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf, such as payment processing, data analysis, email delivery, and customer service.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with applicable laws, court orders, or governmental regulations.",
      },
      {
        subtitle: "Business Transfers",
        text: "In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of that transaction.",
      },
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement industry-standard security measures including SSL encryption, secure data storage, and regular security audits to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
      },
      {
        subtitle: "Data Retention",
        text: "We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights & Choices",
    content: [
      {
        subtitle: "Access & Correction",
        text: "You have the right to access the personal information we hold about you and to request corrections if it is inaccurate or incomplete. You can update most of your information directly through your account settings.",
      },
      {
        subtitle: "Deletion",
        text: "You may request that we delete your personal information. We will honor such requests subject to our need to retain certain data for legal, safety, or business purposes.",
      },
      {
        subtitle: "Opt-Out",
        text: "You may opt out of receiving promotional communications from us at any time by following the unsubscribe instructions in those messages or by contacting us directly.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      {
        subtitle: "Privacy Inquiries",
        text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Privacy Team at privacy@yourcompany.com or write to us at: 123 Business Avenue, Suite 400, San Francisco, CA 94105.",
      },
    ],
  },
];

const highlights = [
  {
    title: "Transparent collection",
    description: "See what information we collect and when we collect it.",
    icon: Eye,
  },
  {
    title: "Secure handling",
    description: "Learn how we protect, store, and retain your data responsibly.",
    icon: LockKeyhole,
  },
  {
    title: "Your privacy rights",
    description: "Review the choices available to access, update, or delete data.",
    icon: Shield,
  },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -55% 0px",
        threshold: [0.2, 0.45, 0.7],
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
    <div className="min-h-screen bg-[linear-gradient(180deg,#f3fbf9_0%,#ffffff_20%,#f7fafc_100%)] text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <section className="relative overflow-hidden rounded-[32px] border border-emerald-100 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-400 to-[#0024DA]" />
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-emerald-100/80 blur-3xl" />
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-sky-100/80 blur-3xl" />

          <div className="relative grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1.2fr_0.88fr] lg:px-12 lg:py-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-700">
                <Sparkles className="h-3.5 w-3.5" />
                Legal Privacy
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                Privacy policy built around clarity and trust.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                We believe privacy is a fundamental right. This page explains
                what data we collect, why we collect it, how we use it, and
                what choices you have over your information.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                  Last updated: April 22, 2026
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                  Effective date: April 22, 2026
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                  {sections.length} privacy sections
                </span>
              </div>
            </div>

            <Card className="rounded-[28px] border-slate-200 bg-slate-950 text-white shadow-[0_22px_60px_rgba(2,6,23,0.24)]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                    <Shield className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/80">
                      Privacy Snapshot
                    </p>
                    <h2 className="mt-1 text-xl font-semibold">
                      Your data, explained simply
                    </h2>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  This policy covers collection, usage, sharing, security, and
                  the rights available to you. Please review it carefully before
                  continuing to use the platform.
                </p>

                <div className="mt-6 space-y-3 text-sm text-slate-300">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    Data collection and cookie usage
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    Security practices and retention periods
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    Access, correction, and deletion rights
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={() => scrollToSection(sections[0].id)}
                  className="mt-6 h-11 rounded-full bg-white px-5 text-slate-950 hover:bg-emerald-100"
                >
                  Start reading
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="rounded-[24px] border-white/70 bg-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.05)] backdrop-blur"
              >
                <CardContent className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <Card className="rounded-[28px] border-slate-200 bg-white/85 shadow-[0_18px_45px_rgba(15,23,42,0.05)] backdrop-blur">
              <CardContent className="p-5">
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
                            ? "border-emerald-500 bg-emerald-500 text-white shadow-[0_14px_35px_rgba(16,185,129,0.25)]"
                            : "border-slate-200 bg-slate-50/80 text-slate-700 hover:border-emerald-200 hover:bg-emerald-50 hover:text-slate-950"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={`text-xs font-semibold tracking-[0.2em] ${
                              isActive ? "text-emerald-100" : "text-slate-400"
                            }`}
                          >
                            0{index + 1}
                          </span>
                          <ArrowRight
                            className={`h-4 w-4 transition ${
                              isActive
                                ? "translate-x-0 text-white"
                                : "text-slate-300 group-hover:translate-x-1 group-hover:text-emerald-600"
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
              </CardContent>
            </Card>
          </aside>

          <main className="space-y-8">
            {sections.map((section, sectionIndex) => (
              <Card
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-[30px] border-slate-200 bg-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.05)] backdrop-blur"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                        Section 0{sectionIndex + 1}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                        {section.title}
                      </h2>
                    </div>

                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm leading-6 text-slate-600">
                      This section explains how your information is handled and
                      protected.
                    </div>
                  </div>

                  <div className="mt-6 space-y-5">
                    {section.content.map((block, index) => (
                      <article
                        key={block.subtitle}
                        className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f5fbf8_100%)] p-5 sm:p-6"
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
                </CardContent>
              </Card>
            ))}

            <Card className="rounded-[30px] border-slate-200 bg-slate-950 text-white shadow-[0_20px_50px_rgba(2,6,23,0.18)]">
              <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-emerald-200/80">
                    Need help?
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Contact our privacy team anytime
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300">
                    If you have questions about this policy or want to exercise
                    your privacy rights, reach out and we will help you.
                  </p>
                </div>

                <a
                  href="mailto:privacy@yourcompany.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-100"
                >
                  <Mail className="h-4 w-4" />
                  privacy@yourcompany.com
                </a>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
