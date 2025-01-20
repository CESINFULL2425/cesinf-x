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
import talks from "@/data/talks.json";
import hours from "@/data/hours.json";

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
    <div className="dark rounded-md border bg-popover w-[320px] sm:w-fit xl:w-[1250px]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Hora</TableHead>
            <TableHead className="text-center md:text-left">Día 30</TableHead>
            <TableHead className="text-center md:text-left">Día 31</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hours.map(({ id, completeHour, hour }) => (
            <TableRow key={hour}>
              <TableCell className="font-medium">
                {isMobile ? hour : completeHour}
              </TableCell>
              <TableCell className="text-center md:text-left">
                {(() => {
                  if (id === -1)
                    return <p className="text-neutral-500">Descanso</p>;
                  if (id === -2)
                    return <p className="text-neutral-500">Mesa redonda</p>;
                  return <TalkCard {...talks.day30[id]} />;
                })()}
              </TableCell>
              <TableCell className="text-center md:text-left">
                {(() => {
                  if (id === -1)
                    return <p className="text-neutral-500">Descanso</p>;
                  if (id === -2)
                    return <p className="text-neutral-500">Mesa redonda</p>;
                  return <TalkCard {...talks.day31[id]} />;
                })()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Calendar;
