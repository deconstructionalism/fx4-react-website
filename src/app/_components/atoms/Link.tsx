import { default as NextLink } from "next/link";
import styled, { css } from "styled-components";

const Link = styled(NextLink)(
  ({ theme }) => css`
    color: ${theme.colors.black};
    transition: color ${theme._timings.Link.transitionSpeed} ease;

    &:hover {
      color: ${theme._colors.Link.hoverColor};
    }
  `,
);

export default Link;
