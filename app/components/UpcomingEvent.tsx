'use client';

import React from "react";
import Countdown from "react-countdown";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import img1 from '@/public/images/4x (1).jpg';

interface Event {
  id: string;
  name: string;
  location: string;
  date: string;
  eventDate: Date;
  image: string | StaticImageData;
  link: string;
  logo: string;
}

const events: Event[] = [
  {
    id: "1",
    name: "Gulf News presents India Property Show",
    location: "Millennium Plaza Downtown Hotel, Sheikh Zayed Road - Dubai (Formerly known as Crowne Plaza Hotel)",
    date: "17-18 May 2025",
    eventDate: new Date("2025-05-17T00:00:00"),
    image: img1,
    link: "https://bahrain-maxpo-exhibitions.vercel.app/",
    logo: "/placeholder.svg?height=100&width=200",
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="relative w-full">
        <Link href={event.link}>
          <Image src={event.image} alt={event.name} width={550} height={300} />
        </Link>
      </div>
      <div className="p-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-3">{event.name}</h3>
        <div className="text-lg text-gray-600 mb-4 flex items-center">
  <div className="mr-3">
    <FaMapMarkerAlt className="text-blue-600" size={25} />
  </div>
  <Link
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    {event.location}
  </Link>
</div>

        <p className="text-lg text-gray-600 mb-4 flex items-center">
          <FaCalendarAlt className="mr-2" />
          {event.date}
        </p>
        <Countdown
          date={event.eventDate}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="flex justify-between text-center mb-8">
              <div className="bg-blue-100 rounded p-3">
                <div className="text-3xl font-bold text-blue-600">{days}</div>
                <div className="text-base text-blue-600">Days</div>
              </div>
              <div className="bg-blue-100 rounded p-3">
                <div className="text-3xl font-bold text-blue-600">{hours}</div>
                <div className="text-base text-blue-600">Hours</div>
              </div>
              <div className="bg-blue-100 rounded p-3">
                <div className="text-3xl font-bold text-blue-600">{minutes}</div>
                <div className="text-base text-blue-600">Minutes</div>
              </div>
              <div className="bg-blue-100 rounded p-3">
                <div className="text-3xl font-bold text-blue-600">{seconds}</div>
                <div className="text-base text-blue-600">Seconds</div>
              </div>
            </div>
          )}
        />
        <div className="flex justify-between items-center">
          <a
            href="/exhibitorregistration"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

const MultipleEventCountdown: React.FC = () => {
  return (
    <section className="py-16 bg-blue-950 flex justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Upcoming Events</h2>
        <div className="flex justify-center items-center">
          {events.map((event) => (
            <div key={event.id} className="w-full max-w-lg">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultipleEventCountdown;
