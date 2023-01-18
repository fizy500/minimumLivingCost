import React from "react";
import { useDropzone } from "React-dropzone";
export default function Dropzone({ open }) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <div
      {...getRootProps({
        className:
          "dropzone space-y-3 bg-[rgba(244,81,30,0.01)] outline-none border-2 border-dashed border-[#F4511E] rounded-[5px]  w-full py-[40px] flex flex-col justify-center items-center space-y-2 mt-1 cursor-pointer font-fontpoppins",
      })}
    >
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center dropzone-content">
        <p className="font-bold text-base">
          <span className="text-black ">Drag your images here, or </span>
          <span className="text-[#F4511E]">browse</span>
        </p>
        <p className="font-medium text-xs text-[rgba(0,0,0,0.5)]">
          Supported: JPG, JPEG, PNG
        </p>
        <aside>
          <ul className="font-medium text-xs text-black opacity-3">{files}</ul>
        </aside>
      </div>
    </div>
  );
}
