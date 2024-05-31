"use client";

import {
  faArrowLeft,
  faArrowRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useShallow } from "zustand/react/shallow";

import useImagePreview from "lib/useImagePreview";

// STYLES

const StyledImageGallery = styled.div<{ $isOpen: boolean; $isHidden: boolean }>(
  ({ theme, $isOpen, $isHidden }) => css`
    position: fixed;
    z-index: ${theme.zIndex.modal};
    top: 0;
    left: 0;

    display: ${$isHidden ? "none" : "block"};

    width: 100vw;
    height: 100vh;

    background-color: ${theme.colors.black}77;
    backdrop-filter: blur(${theme.spacings.xxs});

    animation: ${$isOpen ? "fade-in" : "fade-out"} ${theme.timings.fast} ease
      forwards;

    @keyframes fade-out {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }

    @keyframes fade-in {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  `,
);

const StyledCloseIcon = styled(FontAwesomeIcon)<{ $isOpen: boolean }>(
  ({ theme, $isOpen }) => css`
    cursor: pointer;

    position: relative;
    z-index: ${theme.zIndex.modalControl};

    float: right;

    margin: 2rem;

    font-size: ${theme.spacings.xxxl};
    color: ${theme.colors.white};

    transition: all ${theme._timings.Link.transitionSpeed} ease;

    &:hover {
      transform: scale(1.1);
      color: ${theme._colors.Link.hoverColor};
    }

    ${!$isOpen && `display: none;`}
  `,
);

const StyledImageContainer = styled.div<{
  $imageCount: number;
  $currentIndex: number;
}>(
  ({ theme, $imageCount, $currentIndex }) => css`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(${$imageCount} * 100vw);
    height: 100vh;
    margin-left: calc(${$currentIndex} * 100vw * -1);
    padding-top: 7rem;
    padding-bottom: 7rem;

    transition: margin-left ${theme.timings.fast} ease;
  `,
);

const StyledNavButton = styled(FontAwesomeIcon)<{
  $direction: "next" | "previous";
}>(
  ({ theme, $direction }) => css`
    cursor: pointer;

    position: absolute;
    z-index: ${theme.zIndex.modalControl};
    top: 50%;

    padding: ${theme.spacings.m};

    font-size: ${theme.spacings.xxl};
    color: ${theme.colors.black};

    background-color: ${theme.colors.white};
    border-radius: ${theme.spacings.xxxl};

    transition: all ${theme._timings.Link.transitionSpeed} ease;

    ${$direction === "next" &&
    css`
      right: ${theme.spacings.l};
    `}
    ${$direction === "previous" &&
    css`
      left: ${theme.spacings.l};
    `}

    &:hover {
      transform: scale(1.1);
      color: ${theme.colors.primary};
    }
  `,
);

const StyledImage = styled.div<{ $src: string; $title: string }>(
  ({ theme, $src, $title }) => css`
    position: relative;

    width: 100vw;
    height: 100%;

    background-image: url(${$src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    &::after {
      content: "${$title}";

      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      display: block;

      margin-bottom: calc(${theme.spacings.xxxl} * -1);
      padding: 0 ${theme.spacings.s};

      background-color: ${theme.colors.white};
    }
  `,
);

const FullScreenImageGallery = () => {
  // STATE
  const {
    currentIndex,
    isOpen,
    images,
    closeGallery,
    nextImage,
    previousImage,
  } = useImagePreview(
    useShallow((state) => ({
      currentIndex: state.currentIndex,
      isOpen: state.isOpen,
      images: state.images,
      closeGallery: state.closeGallery,
      nextImage: state.nextImage,
      previousImage: state.previousImage,
    })),
  );
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  // EVENT HANDLERS

  const handleCloseClick = () => closeGallery();

  const handleAnimationStart = (event: AnimationEvent) => {
    isOpen && event.animationName === "fade-in" && setIsHidden(false);
  };

  const handleAnimationEnd = (event: AnimationEvent) => {
    !isOpen && event.animationName === "fade-out" && setIsHidden(true);
  };

  const handleKeyDown = async (event: KeyboardEvent) => {
    if (!isOpen) return;

    if (event.key === "Escape") closeGallery();

    if (event.key === "ArrowRight") nextImage();

    if (event.key === "ArrowLeft") previousImage();
  };

  const handleNextClick = () => nextImage();

  const handlePreviousClick = () => previousImage();

  // EFFECT HOOKS

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    const currentElement = ref.current;
    currentElement?.addEventListener("animationstart", handleAnimationStart);
    currentElement?.addEventListener("animationend", handleAnimationEnd);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      currentElement?.removeEventListener(
        "animationstart",
        handleAnimationStart,
      );
      currentElement?.removeEventListener("animationend", handleAnimationEnd);
    };
  });

  useEffect(() => {
    if (!isOpen) {
      document.documentElement.style.overflowY = "auto";
    }
    if (isOpen) {
      setIsHidden(false);
      document.documentElement.style.overflowY = "hidden";
    }
  }, [isOpen]);

  // LOGIC

  const imageCount = images.length;

  const Images = images.map((image, index) => (
    <StyledImage key={index} $src={image.src} $title={image.title} />
  ));

  const hasNextImage = currentIndex < imageCount - 1;
  const hasPreviousImage = currentIndex > 0;

  // JSX

  return (
    <StyledImageGallery $isOpen={isOpen} $isHidden={isHidden} ref={ref}>
      <StyledCloseIcon
        icon={faClose}
        onClick={handleCloseClick}
        $isOpen={isOpen}
      />
      {hasPreviousImage && (
        <StyledNavButton
          icon={faArrowLeft}
          onClick={handlePreviousClick}
          $direction="previous"
        />
      )}
      {hasNextImage && (
        <StyledNavButton
          icon={faArrowRight}
          onClick={handleNextClick}
          $direction="next"
        />
      )}
      <StyledImageContainer
        $imageCount={imageCount}
        $currentIndex={currentIndex}
      >
        {Images}
      </StyledImageContainer>
    </StyledImageGallery>
  );
};

export default FullScreenImageGallery;
