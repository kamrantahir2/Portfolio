import { useState } from "react";

import emailjs from "@emailjs/browser";
import dotenv from "dotenv";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(" ");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        name,
        email,
        message,
      };
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_ID
      );
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 5000);

      setName("");
      setEmail("");
      setMessage("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="bg-black py-20 lg:py-32 portfolio-header">
        <h1
          className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-yellow-300 
      
      text-transparent bg-clip-text font-permanentMarker tracking-widest p-4"
        >
          Contact Me
        </h1>
        <div className="w-6/12 lg:w-3/12 h-1 bg-gradient-to-r from-green-500 to-blue-300 mx-auto my-8"></div>
      </div>

      {success && (
        <div role="alert" className="alert alert-success my-8 w-7/12 m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your message has been sent successfully </span>
        </div>
      )}

      <h2 className=" text-center mt-12 lg:mt-24 md:mt-16 text-2xl md:text-3xl tracking-wide w-9/12  m-auto font-medium">
        If you have any questions feel free to contact me using the form below:
      </h2>

      <div className="w-6/12 m-auto my-12">
        <form onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input
              type="text"
              className="grow"
              value={name}
              placeholder="John Smith"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input
              type="email"
              value={email}
              className="grow"
              placeholder="johnsmith@email.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Message
            <input
              type="text"
              className="grow"
              value={message}
              placeholder="Type here ..."
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="bg-cyan-300 text-black mt-6">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
