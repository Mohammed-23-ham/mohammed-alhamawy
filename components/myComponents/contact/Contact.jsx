'use client'
import { AiOutlineCopy } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { BsDot } from "react-icons/bs";
import React, { useState } from 'react'

const email = 'alhamawymohamed@gmail.com';

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' })

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (error) {
      console.error('Failed to copy email:', error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setFormStatus({ type: 'loading', message: 'Sending your message...' });

      const form = event.currentTarget;
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      let result;
      try {
        result = await response.json();
      } catch {
        result = { error: 'The email service returned an invalid response.' };
      }

      if (!response.ok) {
        throw new Error(result.error || 'Email service returned an error.');
      }

      setFormStatus({ type: 'success', message: 'Your message has been sent successfully.' });
      form.reset();
    } catch (error) {
      console.error('Failed to submit form:', error);
      setFormStatus({
        type: 'error',
        message: error.message || 'Something went wrong while sending the email. Please try again later.'
      });
    }
  }

  return (
    <div id='contact' className='mx-1 flex flex-col my-7 gap-3 md:flex-row'>
      <div className="w-full flex flex-col justify-center items-center md:items-start p-3 md:p-7 md:w-md">
        <span className="flex items-center justify-center gap-1 mx-auto my-2 main-col sec-bg w-fit py-1 px-3 rounded-full font-medium text-[14px] text-center sm:mx-0 sm:justify-start sm:text-left">
          <BsDot className="mb-px" />
          Available for new projects
        </span>
        <h2 className="my-2 text-2xl font-bold main-col">Let's Build Something Together</h2>
        <p className="soft-col text-sm text-center md:text-start">Whether it's a new WordPress build, a Next or React front-end — tell me what you're working on and I'll come back with a plan.</p>
        <div className="flex w-full gap-3 p-3 border rounded-2xl border-[#5f7a5e65] my-5 mx- flex-row items-center justify-between">
          <div className="flex items-center gap-2 justify-start min-w-0">
            <CiMail className="main-col shrink-0" />
            <h3 className="text-sm main-col break-all">{email}</h3>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex flex-row w-fit items-center text-xs main-col gap-1 border border-[#5f7a5e65] rounded-2xl p-2 self-start sm:self-center"
          >
            <AiOutlineCopy />
            <p className={copied ? 'translate-all duration-300 opacity-100 w-10' : 'translate-all duration-300 opacity-0 w-0'}>Copied</p>
            <p className={copied ? 'translate-all duration-300 opacity-0  w-0' : 'translate-all duration-300 opacity-100 w-10'}>Copy</p>
          </button>
        </div>
      </div>
      <div className="w-full md:p-7 md:w-md">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-4 rounded-[28px] border border-[#5f7a5e65] bg-white/60 p-4 shadow-sm backdrop-blur-sm md:p-5"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-[0.18em] soft-col">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full rounded-2xl border border-[#5f7a5e65] bg-[#f9f6f3] px-3 py-2.5 text-sm text-[#24453b] outline-none transition focus:border-[#24453b] focus:ring-2 focus:ring-[#f5c9b0]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-[0.18em] soft-col">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full rounded-2xl border border-[#5f7a5e65] bg-[#f9f6f3] px-3 py-2.5 text-sm text-[#24453b] outline-none transition focus:border-[#24453b] focus:ring-2 focus:ring-[#f5c9b0]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-[11px] font-semibold uppercase tracking-[0.18em] soft-col">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              required
              className="w-full rounded-2xl border border-[#5f7a5e65] bg-[#f9f6f3] px-3 py-2.5 text-sm text-[#24453b] outline-none transition focus:border-[#24453b] focus:ring-2 focus:ring-[#f5c9b0]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-[0.18em] soft-col">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-2xl border border-[#5f7a5e65] bg-[#f9f6f3] px-3 py-2.5 text-sm text-[#24453b] outline-none transition focus:border-[#24453b] focus:ring-2 focus:ring-[#f5c9b0]"
            />
          </div>

          <button
            type="submit"
            disabled={formStatus.type === 'loading'}
            className="main-bg mt-2 inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {formStatus.message && (
            <p
              className={`text-sm ${formStatus.type === 'error' ? 'text-red-600' : 'text-green-700'
                }`}
            >
              {formStatus.message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact