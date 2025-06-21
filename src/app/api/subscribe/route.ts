import type EmailListFormInput from "@/types/form/EmailListFormInput";
import { type NextRequest, NextResponse } from "next/server";

/**
 * Handles email subscription by making a call to Kit's v4 Create a Subscriber
 * endpoint.
 *
 * @see {@link https://developers.kit.com/api-reference/subscribers/create-a-subscriber}
 * @param req - The request body.
 * @returns - The HTTP response.
 */
export const POST = async (req: NextRequest) => {
  const { email }: EmailListFormInput = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    // Call Kit's v4 create a subscriber endpoint
    const response = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": process.env.KIT_API_KEY!,
      },
      body: JSON.stringify({
        email_address: email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.message || "Failed to subscribe" },
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
