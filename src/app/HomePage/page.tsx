"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "@/components/FormInput";
import PhoneInput from "@/components/PhoneInput";
import toast, { Toaster } from "react-hot-toast";
import { parsePhoneNumberWithError } from "libphonenumber-js";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function FormComponent() {

    const router = useRouter();

    const tenantId = "1";
    const [loading, setLoading] = useState(false)

    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImdsb2JhbFVzZXJJZCI6MSwiZW1haWwiOiJ0ZXN0MUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InRlc3QtYWRtaW4tb3JnLTEiLCJyb2xlSWQiOiJjNTIzMmY2NC1hNmMwLTQ5ZjktODRkYi1jYjJkOThjODYxNTAiLCJyb2xlIjoiQURNSU4iLCJ0ZW5hbnRJZCI6MSwicGVybWlzc2lvbnMiOltdLCJpYXQiOjE3NTg2OTI2NTMsImV4cCI6MTc2Mzg3NjY1M30.PiXNEkNj-Jz2U_opIVMCB06TOF_LTghQYK8mEk4-ybw";








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
            setLoading(true); // start loading

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
            const apiUrl =
                "https://ucewteteth.execute-api.ap-south-1.amazonaws.com/dev/";
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

            await response.json();
            toast.success("Lead Submitted Successfully!");
            router.push("/congratulations");
            resetForm();
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error fetching lead:", error);
                toast.error(error.message || "Failed to fetch lead");
            } else {
                console.error("Unknown error fetching lead:", error);
                toast.error("Failed to fetch lead");
            }
        } finally {
            setLoading(false); // stop loading
        }
    };







    return (
        <main className="flex flex-col min-h-screen bg-gray-50">
            <Toaster />
            {/* hero */}
            <div className="relative w-full bg-gradient-to-br from-red-900 via-red-700 to-black overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gray-400 via-transparent to-transparent opacity-40"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-6">
                    {/* Header with logos */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Image
                                src={"/congratulations/adviciya_logo.svg"}
                                alt="adviciya logo"
                                width={80}
                                height={50}
                                className="object-contain"
                            />
                            <Image
                                src={"/congratulations/reviuai_logo.svg"}
                                alt="reviu ai logo"
                                width={80}
                                height={50}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className="flex flex-col md:flex-row items-center justify-between mt-2">
                        {/* Left side - Man with phone */}
                        <div className="flex-1 flex justify-center md:justify-start mr-4">
                            <Image
                                src={"/home/imag 1 (1).png"}
                                alt="man with phone"
                                width={400}
                                height={500}
                                className="object-contain"
                            />
                        </div>

                        {/* Right side - Giveaway poster */}
                        <div className="flex-1 flex justify-center md:justify-end">
                            <Image
                                src={"/home/a5 Flyer Free review2 1.png"}
                                alt="GITEX 2025 Giveaway"
                                width={350}
                                height={500}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center bg-black px-4 py-2">
                <div className="w-full max-w-2xl p-6 sm:p-8 ">
                    <div className="mb-6 text-left">
                        <p className="text-white text-[30px] font-semibold">
                            Don’t wait for the Future, Own it Today
                        </p>
                        <p className="text-white text-[24px] font-medium mt-2">
                            Unlock ReviuAI for FREE
                        </p>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {() => (
                            <Form className="grid grid-cols-1 sm:grid-cols-2 gap-4" suppressHydrationWarning>
                                <FormInput label="Business Name" name="businessName" placeholder="Enter name" />
                                <FormInput label="Location" name="location" placeholder="Enter location" />
                                <FormInput label="Website URL" name="website" placeholder="https://example.com" />
                                <FormInput label="Mail ID" name="mailId" placeholder="example@mail.com" />
                                <PhoneInput label="WhatsApp Number" name="whatsapp" defaultCountry="in" />
                                <div className="col-span-1 sm:col-span-2">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        suppressHydrationWarning
                                        className="w-40 bg-[#F43C3C] text-white font-medium py-2 px-4 rounded-full hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {loading ? (
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
            </div>

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
