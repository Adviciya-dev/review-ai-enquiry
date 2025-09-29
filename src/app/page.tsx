"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "@/components/FormInput";
import Banner from "@/components/Banner";
import PhoneInput from "@/components/PhoneInput";

export default function Home() {
  const bannerImages = ["/Mask group.png", "/Mask group (2).png", "/Mask group (1).png"];
  const initialValues = {
    businessName: "",
    location: "",
    website: "",
    mailId: "",
    whatsapp: "",
    contactPerson: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    logo: null as File | null,
    businessImages: [] as File[],
  };

  const validationSchema = Yup.object({
    businessName: Yup.string().required("Business Name is required"),
    location: Yup.string().required("Location is required"),
    mailId: Yup.string().email("Invalid email").required("Mail ID is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
    alert("Form submitted! Check console.");
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* Banner */}
      <Banner images={bannerImages} />

      {/* Form Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Business Form</h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({}) => {


              return (
                <Form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput label="Business Name" name="businessName" placeholder="Enter name" />
                  <FormInput label="Location" name="location" placeholder="Enter location" />
                  <FormInput label="Website URL" name="website" placeholder="https://example.com" />
                  <FormInput label="Logo" name="logo" type="file" />
                  <FormInput label="Mail ID" name="mailId" placeholder="example@mail.com" />
                  {/* <FormInput label="WhatsApp Number" name="whatsapp" placeholder="+91 9876543210" /> */}
                  <PhoneInput label="WhatsApp Number" name="whatsapp" defaultCountry="in" />
                  <FormInput label="Contact Person Name" name="contactPerson" placeholder="Name" />

                  <FormInput
                    label="Business Image Library"
                    name="businessImages"
                    type="file"
                    multiple
                  />
                  <FormInput label="Facebook URL" name="facebook" placeholder="https://facebook.com" />
                  <FormInput label="Instagram URL" name="instagram" placeholder="https://instagram.com" />
                  <FormInput label="LinkedIn URL" name="linkedin" placeholder="https://linkedin.com" />

                  <div className="col-span-1 sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-black transition"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )

            }}
          </Formik>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-300 py-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} My Business Platform. All rights reserved.</p>
      </footer>
    </main>
  );
}
