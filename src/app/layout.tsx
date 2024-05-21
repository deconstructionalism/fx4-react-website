import "./_styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ThemeProvider from "./_components/providers/ThemeProvider";
import metadataConfig from "./_config/metaData";
import StyledComponentsRegistry from "./_components/providers/StyledComponentsRegistry";
import BodyTemplateProvider from "./_components/providers/BodyTemplateProvider";
import HTML from "./_components/organisms/HTML";
import PostHogProvider from "./_components/providers/PostHogProvider";
import PostHogPageView from "./_components/providers/PostHogProvider/PostHogPageView";
import { Suspense } from "react";

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
            <BodyTemplateProvider>{children}</BodyTemplateProvider>
          </HTML>
        </PostHogProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default RootLayout;
