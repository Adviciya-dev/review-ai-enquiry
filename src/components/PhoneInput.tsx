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
      <label className="block text-sm font-medium text-[#646060] mb-1">
        {label}
      </label>

      {!isMounted ? (
        <div
          className={`w-full h-[42px] rounded-md border px-3 py-2 bg-black ${
            isError ? "border-red-500" : "border-gray-500"
          }`}
          style={{ display: "flex", alignItems: "center" }}
        >
          <span className="text-gray-500">Loading...</span>
        </div>
      ) : (
        <div suppressHydrationWarning>
          <ReactPhoneInput
            country={defaultCountry}
            value={field.value}
            onChange={(value) => helpers.setValue(value)}
            onBlur={() => helpers.setTouched(true)}
            enableSearch
            inputProps={{
              autoComplete: "off",
              suppressHydrationWarning: true,
            }}
            inputClass={`w-full h-[42px] text-white placeholder-[#646060] rounded-md ${
              isError ? "border-red-500" : "border-[#6F4444]"
            }`}
            containerClass="phone-input-container"
            dropdownClass="phone-input-dropdown"
            inputStyle={{
              width: "100%",
              height: "42px",
              fontSize: "14px",
              borderColor: isError ? "#ef4444" : "#6F4444",
              borderRadius: "0.375rem",
              backgroundColor: "black",
              color: "white",
            }}
            buttonStyle={{
              borderColor: isError ? "#ef4444" : "#6F4444",
              borderRadius: "0.375rem 0 0 0.375rem",
              backgroundColor: "black",
            }}
            containerStyle={{
              width: "100%",
              backgroundColor: "black",
              borderRadius: "0.375rem",
            }}
          />
        </div>
      )}

      {isError && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}

      <style jsx global>{`
        .phone-input-container .form-control:focus {
          border-color: ${isError ? "#ef4444" : "#6F4444"} !important;
          box-shadow: none !important;
          outline: none !important;
          background-color: black !important;
          color: white !important;
          border-radius: 0.375rem !important;
        }

        .phone-input-container .flag-dropdown {
          background-color: black !important;
          border-radius: 0.375rem 0 0 0.375rem !important;
        }

        /* ✅ Dropdown menu styling */
        .phone-input-dropdown {
          background-color: black !important;
          color: white !important;
          border-radius: 0.375rem !important;
          border: 1px solid #6F4444 !important;
        }

        .phone-input-dropdown .country {
          color: white !important;
          background-color: black !important;
        }

        .phone-input-dropdown .country:hover,
        .phone-input-dropdown .country.highlight {
          background-color: #1a1a1a !important;
          color: white !important;
          border-radius: 0.375rem !important;
        }

        .phone-input-dropdown .search {
          background-color: #0d0d0d !important;
          color: white !important;
          border-color: #6F4444 !important;
        }

        .phone-input-dropdown .search-box {
          background-color: black !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default PhoneInput;
