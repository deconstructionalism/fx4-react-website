import "@fortawesome/fontawesome-svg-core/styles.css";
import { Suspense } from "react";

import BodyTemplateProvider from "providers/BodyTemplateProvider";
import FullScreenImageGalleryProvider from "providers/FullScreenImageGalleryProvider";
import ModalProvider from "providers/ModalProvider";
import PostHogProvider from "providers/PostHogProvider";
import PostHogPageView from "providers/PostHogProvider/PostHogPageView";
import StyledComponentsRegistry from "providers/StyledComponentsRegistry";
import ThemeProvider from "providers/ThemeProvider";

import HTML from "organisms/HTML";

import metadataConfig from "config/metaData";

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
              <FullScreenImageGalleryProvider />
              <ModalProvider />
            </BodyTemplateProvider>
          </HTML>
        </PostHogProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default RootLayout;
