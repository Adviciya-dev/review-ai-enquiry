"use client";

import React from "react";
import { useField, FieldHookConfig } from "formik";
import { Upload } from "lucide-react";

interface Props {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    accept?: string;
    multiple?: boolean;
}

const FormInput: React.FC<Props> = ({ label, type, multiple, accept, placeholder, name }) => {
    const [field, meta, helpers] = useField(name);

    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const isError = meta.touched && !!meta.error;

    const handleFileClick = () => {
        fileInputRef.current?.click();
    };




    return (
        <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>

            {type === "file" ? (
                <div className="relative">

                    <input
                        ref={fileInputRef}
                        id={name}
                        name={name}
                        type="file"
                        multiple={multiple}
                        accept={accept}
                        className="hidden"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (!e.target.files || e.target.files.length === 0) return;

                            if (multiple) {
                                const filesArray = Array.from(e.target.files);
                                helpers.setValue([...(field.value || []), ...filesArray]);
                            } else {
                                helpers.setValue(e.target.files[0]);
                            }

                            helpers.setTouched(true);
                        }}
                    />


                    <div
                        onClick={handleFileClick}
                        className={`flex items-center justify-between border rounded-md px-3 py-2 h-[42px] bg-white cursor-pointer hover:border-gray-400 transition ${isError
                            ? "border-red-500"
                            : "border-gray-500 "
                            }`}
                    >
                        <span className="text-gray-700">
                            {field.value
                                ? Array.isArray(field.value)
                                    ? `${field.value.length} files selected`
                                    : field.value.name
                                : "Choose file"}
                        </span>
                        <Upload className="w-5 h-5 text-gray-500 flex-shrink-0 ml-2" />
                    </div>
                </div>
            ) : (
                <input
                    id={name}
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    className={`w-full px-3 py-2 border rounded-md h-[42px] focus:outline-none ${isError ? "border-red-500" : "border-gray-500 "
                        }`}
                />
            )}

            {/* Error message */}
            {isError && <div className="text-red-500 text-sm mt-1">{meta.error}</div>}
        </div>
    );
};

export default FormInput;