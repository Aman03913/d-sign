"use client";
import React, { useEffect } from "react";
import LoginForm from "../components/form/LoginForm";
import { useAuth } from "@arcana/auth-react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { loading, isLoggedIn, connect, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log({ isLoggedIn, user });
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }, [isLoggedIn, user, router]);

  const onConnectClick = async () => {
    try {
      await connect();
    } catch (err) {
      console.log({ err });
      // Handle error
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='h-screen w-full mx-auto flex flex-col justify-center items-center'>
      <LoginForm />
      <div className='flex justify-center items-center flex-col z-10  relative -mt-[200px]'>
        <h1 className='text-3xl uppercase'>Sign in via web3</h1>
        <Button
          onClick={onConnectClick}
          variant='shadow'
          color='secondary'
        >
          Login with arcana
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
