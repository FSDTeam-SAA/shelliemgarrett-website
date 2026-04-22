"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

type FaqCategory = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

type FaqItem = {
  id: string;
  categoryId: string;
  question: string;
  answer: string;
};

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "funding-basics",
    label: "Funding basics",
    icon: <ChevronRight className="w-5 h-5" />,
  },
  {
    id: "withdrawals",
    label: "Withdrawals",
    icon: <ChevronRight className="w-5 h-5" />,
  },
  {
    id: "account",
    label: "Account",
    icon: <ChevronRight className="w-5 h-5" />,
  },
  {
    id: "donations",
    label: "Donations",
    icon: <ChevronRight className="w-5 h-5" />,
  },
];

const FAQ_ITEMS: FaqItem[] = [
  // Funding Basics
  {
    id: "q1",
    categoryId: "funding-basics",
    question: "What if I don't reach my fundraising target?",
    answer:
      "Don't worry! Most platforms allow you to keep whatever funds you raise, even if you don't hit your target.",
  },
  {
    id: "q2",
    categoryId: "funding-basics",
    question: "When will I receive my funds?",
    answer:
      "Funds are typically available within 2–5 business days after a donation is made.",
  },
  {
    id: "q3",
    categoryId: "funding-basics",
    question: "Is there any platform fee?",
    answer:
      "Yes, a small platform fee may apply depending on the campaign type and payment processing charges.",
  },
  {
    id: "q4",
    categoryId: "funding-basics",
    question: "Can I edit my campaign after publishing?",
    answer:
      "Yes, you can update your campaign details anytime.",
  },

  // Withdrawals
  {
    id: "q5",
    categoryId: "withdrawals",
    question: "How do I withdraw my funds?",
    answer:
      "You can withdraw funds directly to your linked bank account.",
  },
  {
    id: "q6",
    categoryId: "withdrawals",
    question: "Are there withdrawal limits?",
    answer:
      "Minimum withdrawal limits may apply depending on your region.",
  },
  {
    id: "q7",
    categoryId: "withdrawals",
    question: "How long does withdrawal take?",
    answer:
      "Withdrawals usually take 2–7 business days.",
  },

  // Account
  {
    id: "q8",
    categoryId: "account",
    question: "How do I create an account?",
    answer:
      "Click signup, enter your details, and verify your email.",
  },
  {
    id: "q9",
    categoryId: "account",
    question: "I forgot my password. What should I do?",
    answer:
      "Use the reset password option from the login page.",
  },
  {
    id: "q10",
    categoryId: "account",
    question: "Can I delete my account?",
    answer:
      "Yes, from your profile settings.",
  },

  // Donations
  {
    id: "q11",
    categoryId: "donations",
    question: "Are donations refundable?",
    answer:
      "Donations are generally non-refundable.",
  },
  {
    id: "q12",
    categoryId: "donations",
    question: "Can I donate anonymously?",
    answer:
      "Yes, you can hide your name.",
  },
  {
    id: "q13",
    categoryId: "donations",
    question: "Is my payment information secure?",
    answer:
      "Yes, all payments are encrypted and secure.",
  },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("funding-basics");
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaqs = FAQ_ITEMS.filter(
    (faq) => faq.categoryId === activeCategory,
  );

  return (
    <section className="bg-gray-100 py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
          Frequently Asked Questions
        </h2>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Sidebar */}
          <div className="w-full lg:w-[320px] bg-white rounded-[8px] overflow-hidden h-fit lg:sticky lg:top-20">
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenId(null);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-6 py-5 text-sm font-medium border-b last:border-none transition-all",
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50",
                  )}
                >
                  <span>{cat.label}</span>
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 transition",
                      isActive ? "text-blue-600" : "text-gray-400",
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* FAQ Content */}
          <div className="flex-1 px-8 py-6 divide-y bg-white rounded-[8px]">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="py-5">
                    <button
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <span className="text-base font-medium text-gray-800">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition-transform duration-200",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>

                    {isOpen && (
                      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-400 py-10">
                No FAQs available.
              </p>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20">
          <div className="relative h-[326px] overflow-hidden group">
            <Image
              src="/images/b-success-1.jpg"
              alt="Discover campaigns"
              fill
              className="object-cover brightness-75 group-hover:brightness-60 transition"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-5 px-6">
              <p className="text-white text-xl font-bold">
                Discover amazing fundraising campaigns
              </p>
              <Link href="/all-campaigns">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                  Fund someone
                </button>
              </Link>
            </div>
          </div>

          <div className="relative h-[326px] overflow-hidden group">
            <Image
              src="/images/b-success-2.jpg"
              alt="Start fundraising"
              fill
              className="object-cover brightness-75 group-hover:brightness-60 transition"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-5 px-6">
              <p className="text-white text-xl font-bold">
                Create your campaign
              </p>
              <Link href="/all-campaigns">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                  Start fundraising
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}