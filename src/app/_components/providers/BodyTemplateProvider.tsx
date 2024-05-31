"use client";

import { useSelectedLayoutSegments } from "next/navigation";

import LandingTemplate from "templates/LandingTemplate";
import NotFoundTemplate from "templates/NotFoundTemplate";
import PageTemplate from "templates/PageTemplate";

interface BodyTemplateProviderProps {
  children: React.ReactNode;
}

const BodyTemplateProvider = ({ children }: BodyTemplateProviderProps) => {
  // LOGIC

  const segments = useSelectedLayoutSegments();
  const BodyTemplate =
    segments.length === 0
      ? LandingTemplate
      : segments[0] === "/_not-found"
        ? NotFoundTemplate
        : PageTemplate;

  // JSX

  return <BodyTemplate>{children}</BodyTemplate>;
};

export default BodyTemplateProvider;
