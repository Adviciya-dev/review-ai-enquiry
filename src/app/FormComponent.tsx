"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "@/components/FormInput";
import Banner from "@/components/Banner";
import PhoneInput from "@/components/PhoneInput";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { parsePhoneNumberWithError } from "libphonenumber-js";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function FormComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const tenantId = searchParams.get("tenantId") || "1";
  const bannerImages = [
    "/Mask group.png",
    "/Mask group (2).png",
    "/Mask group (1).png",
  ];
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImdsb2JhbFVzZXJJZCI6MSwiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InRlc3QtYWRtaW4tb3JnLTEiLCJyb2xlSWQiOiJjNTIzMmY2NC1hNmMwLTQ5ZjktODRkYi1jYjJkOThjODYxNTAiLCJyb2xlIjoiQURNSU4iLCJ0ZW5hbnRJZCI6MSwicGVybWlzc2lvbnMiOltdLCJpYXQiOjE3NTg2OTI2NTMsImV4cCI6MTc2Mzg3NjY1M30.PiXNEkNj-Jz2U_opIVMCB06TOF_LTghQYK8mEk4-ybw";
  // React.useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/leads/public-lead`, {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to submit form");
      }

      return response.json();
    },
  });

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
    website: Yup.string().required("Website url is required"),
    whatsapp: Yup.string().required("WhatsApp number is required"),
  });

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      // Build query parameters
      const params = new URLSearchParams();

      params.append("businessName", values.businessName);
      params.append("location", values.location);
      params.append("websiteUrl", values.website);
      params.append("email", values.mailId);
      params.append("tenantId", tenantId);

      if (values.whatsapp) {
        try {
          const phoneNumber = parsePhoneNumberWithError(`+${values.whatsapp}`);
          params.append("countryCode", `+${phoneNumber.countryCallingCode}`);
          params.append("whatsAppNo", phoneNumber.nationalNumber);
        } catch {
          params.append("whatsAppNo", values.whatsapp);
        }
      }

      // Build the full URL
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const url = `${apiUrl}/leads/public-lead-get?${params.toString()}`;

      // Make the GET request
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // optional if required
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create lead");
      }

      const data = await response.json();
      console.log("Lead fetched successfully:", data);
      toast.success("Lead fetched successfully!");

      resetForm();
      router.push("/congratulations");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching lead:", error);
        toast.error(error.message || "Failed to fetch lead");
      } else {
        console.error("Unknown error fetching lead:", error);
        toast.error("Failed to fetch lead");
      }
    }
  };

  //    const FetchLeads = async (params: {}, id?: string | null) => {
  //     const endpoint = id ? `leads/${id}` : "leads";
  //     const response = await apiRequest(
  //          "https://moc5o26tkyp5ichgmskq5uoqwu0pscbk.lambda-url.ap-south-1.on.aws/",
  //         'get',
  //         endpoint,
  //         null,
  //         params
  //     );

  //     return response?.data || [];
  // };

  //   const {
  //   data: LeadsList,
  //   isLoading,

  // } = useCustomQuery(["LeadsList"], FetchLeads,);

  interface Question {
    id: number;
    question: string;
    // add other fields returned by the API
  }

  interface Lead {
    id: number;
    name: string;
    phone: string;
    email: string;
    // add other fields returned by the API
  }

  const [questions, setQuestions] = useState<Question[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [questionsRes, leadsRes] = await Promise.all([
          fetch(
            "https://qg1c9n6uv2.execute-api.ap-south-1.amazonaws.com/dev/delivery-questions",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({}), // include request body if required
            }
          ),
          fetch(
            "https://moc5o26tkyp5ichgmskq5uoqwu0pscbk.lambda-url.ap-south-1.on.aws/leads",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // ✅ pass JWT token here
              },
            }
          ),
        ]);

        if (!questionsRes.ok || !leadsRes.ok) {
          throw new Error("Failed to fetch one or both APIs");
        }

        const [questionsData, leadsData] = await Promise.all([
          questionsRes.json(),
          leadsRes.json(),
        ]);

        setQuestions(questionsData);
        setLeads(leadsData);
      } catch (err) {
        console.error("Error fetching:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // const handleLeadPost = async () => {
  //   const body = {
  //     businessName: "ABTESTC BUSINESS",
  //     stage: "PENDING",
  //     location: "new",
  //     // categoryId: "2c05bca9-76ef-445c-b7fc-a9862654ac38",
  //     // tenantId:1
  //   };

  //   try {
  //     const apiUrl = process.env.NEXT_PUBLIC_API_URL; // or your full URL
  //     const response = await fetch(`${apiUrl}/leads`, {
  //       method: "get",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // add Authorization if needed
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(body),
  //     });

  //     if (!response.ok) {
  //       const error = await response.json();
  //       throw new Error(error.message || "Failed to create lead");
  //     }

  //     const data = await response.json();
  //     console.log("Lead posted successfully:", data);
  //     toast.success("Lead posted successfully!");
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       console.error("Error posting lead:", error);
  //       toast.error(error.message || "Failed to post lead");
  //     } else {
  //       console.error("Unknown error posting lead:", error);
  //       toast.error("Failed to post lead");
  //     }
  //   }
  // };

  console.log(questions);
  console.log(leads);
  console.log(loading);

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Toaster />
      <Banner images={bannerImages} />

      <section className="flex-1 flex items-center justify-center bg-black px-4 py-10">
        <div className="w-full max-w-2xl p-6 sm:p-8 ">
          <div className="mb-6 text-center">
            <p className="text-white text-lg font-semibold">
              Don’t wait for the Future, Own it Today
            </p>
            <p className="text-white text-xl font-medium mt-2">
              Unlock ReviuAI for FREE
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                suppressHydrationWarning
              >
                {/* <button
                  type="button"
                  className="text-white bg-red-600 py-2 px-4 rounded hover:bg-red-700"
                  onClick={handleLeadPost}
                >
                  Lead Post
                </button> */}
                <FormInput
                  label="Business Name"
                  name="businessName"
                  placeholder="Enter name"
                />
                <FormInput
                  label="Location"
                  name="location"
                  placeholder="Enter location"
                />
                <FormInput
                  label="Website URL"
                  name="website"
                  placeholder="https://example.com"
                />
                <FormInput
                  label="Mail ID"
                  name="mailId"
                  placeholder="example@mail.com"
                />
                <PhoneInput
                  label="WhatsApp Number"
                  name="whatsapp"
                  defaultCountry="in"
                />

                <div className="col-span-1 sm:col-span-2">
                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    suppressHydrationWarning
                    className="w-40 bg-[#F43C3C] text-white font-medium py-2 px-4 rounded-full hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {mutation.isPending ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Loading...
                      </>
                    ) : (
                      "Unlock ReviuAI"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>

      <footer
        className="w-full bg-[#252525] text-[#969696] py-6 text-center"
        suppressHydrationWarning
      >
        <p className="text-sm" suppressHydrationWarning>
          {/* © {isMounted ? new Date().getFullYear() : '2024'} My Business Platform. All rights reserved. */}
          copyrigt@2025, www.adviciya.com
        </p>
      </footer>
    </main>
  );
}
