const API_KEY: string = process.env.KIT_API_KEY!;
const FORM_ID: string = process.env.KIT_FORM_ID!;

const BASE_URL: string = "https://api.kit.com/v4";

/**
 * Call Kit's v4 endpoint to create a subscriber endpoint.
 *
 * @see https://developers.kit.com/api-reference/subscribers/create-a-subscriber
 * @param email - The email address to be created.
 * @returns The HTTP response.
 */
export const createSubscriber = (email: string) =>
  fetch(`${BASE_URL}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": API_KEY,
    },
    body: JSON.stringify({
      email_address: email,
      state: "inactive",
    }),
  });

/**
 * Call Kit's v4 endpoint to add subscriber to form by email address.
 *
 * @see https://developers.kit.com/api-reference/forms/add-subscriber-to-form-by-email-address
 * @param email - The email address to be added.
 * @returns The HTTP response.
 */
export const addSubscriberToForm = (email: string) =>
  fetch(`${BASE_URL}/forms/${FORM_ID!}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": API_KEY,
    },
    body: JSON.stringify({
      email_address: email,
    }),
  });
