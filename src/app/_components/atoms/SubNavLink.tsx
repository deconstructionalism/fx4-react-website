"use client";

import { SubNavItemConfig } from "@/app/_config/nav.d";
import Link from "next/link";
import styled from "styled-components";

// STYLES

const StyledLink = styled(Link)``;

const SubNavLink = ({
  title,
  href,
  externalLink = false,
}: SubNavItemConfig) => {
  // LOGIC

  const target = externalLink ? "_blank" : "_self";
  const rel = externalLink ? "noopener noreferrer" : undefined;

  // JSX

  return (
    <StyledLink href={href} rel={rel} target={target}>
      {typeof title === "string" ? <span>{title}</span> : title}
    </StyledLink>
  );
};

export default SubNavLink;
