"use client";

import Image from "next/image";
import P from "@/app/_components/atoms/P";

const About = () => {
  return (
    <section>
      <Image
        src="/images/poly-segmented.jpg"
        alt="Poly Styrene collage by Dave Fischer"
        title="Poly Styrene collage by Dave Fischer"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <P>
        Poly Styrene was born on July 3rd 1957, and grew up to head the
        indomitable force in the weird margins of UK punk known as X-Ray Spex.
        181 years earlier on July 4th 1776, the United States officiated the
        Declaration of Independence, birthing a country. That country went on to
        consolidate wealth and power through genocide, slavery, theft, and
        cultural erasure, leaving wounds so deep that today, they threaten to
        rip its constituent myths to shreds.
      </P>

      <P>
        So you wanna get black out drunk? Do you need to wave tiny flags and
        pledge allegiance to a myth that perpetuates the exploitation of the
        many for the benefit of the few? Fuck no.
      </P>

      <P>
        We’re here for those who work to take back our communities, our power,
        our future, our joy and our celebration. We say Fuck The Fourth.
        Let&apos;s celebrate July 3rd instead, Poly Styrene&apos;s birthday!
      </P>
    </section>
  );
};

export default About;
