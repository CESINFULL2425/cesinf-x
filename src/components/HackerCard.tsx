import type { FC } from "react";
import { EvervaultCard } from "./ui/evervault-card";

export interface HackerCardProps {
  children: React.ReactNode;
  title: string;
  hours: string;
  purple?: boolean;
}

const HackerCard: FC<HackerCardProps> = ({
  children,
  title,
  hours,
  purple = true,
}) => (
  <div className="rounded-md border border-white/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[30rem]">
    <EvervaultCard text={title} purple={purple} />
    {children}
    <p className="text-sm border font-light border-white/[0.2] rounded-full mt-4 text-black text-white px-2 py-0.5">
      {hours}
    </p>
  </div>
);

export default HackerCard;
