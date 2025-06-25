"use client";

import Button from "@/components/Button";
import Input from "@/components/form/Input";
import { useSnackbar } from "@/context/snackbar-context";
import type EmailListFormInput from "@/types/form/EmailListFormInput";
import removeSearchParam from "@/utils/removeSearchParam";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

const EmailListForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailListFormInput>();
  const searchParams = useSearchParams();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    const isSubscribed = searchParams.get("subscribed") === "true";
    if (isSubscribed) {
      showSnackbar("success", "thank you for subscribing!");
      removeSearchParam("subscribed");
    }
  }, [searchParams, showSnackbar]);

  const onSubmit: SubmitHandler<EmailListFormInput> = async (data) => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      showSnackbar("success", "confirmation email sent!");
      reset();
    } catch {
      showSnackbar("error", "something went wrong. please try again.");
    }
  };

  return (
    <div className="border-white/dim flex flex-col items-center border-y pt-12 pb-14 sm:pb-9.5">
      <h1 className="mb-6 text-center text-xl font-semibold">
        join my email list 🙂
      </h1>
      <form
        className="flex justify-center gap-1 max-sm:flex-col max-sm:items-center sm:gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="your email address"
          register={register}
          options={{
            required: {
              value: true,
              message: "please enter a valid email address",
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "please enter a valid email address",
            },
          }}
          errors={errors.email}
        />
        <Button type="submit" isSubmitting={isSubmitting}>
          sign up
        </Button>
      </form>
    </div>
  );
};

export default EmailListForm;
