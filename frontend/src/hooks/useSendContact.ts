import { useState } from "react";

interface ContactData {
  name: string;
  email: string;
  message: string;
}

export function useSendContact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendContact = async (data: ContactData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("https://apiback.kirazone.my.id/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email || "no-reply@example.com",
          message: data.message,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.error || "Failed to send message");
        setSuccess(false);
      } else {
        setSuccess(true);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const resetState = () => {
    setLoading(false);
    setError(null);
    setSuccess(false);
  };

  return { sendContact, loading, error, success, resetState };
}
