import React from 'react';

const PAYSTACK_PAYMENT_LINK = 'https://paystack.shop/pay/my2wmejw10';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <header className="max-w-4xl mx-auto py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold">Lois Fay — HR & Resume Writer</h1>
          <nav className="space-x-4 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#work" className="hover:underline">Portfolio</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#downloads" className="hover:underline">Downloads</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
        <p className="mt-4 text-gray-600">Professional HR consultant, reverse recruiter, and certified resume writer helping clients land interviews and higher offers.</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-12">

        {/* Hero */}
        <section className="bg-white rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">Get a hiring-ready resume + 1:1 coaching</h2>
            <p className="mt-2 text-gray-600">Packages for entry, mid, and senior-level candidates. I optimize resumes for ATS, write compelling summaries, and coach you for interviews and salary negotiation.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={PAYSTACK_PAYMENT_LINK} target="_blank" rel="noreferrer" className="inline-block px-5 py-3 rounded-xl bg-green-600 text-white font-semibold">Pay with Paystack</a>
              <a href="#contact" className="inline-block px-5 py-3 rounded-xl bg-gray-100">Message me</a>
            </div>
          </div>

          <div className="w-56 h-56 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold">
            <div className="text-center">
              <div className="text-sm">Trusted by</div>
              <div className="mt-2 text-3xl">100+</div>
              <div className="text-xs mt-1">successful hires</div>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section id="downloads" className="bg-white rounded-2xl p-8 shadow">
          <h3 className="text-xl font-semibold">Download Sample Resumes</h3>
          <p className="mt-2 text-gray-600">Preview some sample resumes tailored for different career levels:</p>
          <ul className="mt-4 space-y-2 list-disc list-inside">
            <li><a href="/entry_level_resume.pdf" download className="text-indigo-600 underline">Entry-Level Resume (PDF)</a></li>
            <li><a href="/mid_level_resume.pdf" download className="text-indigo-600 underline">Mid-Level Resume (PDF)</a></li>
            <li><a href="/executive_resume.pdf" download className="text-indigo-600 underline">Executive Resume (PDF)</a></li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white rounded-2xl p-8 shadow">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-2 text-gray-600">Prefer email? <a href="mailto:zeezuaremu@gmail.com" className="underline">zeezuaremu@gmail.com</a></p>
        </section>

        <footer className="text-center text-sm text-gray-500 py-8">© {new Date().getFullYear()} Lois Fay — HR & Resume Services</footer>
      </main>
    </div>
  );
}
