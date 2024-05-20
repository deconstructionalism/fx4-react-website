import { EventRow } from "@/app/_db/db";
import Button from "./Button";
import styled from "styled-components";
import Divider from "./Divider";

// STYLES

const StyledEventTicketButton = styled(Button)(
  ({ theme }) => `
  width: 90%;
  margin: ${theme.spacings.xs} auto;
`,
);

interface EventTicketButtonProps {
  data: EventRow;
}

const EventTicketButton = ({ data }: EventTicketButtonProps) => {
  // EVENT HANDLERS

  const handleEventTicketButtonClick = (href: string) => {
    window.open(href, "_blank");
  };

  // JSX
  if (!data?.ticketLink) return null;

  return (
    <>
      <StyledEventTicketButton
        onClick={handleEventTicketButtonClick.bind(null, data.ticketLink.href)}
        title={data.ticketLink.title}
      >
        {data.ticketLink.title}
      </StyledEventTicketButton>
      <Divider />
    </>
  );
};

export default EventTicketButton;
