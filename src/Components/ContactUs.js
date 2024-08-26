import React, { useRef } from 'react';
import { contactusbg, phone } from '../assets';
import { AppText } from '../Constants';
import SectionHeading from '../Shared/SectionHeading';
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f0w5a43', 'template_8c5eyrn', form.current, {
        publicKey: 'Tzjf_JQPpiiFgLuZd',
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Failed to send email. Please try again.");
        },
      );
  };

  return (
    <div>
      <div id="contact" className='flex flex-col justify-center mt-5'>
        <div className='flex flex-row justify-center items-center'>
          <SectionHeading firstTitle={AppText.Contact} secondTitle={AppText.Us} />
          <img src={phone} className="w-[80px] ml-4" alt="Phone" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44'>
          <img src={contactusbg} className="w-[300px] mr-10" alt="Contact Us Background" />
          <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
            <div className='w-full mb-4'>
              <label htmlFor="user_email" className='text-gray-400'>Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder='yourname@gmail.com'
                className='border-[1.5px] px-2 border-purple-300 hover:border-purple-500 rounded-md w-full'
                required
              />
            </div>
            <div className='w-full mb-4'>
              <label htmlFor="message" className='text-gray-400'>Message</label>
              <textarea
                id="message"
                name="message"
                rows={7}
                placeholder='Type your message here'
                className='border-[1.5px] px-2 hover:border-purple-500 border-purple-300 rounded-md w-full'
                required
              />
            </div>
            <button
              type="submit"
              className='transition-all ease-in-out hover:scale-110 bg-purple-500 flex flex-row items-center justify-center text-[14px] py-2 mt-5 text-white rounded-md'
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
