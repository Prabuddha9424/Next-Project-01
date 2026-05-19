import { events } from "@/lib/constant";
import EventCard from "./components/EventCard";
import ExploreButton from "./components/ExploreButton";

export default function Home() {
  return (
    <section>
      <h1 className="text-center">
        Welcome to Project-01 <br />
      </h1>
      <ExploreButton />

      <div className="mt-5 space-y-7">
        <h3>Features Events</h3>
        <ul>
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
