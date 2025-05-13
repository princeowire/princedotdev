'use client'

import React from 'react';

import { CiLinkedin, CiTwitter, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_9s4qsjc';
const TEMPLATE_ID = 'template_jc1ktql';
const PUBLIC_KEY = 'U-i2qzoKAQr2KpUxg';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        message: Yup.string().required('Message is required'),
      })}
      onSubmit={(values, actions) => {
        const mergedValues = {
          name: `${values.firstName} ${values.lastName}`,
          message: values.message,
          time: new Date().toLocaleString(),
          sender_email: values.email, // This is what you're adding
        };
      
        emailjs.send(SERVICE_ID, TEMPLATE_ID, mergedValues, PUBLIC_KEY)
          .then(() => {
            alert('Message sent successfully!');
            actions.resetForm();
          })
          .catch((err) => {
            alert('Failed to send message. Please try again.');
            console.error(err);
          })
          .finally(() => {
            actions.setSubmitting(false);
          });
      }}      
      
    >
      {({ isSubmitting }) => (
        <Form className="shadow-[0px_0px_05px_05px] border-amber-400 p-8 bg-[#1E1E1E] rounded-bl-2xl rounded-tr-2xl shadow-[#ffbb005a]">
          <div className="py-8 flex flex-wrap gap-y-16 w-full justify-between">
            <label className="basis-[43.5%] max-sm:basis-[100%] w-full">
              <p>First name:</p>
              <Field name="firstName" className="border-b border-amber-400 outline-0 w-full p-2.5" type="text" />
              <ErrorMessage name="firstName" component="div" className="text-red-400 text-sm" />
            </label>

            <label className="basis-[43.5%] max-sm:basis-[100%] w-full">
              <p>Last name:</p>
              <Field name="lastName" className="border-b border-amber-400 outline-0 w-full p-2.5" type="text" />
              <ErrorMessage name="lastName" component="div" className="text-red-400 text-sm" />
            </label>

            <label className="basis-[43.5%] max-sm:basis-[100%] w-full">
              <p>Email:</p>
              <Field name="email" type="email" className="border-b border-amber-400 outline-0 w-full p-2.5" />
              <ErrorMessage name="email" component="div" className="text-red-400 text-sm" />
            </label>

            <label className="basis-[43.5%] max-sm:basis-[100%} w-full">
              <p>Message:</p>
              <Field as="textarea" name="message" rows="4" className="border-b border-amber-400 w-full outline-0 bg-amber-200 text-black p-2.5" />
              <ErrorMessage name="message" component="div" className="text-red-400 text-sm" />
            </label>
          </div>

          <div className="pt-16 flex items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-white p-2 w-32 rounded-2xl disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/prince-owire-841187250/" target="_blank"><CiLinkedin className="w-6 h-6" /></a>
              <a href="https://github.com/princeowire" target="_blank"><FaGithub className="w-6 h-6" /></a>
              <a href="https://x.com/OwirePrince" target="_blank"><CiTwitter className="w-6 h-6" /></a>
              <a href="mailto:princeowire131@gmail.com"><CiMail className="w-6 h-6" /></a>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
