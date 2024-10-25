'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Submission() {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-md">
                <h2 className="text-3xl font-bold mb-4 text-[#38B6FF]">Submission Successful!</h2>
                <p className="text-xl text-gray-700 mb-6">
                    Thanks for submitting your details. We will contact you soon!
                </p>
                <div className="flex justify-center mb-4">
                    <Image
                        height={1000}
                        width={1000}
                        src="https://media.istockphoto.com/id/1094780808/vector/approval-symbol-check-mark-in-a-circle-drawn-by-hand-vector-green-sign-ok-approval-or.jpg?s=612x612&w=0&k=20&c=0mlB50r769kHmLkVcq_HpdNFGdHIA_Cu_tPqN4IKZbc=" 
                        alt="Thank You" 
                        className="rounded-full w-40 h-40"
                    />
                </div>
                <button 
                    onClick={() => router.push('/')}  
                    className="mt-4 px-6 py-2 bg-[#38B6FF] text-white rounded-lg hover:bg-green-500 transition duration-300 transform hover:scale-105"
                >
                    Go Back to Home
                </button>
            </div>
        </div>
    );
}

export default Submission;
