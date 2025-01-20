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
        <DialogDescription className="text-[#bbbbbb] text-balance">
          {description}
        </DialogDescription>
        <DialogFooter className="text-sm text-neutral-500">
          {speakers.join(", ")}
        </DialogFooter>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
export default TalkCard;
