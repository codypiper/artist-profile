"use client";

import Button from "@/components/Button";
import FormResponse from "@/components/form/FormResponse";
import Input from "@/components/form/Input";
import type EmailListFormInput from "@/types/form/EmailListFormInput";
import { useState } from "react";
import {
  type SubmitErrorHandler,
  type SubmitHandler,
  useForm,
} from "react-hook-form";

type FormState = "success" | "confirm" | "error" | "none";

interface EmailListFormProps {
  isSubscribed?: boolean;
}

const EmailListForm: React.FC<EmailListFormProps> = ({
  isSubscribed = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailListFormInput>();

  const initialFormState = isSubscribed ? "success" : "none";
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const onValidSubmit: SubmitHandler<EmailListFormInput> = async (data) => {
    setFormState("none");

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

      setFormState("confirm");
      reset();
    } catch {
      setFormState("error");
    }
  };

  const onInvalidSubmit: SubmitErrorHandler<EmailListFormInput> = () => {
    setFormState("none");
  };

  return (
    <div className="border-white/dim flex flex-col items-center border-y pt-14 pb-16 sm:pb-11.5">
      <h1 className="mb-6 text-center text-xl font-semibold">
        join my email list 🙂
      </h1>
      <form
        className="flex justify-center gap-1 max-sm:flex-col max-sm:items-center sm:gap-4"
        onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}
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
      <div className="mt-1 h-0 sm:-mt-3 sm:h-4">
        {formState === "success" && (
          <FormResponse type="success" message="thank you for subscribing!" />
        )}
        {formState === "confirm" && (
          <FormResponse type="success" message="confirmation email sent" />
        )}
        {formState === "error" && (
          <FormResponse
            type="error"
            message="something went wrong. please try again."
          />
        )}
      </div>
    </div>
  );
};

export default EmailListForm;
