import { useEffect, useState, type FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TalkCard from "./TalkCard";
import data from "@/data/talks.json";

type DataType = [
  { completeHour: string; hour: string },
  (
    | {
        type: undefined;
        smallTitle: string;
        title: string;
        description: string;
        speakers: string[];
      }
    | { type: "break" }
  ),
  (
    | {
        type: undefined;
        smallTitle: string;
        title: string;
        description: string;
        speakers: string[];
      }
    | { type: "break" }
  ),
][];

const typedData = data as DataType;

const Calendar: FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dark rounded-md border bg-popover w-full max-w-[1300px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Hora</TableHead>
            <TableHead className="text-center md:text-left">Día 30</TableHead>
            <TableHead className="text-center md:text-left">Día 31</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {typedData.map(([{ hour, completeHour }, talk1, talk2]) => (
            <TableRow key={completeHour}>
              <TableCell className="font-medium">
                {isMobile ? hour : completeHour}
              </TableCell>
              <TableCell className="text-center md:text-left">
                {talk1?.type === "break" ? (
                  <p className="text-neutral-500">Descanso</p>
                ) : (
                  <TalkCard {...talk1} />
                )}
              </TableCell>
              <TableCell className="text-center md:text-left">
                {talk2?.type === "break" ? (
                  <p className="text-neutral-500">Descanso</p>
                ) : (
                  <TalkCard {...talk2} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Calendar;
