import "./_styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ThemeProvider from "./_components/providers/ThemeProvider";
import metadataConfig from "./_config/metaData";
import StyledComponentsRegistry from "./_components/providers/StyledComponentsRegistry";
import BodyTemplateProvider from "./_components/providers/BodyTemplateProvider";
import HTML from "./_components/organisms/HTML";

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
        <HTML>
          <BodyTemplateProvider>{children}</BodyTemplateProvider>
        </HTML>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default RootLayout;
