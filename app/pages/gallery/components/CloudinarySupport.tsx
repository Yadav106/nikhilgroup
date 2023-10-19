'use client';

import { CldUploadButton } from "next-cloudinary";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiPhotograph } from "react-icons/hi";

const CloudinarySupport= () => {
    const handleUpload = (result: any) => {
        axios.post('/api/upload', {
            url: result?.info?.secure_url
        })
        .then(res => {
            console.log(res);
        })
    }

    return (
        <div>
            <CldUploadButton
                    options={{maxFiles: 1}}
                    onUpload={handleUpload}
                    uploadPreset="zidrmycz"
                    className="flex flex-col font-serif gap-[2px]"
                >
                <HiPhotograph size={50} className="text-sky-500" />
                <p className="text-sky-500">Upload</p>
            </CldUploadButton>
        </div>
    )
}

export default CloudinarySupport;