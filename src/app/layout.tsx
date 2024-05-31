import "@fortawesome/fontawesome-svg-core/styles.css";
import { Suspense } from "react";

import BodyTemplateProvider from "providers/BodyTemplateProvider";
import PostHogProvider from "providers/PostHogProvider";
import PostHogPageView from "providers/PostHogProvider/PostHogPageView";
import StyledComponentsRegistry from "providers/StyledComponentsRegistry";

import HTML from "organisms/HTML";

import FullScreenImageGallery from "atoms/FullScreenImageGallery";

import metadataConfig from "config/metaData";

import ThemeProvider from "@/app/_components/providers/ThemeProvider";
import "@/app/_styles/globals.css";

// METADATA

export const metadata = metadataConfig;

// TYPES
interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  // JSX

  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        <PostHogProvider>
          <HTML>
            <Suspense>
              <PostHogPageView />
            </Suspense>
            <BodyTemplateProvider>
              {children}
              <FullScreenImageGallery />
            </BodyTemplateProvider>
          </HTML>
        </PostHogProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default RootLayout;
