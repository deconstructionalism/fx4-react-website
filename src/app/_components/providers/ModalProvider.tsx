"use client";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useShallow } from "zustand/react/shallow";

import { generateMediaQuery } from "@/app/_lib/themeHelpers";
import useModal from "@/app/_lib/useModal";

// STYLES

const StyledModalBackdrop = styled.div<{
  $isOpen: boolean;
  $isHidden: boolean;
}>(
  ({ theme, $isOpen, $isHidden }) => css`
    position: fixed;
    z-index: ${theme.zIndex.modal};
    top: 0;
    left: 0;

    display: ${$isHidden ? "none" : "block"};

    width: 100vw;
    height: 100vh;

    background-color: ${theme.colors.black}77;
    backdrop-filter: blur(${theme.spacings.xs});

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

const StyledModalContainer = styled.div(
  ({ theme }) => css`
    position: absolute;
    right: 0;
    left: 0;

    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: ${theme._spacings.ModalProvider.maxWidth};
    max-height: calc(
      100vh - (2 * ${theme._spacings.ModalProvider.verticalMargin})
    );
    margin: ${theme._spacings.ModalProvider.verticalMargin} auto;

    background: ${theme.colors.white};
  `,
);

const StyledCloseIcon = styled(FontAwesomeIcon)<{ $isOpen: boolean }>(
  ({ theme, $isOpen }) => css`
    cursor: pointer;

    position: absolute;
    z-index: ${theme.zIndex.imageGalleryControl};
    top: ${theme.spacings.s};
    right: ${theme.spacings.l};

    font-size: ${theme.spacings.xxxl};
    color: ${theme.colors.black};

    transition: all ${theme._timings.Link.transitionSpeed} ease;

    &:hover {
      transform: scale(1.1);
      color: ${theme._colors.Link.hoverColor};
    }

    ${!$isOpen && `display: none;`}
  `,
);

const ModalProvider = () => {
  // STATE

  const { isOpen, content, closeModal } = useModal(
    useShallow((state) => ({
      isOpen: state.isOpen,
      content: state.content,
      closeModal: state.closeModal,
    })),
  );
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  // EVENT HANDLERS

  const handleCloseClick = () => {
    closeModal();
  };

  const handleAnimationStart = (event: AnimationEvent) => {
    isOpen && event.animationName === "fade-in" && setIsHidden(false);
  };

  const handleAnimationEnd = (event: AnimationEvent) => {
    !isOpen && event.animationName === "fade-out" && setIsHidden(true);
  };

  const handleKeyDown = async (event: KeyboardEvent) => {
    if (!isOpen) return;

    if (event.key === "Escape") closeModal();
  };

  // EFFECTS HOOKS

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

  // JSX

  return (
    <StyledModalBackdrop $isOpen={isOpen} $isHidden={isHidden} ref={ref}>
      <StyledModalContainer>
        <StyledCloseIcon
          icon={faClose}
          onClick={handleCloseClick}
          $isOpen={isOpen}
        />
        {content}
      </StyledModalContainer>
    </StyledModalBackdrop>
  );
};

export default ModalProvider;
