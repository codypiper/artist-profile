import type EmailListFormInput from "@/types/form/EmailListFormInput";
import { addSubscriberToForm, createSubscriber } from "@/utils/kit-api";
import { type NextRequest, NextResponse } from "next/server";

/**
 * Handles email subscription by creating a subscriber and then sending a confirmation
 * email to the subscriber. If either Kit API call fails, then the resulting HTTP
 * response reflects that.
 *
 * @param req - The request body.
 * @returns - The HTTP response.
 */
export const POST = async (req: NextRequest) => {
  const { email }: EmailListFormInput = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    let response = await createSubscriber(email);
    let data = await response.json();
    if (!response.ok) {
      return NextResponse.json(
        { error: data?.message || "Failed to subscribe" },
        { status: response.status },
      );
    }

    response = await addSubscriberToForm(email);
    data = await response.json();
    if (!response.ok) {
      return NextResponse.json(
        { error: data?.message || "Failed to add subscriber to form" },
        { status: response.status },
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
};
