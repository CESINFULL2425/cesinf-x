import Calendar from "@/components/Calendar.tsx";
import type { FC } from "react";

const EventCalendarView: FC = () => (
  <article
    id="calendar"
    className="flex justify-center items-center mb-[80px] w-full px-[20px] pt-[100px]"
  >
    <Calendar />
  </article>
);

export default EventCalendarView;
