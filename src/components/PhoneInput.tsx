"use client";

import React from "react";
import { useField } from "formik";
import ReactPhoneInput from "react-phone-input-2";

interface Props {
  label: string;
  name: string;
  defaultCountry?: string;
}

const PhoneInput: React.FC<Props> = ({ label, name, defaultCountry = "in" }) => {
  const [field, meta, helpers] = useField(name);
  const [isMounted, setIsMounted] = React.useState(false);

  const isError = meta.touched && !!meta.error;

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      
      {!isMounted ? (
        // Placeholder to prevent hydration mismatch
        <div 
          className={`w-full h-[42px] rounded-md border px-3 py-2 bg-white ${
            isError ? "border-red-500" : "border-gray-500"
          }`}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <span className="text-gray-400">Loading...</span>
        </div>
      ) : (
        <div suppressHydrationWarning>
          <ReactPhoneInput
            country={defaultCountry}
            value={field.value}
            onChange={(value) => helpers.setValue(value)}
            onBlur={() => helpers.setTouched(true)}
            inputClass={`w-full h-[42px] rounded-md ${
              isError ? "border-red-500" : "border-gray-500"
            }`}
            buttonClass={`${
              isError ? "border-red-500" : "border-gray-500"
            }`}
            containerClass="phone-input-container"
            dropdownClass="rounded-md"
            enableSearch
            inputProps={{
              autoComplete: "off",
              suppressHydrationWarning: true,
            }}
            inputStyle={{
              width: '100%',
              height: '42px',
              fontSize: '14px',
              borderColor: isError ? '#ef4444' : '#6b7280',
              borderRadius: '0.375rem',
            }}
            buttonStyle={{
              borderColor: isError ? '#ef4444' : '#6b7280',
              borderRadius: '0.375rem 0 0 0.375rem',
              backgroundColor: 'white',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </div>
      )}
      
      {isError && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
      
      <style jsx global>{`
        .phone-input-container .form-control:focus {
          border-color: ${isError ? '#ef4444' : ''} !important;
          box-shadow: ${isError ? 'none' : ''} !important;
          outline: none !important;
        }
        .phone-input-container .flag-dropdown:hover {
          border-color: #9ca3af !important;
        }
      `}</style>
    </div>
  );
};

export default PhoneInput;