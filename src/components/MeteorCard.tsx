import type { FC } from "react";
import { Meteors } from "./ui/meteors";

export interface MeteorCardProps {
  children: React.ReactNode;
  title: string;
  hours: string;
}

const MeteordCard: FC<MeteorCardProps> = ({ title, hours, children }) => (
  <div className="relative w-full h-[30rem] max-w-sm">
    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full" />
    <div className="relative bg-gray-900 border border-gray-800 p-4 h-full overflow-hidden rounded-md flex flex-col justify-start items-start">
      <div className="h-full w-full flex items-center justify-center">
        <h1 className="font-bold text-center text-4xl text-white mb-4">
          {title}
        </h1>
      </div>
      {children}
      <p className="text-sm border font-light border-white/[0.2] rounded-full mt-4 text-black text-white px-2 py-0.5">
        {hours}
      </p>
      <Meteors number={20} />
    </div>
  </div>
);

export default MeteordCard;
