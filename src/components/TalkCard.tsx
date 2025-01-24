import type { FC } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";

export interface TalkCardProps {
  smallTitle: string;
  title: string;
  description: string;
  speakers: string[];
}

const TalkCard: FC<TalkCardProps> = ({
  smallTitle,
  title,
  description,
  speakers,
}) => (
  <Dialog>
    <DialogTrigger className="hover:underline pointer">
      {smallTitle}
    </DialogTrigger>
    <DialogContent className="bg-black">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription className="text-[#bbbbbb] text-balance font-medium">
          {description}
        </DialogDescription>
        <DialogFooter className="text-sm text-neutral-500">
          <ul className="flex flex-row flex-wrap w-full gap-x-1 justify-center sm:justify-start">
            {speakers.map((speaker, i) => {
              if (i === speakers.length - 1)
                return (
                  <li>
                    <small key={speaker} className="text-nowrap">
                      {speaker}
                    </small>
                  </li>
                );
              return (
                <li>
                  <small key={speaker} className="text-nowrap">
                    {speaker},{" "}
                  </small>
                </li>
              );
            })}
          </ul>
        </DialogFooter>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
export default TalkCard;
