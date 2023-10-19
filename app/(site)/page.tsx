'use client';

import Image from "next/image";
import AuthForm from "./components/AuthForm";
import './style.css';
import { useState } from "react";

type Variant = 'LOGIN' | 'REGISTER'

export default function Home() {
  const [variant, setVariant] = useState<Variant>('LOGIN')
    return (
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 main-login-page">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
                alt="logo"
                height="100"
                width="100"
                className="mx-auto w-auto"
                src="/images/logo.png"
            />
            <h2
                className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
            >
              {
                variant === 'LOGIN' ? `Login to your Account` :  `SignUp to your Account`
              }
            </h2>
        </div>
        <AuthForm variant={variant} setVariant={setVariant}/>
      </div>
    )
  }