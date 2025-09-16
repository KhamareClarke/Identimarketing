import { FC } from "react";

const TRUST_BADGES = [
  {
    name: "Meta Business Partner",
    img: "/badges/meta-business-partner.svg",
    alt: "Meta Business Partner Badge"
  }
];

export const TrustBadges: FC = () => (
  <section className="w-full py-4 bg-background/70">
    <div className="container flex flex-wrap justify-center items-center gap-6 sm:gap-10">
      {TRUST_BADGES.map((badge) => (
        <img
          key={badge.name}
          src={badge.img}
          alt={badge.alt}
          className="h-10 sm:h-12 w-auto grayscale hover:grayscale-0 transition duration-300 drop-shadow-md"
          loading="lazy"
        />
      ))}
    </div>
  </section>
);
