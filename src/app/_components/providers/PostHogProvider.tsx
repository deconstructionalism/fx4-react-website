"use client";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

interface PHProviderProps {
  children: React.ReactNode;
}

const PostHogProvider = ({ children }: PHProviderProps) => {
  // LOGIC

  if (typeof window !== "undefined") {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
    });
  }

  // JSX
  return <PHProvider client={posthog}>{children}</PHProvider>;
};

export default PostHogProvider;
