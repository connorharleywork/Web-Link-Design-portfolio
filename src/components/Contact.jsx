import { useEffect, useState } from 'react';
import { CheckCircle2, Mail, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { contact, trustBadges, websiteOptions } from '../data/siteContent';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const formName = 'project-enquiry';
const initialErrors = {};
const initialWebsiteType = '';
const websiteTypePlaceholder = 'Select website type';

const encodeFormData = (formData) => new URLSearchParams(formData).toString();

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const [websiteType, setWebsiteType] = useState(initialWebsiteType);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedWebsiteType = window.sessionStorage.getItem('prefillWebsiteType');
    const storedMessage = window.sessionStorage.getItem('prefillProjectMessage');

    if (storedWebsiteType) {
      setWebsiteType(storedWebsiteType);
      window.sessionStorage.removeItem('prefillWebsiteType');
    }

    if (storedMessage) {
      setMessage(storedMessage);
      window.sessionStorage.removeItem('prefillProjectMessage');
    }

    const handler = (event) => setWebsiteType(event.detail || initialWebsiteType);

    const messageHandler = (event) => setMessage(event.detail || '');

    window.addEventListener('select-website-type', handler);
    window.addEventListener('prefill-project-message', messageHandler);
    return () => {
      window.removeEventListener('select-website-type', handler);
      window.removeEventListener('prefill-project-message', messageHandler);
    };
  }, []);

  const validate = (form) => {
    const data = Object.fromEntries(new FormData(form));
    const next = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+()\d\s.-]{7,}$/;

    if (!data.name?.trim()) next.name = 'Please enter your name.';
    if (!emailPattern.test(data.email || '')) next.email = 'Please enter a valid email address.';
    if (data.phone?.trim() && !phonePattern.test(data.phone.trim())) {
      next.phone = 'Please enter a valid phone number or leave this blank.';
    }
    if (!data.websiteType?.trim()) next.websiteType = 'Please select a website type.';
    if (!data.budget?.trim()) next.budget = 'Please add an estimated budget.';
    if (!data.message?.trim() || data.message.trim().length < 12) {
      next.message = 'Please share a short note about your project.';
    }

    return next;
  };

  const submit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const next = validate(form);
    setErrors(next);
    setSent(false);

    if (Object.keys(next).length) return;

    const formData = new FormData(form);
    formData.set('form-name', formName);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(formData),
      });

      if (!response.ok) throw new Error('Form submission failed.');

      setSent(true);
      setErrors(initialErrors);
      form.reset();
      setWebsiteType(initialWebsiteType);
      setMessage('');
    } catch (error) {
      setErrors({ form: 'Sorry, something went wrong. Please try again or contact us directly.' });
    }
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-5 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Tell us what you need. We’ll guide the next step."
          text="No pressure. Tell us what you need and we’ll guide you from there."
        />
        <Reveal className="mb-6 flex flex-wrap justify-center gap-3">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-[#d8b56d]/20 bg-[#d8b56d]/10 px-4 py-2 text-sm text-[#f7e8bd]"
            >
              <ShieldCheck size={16} />
              {badge}
            </span>
          ))}
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr] lg:gap-8">
          <Reveal
            as="form"
            noValidate
            name={formName}
            method="POST"
            action="/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={submit}
            className="glass rounded-[2rem] p-5 sm:p-6 md:p-8"
          >
            <input type="hidden" name="form-name" value={formName} />
            <p className="hidden" aria-hidden="true">
              <label>
                Don’t fill this out: <input name="bot-field" tabIndex="-1" autoComplete="off" />
              </label>
            </p>

            {sent && (
              <div
                role="status"
                className="mb-6 rounded-3xl border border-[#d8b56d]/30 bg-[#d8b56d]/10 p-5 text-[#f7e8bd]"
              >
                <CheckCircle2 className="mb-3 text-[#d8b56d]" />
                <h3 className="text-xl font-semibold text-[#fff6dd]">Thank you — your enquiry has been sent.</h3>
                <p className="mt-2 leading-7 text-[#e8ddc5]">
                  We’ll review your details and come back with the best next step for your website.
                </p>
              </div>
            )}

            {errors.form && (
              <div className="mb-6 rounded-3xl border border-[#ffcc9c]/30 bg-[#ffcc9c]/10 p-5 text-[#ffcc9c]" role="alert">
                {errors.form}
              </div>
            )}

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" name="name" required error={errors.name} />
              <Field label="Business name, optional" name="business" error={errors.business} />
              <Field label="Email" name="email" type="email" required error={errors.email} />
              <Field label="Phone / WhatsApp" name="phone" type="tel" error={errors.phone} />
              <label className="block text-sm font-medium text-[#d8d0bf]">
                Type of website needed
                <select
                  name="websiteType"
                  value={websiteType}
                  onChange={(event) => setWebsiteType(event.target.value)}
                  required
                  aria-invalid={Boolean(errors.websiteType)}
                  className="input-luxury mt-2 min-h-[54px]"
                >
                  <option value="">{websiteTypePlaceholder}</option>
                  {websiteOptions.map((option) => (
                    <option key={option.title}>{option.title}</option>
                  ))}
                </select>
                {errors.websiteType && <span className="mt-2 block text-sm text-[#ffcc9c]">{errors.websiteType}</span>}
              </label>
              <Field
                label="Estimated budget"
                name="budget"
                placeholder="e.g. R6,500 - R12,000"
                required
                error={errors.budget}
              />
            </div>
            <label className="mt-5 block text-sm font-medium text-[#d8d0bf]">
              Message
              <textarea
                name="message"
                rows="5"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="input-luxury mt-2 min-h-36 resize-y"
                placeholder="Tell us about your business, goals and ideal launch timeline."
                required
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <span className="mt-2 block text-sm text-[#ffcc9c]">{errors.message}</span>}
            </label>
            <button className="premium-button mt-6 min-h-[54px] w-full rounded-full bg-[#d8b56d] px-7 py-4 font-bold text-[#17130b] shadow-[0_0_40px_rgba(216,181,109,.22)] transition hover:-translate-y-0.5 sm:w-auto">
              Send enquiry
            </button>
          </Reveal>
          <Reveal as="aside" delay={0.08} className="luxury-card rounded-[2rem] p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-[#fff6dd]">Direct contact</h3>
            <p className="mt-4 leading-7 text-[#c9c0ad]">
              Prefer to start directly? Send a short overview and we’ll help define the right website scope.
            </p>
            <div className="mt-6 space-y-4">
              <ContactLine icon={Mail} text={contact.email} href={contact.emailLink} />
              <ContactLine icon={MessageCircle} text={contact.whatsapp} href={contact.whatsappLink} />
              <ContactLine icon={MapPin} text={contact.location} />
            </div>
            <div className="mt-8 rounded-3xl border border-[#d8b56d]/20 bg-[#d8b56d]/10 p-5 text-sm leading-7 text-[#f7e8bd]">
              Premium design, mobile polish, fast performance and a conversion-focused structure are included in every build.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder = '', required = false, error }) {
  return (
    <label className="block text-sm font-medium text-[#d8d0bf]">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        className="input-luxury mt-2 min-h-[54px]"
      />
      {error && <span className="mt-2 block text-sm text-[#ffcc9c]">{error}</span>}
    </label>
  );
}

function ContactLine({ icon: Icon, text, href }) {
  const content = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/5 text-[#d8b56d]">
        <Icon size={18} />
      </span>
      <span>{text}</span>
    </>
  );

  if (href) {
    return <a className="flex items-center gap-3 text-[#c9c0ad] transition hover:text-[#fff6dd]" href={href}>{content}</a>;
  }

  return <p className="flex items-center gap-3 text-[#c9c0ad]">{content}</p>;
}
