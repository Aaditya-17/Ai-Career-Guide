import React from "react";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";

const Header = () => {
    return (
        <header className="w-full bg-white dark:bg-[#18132a] shadow-md dark:shadow-lg transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo / App Name */}
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#6c47ff] tracking-tight drop-shadow-sm">
                        Guidex
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-300 font-semibold ml-1 hidden sm:inline">
                        AI Career Guide
                    </span>
                </div>
                {/* Navigation */}
                <nav className="flex gap-6">
                    <a
                        href="/"
                        className="text-gray-700 dark:text-gray-200 hover:text-[#6c47ff] dark:hover:text-[#a991ff] font-medium transition"
                    >
                        Home
                    </a>
                    <a
                        href="/resources"
                        className="text-gray-700 dark:text-gray-200 hover:text-[#6c47ff] dark:hover:text-[#a991ff] font-medium transition"
                    >
                        Resources
                    </a>
                    <a
                        href="/about"
                        className="text-gray-700 dark:text-gray-200 hover:text-[#6c47ff] dark:hover:text-[#a991ff] font-medium transition"
                    >
                        About
                    </a>
                </nav>
                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    <SignedOut>
                        <SignInButton>
                            <button className="bg-transparent border border-[#6c47ff] text-[#6c47ff] dark:border-[#a991ff] dark:text-[#a991ff] rounded-full font-medium text-sm px-4 py-2 hover:bg-[#6c47ff] hover:text-white dark:hover:bg-[#a991ff] dark:hover:text-[#18132a] transition">
                                Sign In
                            </button>
                        </SignInButton>
                        <SignUpButton>
                            <button className="bg-[#6c47ff] text-white dark:bg-[#a991ff] dark:text-[#18132a] rounded-full font-medium text-sm px-4 py-2 hover:bg-[#5436cc] dark:hover:bg-[#6c47ff] transition">
                                Sign Up
                            </button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox:
                                        "ring-2 ring-[#6c47ff] dark:ring-[#a991ff]",
                                },
                            }}
                        />
                    </SignedIn>
                </div>
            </div>
        </header>
    );
};

export default Header;
