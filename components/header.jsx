import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
    ChevronDown,
    FileText,
    GraduationCap,
    LayoutDashboard,
    PenBox,
    StarsIcon,
} from "lucide-react";

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 border-b bg-background/80 dark:bg-[#18132a]/90 backdrop-blur-md shadow-sm transition-colors">
            <nav className="container mx-auto flex items-center justify-between h-16 py-2 px-4">
                {/* Logo and App Name */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/favicon.ico"
                        alt="Guidex Logo"
                        height={40}
                        width={40}
                        className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
                        priority
                    />
                    <span className="text-xl md:text-2xl font-bold text-[#6c47ff] dark:text-[#a991ff] tracking-tight drop-shadow-sm">
                        Guidex
                    </span>
                    <span className="hidden md:inline text-xs font-semibold text-gray-500 dark:text-gray-300 ml-1">
                        AI Career Guide
                    </span>
                </Link>
                {/* Navigation & Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button
                                variant="ghost"
                                className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-[#f3f0ff] dark:hover:bg-[#23203a] transition"
                            >
                                <LayoutDashboard className="h-5 w-5" />
                                <span className="hidden md:block font-medium">
                                    Industry Insights
                                </span>
                            </Button>
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-[#f3f0ff] dark:hover:bg-[#23203a] transition"
                                >
                                    <StarsIcon className="h-5 w-5" />
                                    <span className="hidden md:block font-medium">
                                        Growth Tools
                                    </span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="min-w-[180px] bg-white dark:bg-[#23203a] shadow-lg border dark:border-[#2d254d]"
                            >
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/resume"
                                        className="flex items-center gap-2 px-2 py-2 rounded hover:bg-[#f3f0ff] dark:hover:bg-[#2d254d] transition"
                                    >
                                        <FileText className="h-4 w-4" />
                                        <span>Build Resume</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/coverletter"
                                        className="flex items-center gap-2 px-2 py-2 rounded hover:bg-[#f3f0ff] dark:hover:bg-[#2d254d] transition"
                                    >
                                        <PenBox className="h-4 w-4" />
                                        <span>Write Cover Letter</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/interview"
                                        className="flex items-center gap-2 px-2 py-2 rounded hover:bg-[#f3f0ff] dark:hover:bg-[#2d254d] transition"
                                    >
                                        <GraduationCap className="h-4 w-4" />
                                        <span>Interview Prep</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <Button
                                variant="outline"
                                className="ml-2 border-[#6c47ff] text-[#6c47ff] dark:border-[#a991ff] dark:text-[#a991ff] hover:bg-[#6c47ff] hover:text-white dark:hover:bg-[#a991ff] dark:hover:text-[#18132a] transition"
                            >
                                Sign In
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <div className="ml-2">
                            <UserButton
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox:
                                            "ring-2 ring-[#6c47ff] dark:ring-[#a991ff]",
                                    },
                                }}
                            />
                        </div>
                    </SignedIn>
                </div>
            </nav>
        </header>
    );
};

export default Header;
