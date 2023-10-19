'use client';

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SettingsModal from "./SettingsModal";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import Button from "@/app/components/Button";

interface ChangeUserNameProps {
    user: any;
}

const ChangeUserName: React.FC<ChangeUserNameProps> = ({
    user
}) => {
    const router = useRouter();
    const [edit, setEdit] = useState<boolean>(false);
    const {
        watch,
        setValue,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: user?.name,
            phone: user?.phone,
            image: user?.image,
        }
    });

    const image = watch('image');

    const handleUpload = (result: any) => {
        setValue('image', result?.info?.secure_url, {
            shouldValidate: true,
        });
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        axios.post('/api/settings', data)
        .then(() => {
            router.refresh();
        })
        .catch(() => toast.error('Something went wrong!'))
        .finally(() => setEdit(false))
    }

    return ( 
        <div className="mt-[20px]">
            <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={() => setEdit(true)}>Edit</button>
            <SettingsModal 
                currentUser={user} 
                isOpen={edit}
                onClose={() => setEdit(false)}
            />
        </div>
     );
}
 
export default ChangeUserName;