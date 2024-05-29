import { default as NextImage } from "next/image";
import { ComponentProps } from "react";
import styled, { css } from "styled-components";

// STYLES

const StyledImageTitleContainer = styled.div<{
  $width?: number | `${number}`;
  $height?: number | `${number}`;
}>(
  ({ $width, $height }) => css`
    display: flex;
    flex-direction: column;
    width: ${$width || "100%"};
    height: ${$height || "100%"};
  `,
);

const StyledImageTitle = styled.p(
  ({ theme }) => css`
    font-family: ${theme.fonts.body};
    font-style: italic;
    text-align: right;
  `,
);

interface ImageProps extends ComponentProps<typeof NextImage> {
  className?: string;
  includeTitle?: boolean;
}

const Image = (props: ImageProps) => {
  // DATA

  const {
    className,
    includeTitle = false,
    width,
    height,
    ...imageProps
  } = props;

  // JSX

  return (
    <StyledImageTitleContainer
      className={className}
      $width={width}
      $height={height}
    >
      <NextImage
        width={0}
        height={0}
        sizes="100vw"
        {...imageProps}
        style={{ height: "auto", width: "100%" }}
      />
      {includeTitle && imageProps.title && (
        <StyledImageTitle>{props.title}</StyledImageTitle>
      )}
    </StyledImageTitleContainer>
  );
};

export default Image;
