"use client";
import React, { useState, useEffect } from "react";

const ContactForm = () => {
  //   const [name, setName] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [subject, setSubject] = useState("");
  //   const [message, setMessage] = useState("");

  //   const [isValid, setIsValid] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);

  //   //check for all inputs
  //   useEffect(() => {
  //     if (name && phone && email && subject && message) {
  //       setIsValid(true);
  //     } else {
  //       setIsValid(false);
  //     }
  //   }, [name, phone, email, subject, message]);

  //   //submit handler
  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     setIsLoading(true);
  //     emailjs
  //       .sendForm(
  //         "service_qzifqv1",
  //         "template_6vdaoq4",
  //         e.target,
  //         "dBz5a2coPV_IpVWjA"
  //       )
  //       .then(
  //         (result) => {
  //           if (result.text == "OK") {
  //             alert("Thank you for getting in touch!");
  //             setName("");
  //             setEmail("");
  //             setMessage("");
  //             setPhone("");
  //             setSubject("");
  //           }
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //   };

  return (
    <form
      // onSubmit={submitHandler}
      className="flex flex-col gap-5 mt-8 [&>input]:py-2 [&>input]:px-4 [&>input]:border-[1px] [&>input]:bg-black [&>input]:outline-none [&>input]:border-brand [&>input]:rounded-md text-lg"
    >
      <input
        //  onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="your name"
        name="name"
        minLength={5}
      />
      <input
        //  onChange={(e) => setPhone(e.target.value)}
        type="tel"
        placeholder="phone number"
        name="phone"
        minLength={11}
      />
      <input
        //  onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
        name="email"
        minLength={12}
      />
      <input
        //  onChange={(e) => setSubject(e.target.value)}
        type="text"
        placeholder="subject"
        name="subject"
        minLength={5}
      />
      <textarea
        minLength={20}
        //  onChange={(e) => setMessage(e.target.value)}
        cols="30"
        rows="5"
        placeholder="Leave your message here"
        name="message"
        className="py-2 px-4 border-[1px] border-brand rounded-md bg-black outline-none"
      ></textarea>
      <button
        //  disabled={!isValid || isLoading}
        className="bg-brand rounded-md px-7 py-3 text-white mr-auto border-2 border-brand hover:bg-transparent hover:text-brand duration-300 disabled:opacity-50 disabled:hover:text-white disabled:hover:bg-main "
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
