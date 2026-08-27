import { useEffect, useState } from "react";

const formatter = (timeZone: string) =>
  new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

/** Returns a live-updating "hh:mm:ss AM/PM" string for the given timezone. */
export function useLiveClock(timeZone: string) {
  const [time, setTime] = useState(() => formatter(timeZone).format(new Date()));

  useEffect(() => {
    const fmt = formatter(timeZone);
    const id = setInterval(() => setTime(fmt.format(new Date())), 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}
