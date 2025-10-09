"use client";



import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "@/components/FormInput";
import Banner from "@/components/Banner";
import PhoneInput from "@/components/PhoneInput";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { parsePhoneNumberWithError } from 'libphonenumber-js';
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


export default function FormComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  // const [isMounted, setIsMounted] = React.useState(false);
  const tenantId = searchParams.get("tenantId") || "1";
  const bannerImages = ["/Mask group.png", "/Mask group (2).png", "/Mask group (1).png"];

  // React.useEffect(() => {
  //   setIsMounted(true);
  // }, []);
  

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/leads/public-lead`, {
        method: "POST",
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

  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);

    const formData = new FormData();
    formData.append("businessName", values.businessName);
    formData.append("location", values.location);
    formData.append("websiteUrl", values.website);
    formData.append("email", values.mailId);
    formData.append("tenantId", tenantId);

    if (values.whatsapp) {
      try {
        const phoneNumber = parsePhoneNumberWithError(`+${values.whatsapp}`);
        formData.append("countryCode", `+${phoneNumber.countryCallingCode}`);
        formData.append("whatsAppNo", phoneNumber.nationalNumber);
      } catch {
        formData.append("whatsAppNo", values.whatsapp);
      }
    }
    //  router.push("/congratulations");

    mutation.mutate(formData, {
      onSuccess: (data) => {
        console.log("Form submitted successfully:", data);
        
        toast.success("Form submitted successfully!", {
          duration: 4000,
          position: "top-right",
        });
        router.push("/congratulations");
        resetForm();
      },
      onError: (error: Error) => {
        console.error("Form submission error:", error);
        toast.error(error.message || "Failed to submit form", {
          duration: 4000,
          position: "top-right",
        });
      },
    });
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

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Toaster />
      <Banner images={bannerImages} />

      <section 
        className="flex-1 flex items-center justify-center bg-black px-4 py-10"
      >

        <div className="w-full max-w-2xl p-6 sm:p-8 ">

          <div className="mb-6 text-center">
            <p className="text-white text-lg font-semibold">Don’t wait for the Future, Own it Today</p>
            <p className="text-white text-xl font-medium mt-2">Unlock ReviuAI for FREE</p>
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
                      'Unlock ReviuAI'
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>

      <footer className="w-full bg-[#252525] text-[#969696] py-6 text-center" suppressHydrationWarning>
        <p className="text-sm" suppressHydrationWarning>
          {/* © {isMounted ? new Date().getFullYear() : '2024'} My Business Platform. All rights reserved. */}
          copyrigt@2025, www.adviciya.com
        </p>
      </footer>
    </main>
  );
}