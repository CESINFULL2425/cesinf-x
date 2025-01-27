import type { FC } from "react";
import HackerCard from "./HackerCard";
import MeteordCard from "./MeteorCard";

const Activities: FC = () => (
  <div className="flex gap-4 w-full max-w-[1300px] justify-center md:justify-between flex-wrap">
    <HackerCard title="Hackathon" hours="Miércoles 13:00-14:00">
      <p className="text-white mt-4 text-sm font-light">
        <a
          className="text-sm text-[#217dda] font-bold"
          href="https://forms.gle/4PssAMnwEmAzkKGs9"
        >
          Inscribete
        </a>{" "}
        en la Hackathon del CESINF, una competencia en parejas para resolver
        desafíos.
      </p>
    </HackerCard>
    <MeteordCard title="Busqueda del tesoro" hours="Viernes 13:30 - 15:00">
      <p className="text-white mt-4 text-sm font-light">
        Disfruta de una emocionante búsqueda del tesoro llena de desafíos para
        descubrir grandes sorpresas.
      </p>
    </MeteordCard>
    <HackerCard title="Arcade" hours="Todo el evento" purple={false}>
      <p className="text-white mt-4 text-sm font-light">
        Revive la nostalgia y la diversión con nuestra zona de Arcade Retro,
        ubicada fuera del Aula Magna.
      </p>
    </HackerCard>
  </div>
);
// https://forms.gle/4PssAMnwEmAzkKGs9

export default Activities;
