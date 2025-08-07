import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MdSend, MdCheckCircle } from 'react-icons/md';

const Contact = () => {
  const [state, handleSubmit] = useForm("xjkopyva");
  
  if (state.succeeded) {
    return (
      <div className='gap-6 w-full h-auto border border-[#ffffff30] p-6 rounded-lg flex flex-col items-center'>
        <h2 className='text-5xl font-bold mb-2'>~/Contact</h2>
        <div className='flex flex-col items-center justify-center py-16 px-8 w-full max-w-md mx-auto'>
          <div className='bg-[#cc932930] border border-[#cc932950] rounded-full p-6 mb-6'>
            <MdCheckCircle size={60} className='text-[#cc9329]' />
          </div>
          <h3 className='text-2xl font-bold text-white mb-3'>Message Sent!</h3>
          <p className='text-gray-300 text-center leading-relaxed'>
            Thanks for reaching out! I'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='gap-6 w-full h-auto border border-[#ffffff30] p-6 rounded-lg flex flex-col items-center'>
      <h2 className='text-5xl font-bold mb-2'>~/Contact</h2>
      
      <div className='w-full max-w-2xl'>
        <div className='mb-6'>
          <p className='text-gray-300 text-center text-lg'>
            Got a project in mind? Let's work together and create something amazing!
          </p>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          {/* Name Field */}
          <div className='flex flex-col gap-2'>
            <label htmlFor="name" className='text-white font-medium text-lg'>
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className='bg-[#ffffff08] border border-[#ffffff20] hover:border-[#cc932950] focus:border-[#cc9329] focus:outline-none rounded-lg px-4 py-3 text-white transition-all duration-300 focus:bg-[#ffffff15]'
              placeholder="Your name"
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              className='text-red-400 text-sm mt-1'
            />
          </div>

          {/* Email Field */}
          <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='text-white font-medium text-lg'>
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              className='bg-[#ffffff08] border border-[#ffffff20] hover:border-[#cc932950] focus:border-[#cc9329] focus:outline-none rounded-lg px-4 py-3 text-white transition-all duration-300 focus:bg-[#ffffff15]'
              placeholder="your.email@example.com"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className='text-red-400 text-sm mt-1'
            />
          </div>

          {/* Message Field */}
          <div className='flex flex-col gap-2'>
            <label htmlFor="message" className='text-white font-medium text-lg'>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className='bg-[#ffffff08] border border-[#ffffff20] hover:border-[#cc932950] focus:border-[#cc9329] focus:outline-none rounded-lg px-4 py-3 text-white transition-all duration-300 focus:bg-[#ffffff15] resize-none'
              placeholder="Tell me about your project, ideas, or just say hello!"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className='text-red-400 text-sm mt-1'
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={state.submitting}
            className='bg-[#cc9329] hover:bg-[#b8851f] disabled:bg-[#cc932950] disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 text-lg group'
          >
            {state.submitting ? (
              <>
                <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <MdSend className='group-hover:translate-x-1 transition-transform duration-300' />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;