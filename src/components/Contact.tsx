"use client";
import React, { useState } from "react";
import Section from "./ui/Section";

function Contact() {
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (isLoading) return;
    event.preventDefault();

    setIsLoading(true);
    setResult(null);

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "297485d8-064a-4cc8-a071-0f75bb8a56d0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setIsLoading(false);

    if (data.success) {
      setResult("Thank you! Your message has been sent.");
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setResult(null);
        setIsLoading(false);
        (event.target as HTMLFormElement).reset();
      }, 10000);
    } else {
      setResult(data.message);
    }
  };

  return (
    <Section
      id="Contact"
      className="flex flex-col justify-center items-center gap-8"
    >
      <div className="flex flex-col md:flex-row shadow-xl backdrop-blur-lg border border-base-content border-opacity-10 rounded-md overflow-hidden">
        <div className="flex flex-col items-center lg:p-16 p-8 gap-8 max-w-md text-center">
          <h4 className="text-2xl font-semibold">Contact Information</h4>
          <div className="flex flex-col gap-2">
            <p>Luca Christl</p>
            <p>luca.christl4221@gmail.com</p>
            <p>078 961 21 98</p>
            <p>Aettenschwil, Switzerland</p>
          </div>
          <p>
            Please refrain of using my information for advertisement or charges
            will be pressed.
          </p>
        </div>
        {isSubmitted ? (
          <div className="flex flex-col flex-grow-1 justify-center items-center p-8 bg-primary text-primary-content">
            <h4 className="text-2xl font-semibold">{result}</h4>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className={`flex flex-grow-1 flex-col gap-8 col-span-2 lg:p-16 p-8 bg-primary text-center md:text-left`}
          >
            <h4 className="text-2xl text-primary-content font-semibold">
              Send Me a Message
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <label className="input flex items-center gap-2">
                <input
                  name="firstName"
                  type="text"
                  className="grow"
                  placeholder="First Name"
                  required
                />
              </label>
              <label className="input flex items-center gap-2">
                <input
                  name="lastName"
                  type="text"
                  className="grow"
                  placeholder="Last Name"
                  required
                />
              </label>
              <label className="input flex items-center gap-2 col-span-2">
                <input
                  name="email"
                  type="email"
                  className="grow"
                  placeholder="Email"
                  required
                />
              </label>
              <textarea
                name="message"
                className="textarea col-span-2"
                placeholder="Type your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-md w-fit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Submit"}{" "}
              {isLoading && (
                <span className="loading loading-spinner inline-block"></span>
              )}
            </button>
          </form>
        )}
      </div>
    </Section>
  );
}

export default Contact;
