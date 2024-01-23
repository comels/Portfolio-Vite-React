import React, { useRef, useState } from "react";
import Nav from "../components/Nav";
import emailjs from "@emailjs/browser";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5nqt99v",
        "template_uf56ili",
        form.current,
        import.meta.env.VITE_API_ID
      )
      .then(
        (result) => {
          form.current.reset();
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setIsError(true);
          setTimeout(() => {
            setIsError(false);
          }, 5000);
        }
      );
  };

  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-stone-100 px-6 mt-20 py-20 sm:py-20 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        ></div>
        <form ref={form} className="mx-auto max-w-xl" onSubmit={sendEmail}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-stone-500"
              >
                Prénom
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-stone-500"
              >
                Nom
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-stone-500"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-stone-500"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-stone-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-stone-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400"
            >
              Envoyer
            </button>
          </div>
        </form>
        {isSubmitted && (
          <div className="mt-3 p-4 mx-auto max-w-xl">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircleIcon
                  className="h-5 w-5 text-green-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-600">
                  Message envoyé avec succès
                </p>
              </div>
            </div>
          </div>
        )}
        {isError && (
          <div className="mt-3 p-4 mx-auto max-w-xl">
            <div className="flex">
              <div className="flex-shrink-0">
                <ExclamationCircleIcon
                  className="h-5 w-5 text-red-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-600">
                  Erreur lors de l'envoi du message, réessayez plus tard.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
