import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
    return (
        <div className="flex items-center pt-30">
            <SignUp />
        </div>
    );
};

export default page;
