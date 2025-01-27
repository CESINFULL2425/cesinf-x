import Activities from "@/components/Activities";
import Calendar from "@/components/Calendar.tsx";
import type { FC } from "react";

const EventCalendarView: FC = () => (
  <article
    id="calendar"
    className="flex flex-col gap-4 justify-center items-center mb-[80px] w-full px-[20px] pt-[100px]"
  >
    <Calendar />
    <Activities />
  </article>
);

export default EventCalendarView;
