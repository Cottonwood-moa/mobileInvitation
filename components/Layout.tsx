import React from "react";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div>
      <div className="absolute z-20 flex h-20 w-full items-center justify-between bg-white px-6 text-2xl font-normal  shadow-md">
        <div className="relative flex items-center">
          <span>{title}</span>
        </div>
        <div className=" flex space-x-4 text-lg font-medium text-slate-800">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <span>Community</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            <span>LOGIN</span>
          </div>
        </div>
      </div>
      {children}
      <div className="flex h-[30vh] flex-col items-center justify-end">
        <div className="m-20 text-4xl font-normal">{title}</div>
        <div className="mb-12">
          Copyright ©2022 All rights reserved | by Cottonwood
        </div>
      </div>
    </div>
  );
}
