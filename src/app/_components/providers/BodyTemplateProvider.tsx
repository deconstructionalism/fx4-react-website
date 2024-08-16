"use client";

import { useSelectedLayoutSegments } from "next/navigation";

import FullPageTemplate from "templates/FullPageTemplate";
import NotFoundTemplate from "templates/NotFoundTemplate";
import PageTemplate from "templates/PageTemplate";

interface BodyTemplateProviderProps {
  children: React.ReactNode;
}

// HELPER FUNCTIONS

/**
 * Helper function to choose the body template based on the URL segments.
 * @param segments - The URL segments.
 * @returns the body template.
 */
const chooseBodyTemplate = (segments: string[]) => {
  if (segments.length === 0) {
    return FullPageTemplate;
  }

  if (segments[0] === "/_not-found") {
    return NotFoundTemplate;
  }

  if (segments[0] === "donation-summary") {
    return FullPageTemplate;
  }

  return PageTemplate;
};

const BodyTemplateProvider = ({ children }: BodyTemplateProviderProps) => {
  // LOGIC

  const segments = useSelectedLayoutSegments();
  const BodyTemplate = chooseBodyTemplate(segments);

  // JSX

  return <BodyTemplate>{children}</BodyTemplate>;
};

export default BodyTemplateProvider;
