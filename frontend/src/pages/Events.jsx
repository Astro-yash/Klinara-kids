import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, MapPin, Users } from 'lucide-react';
import { events } from '../data/mock';

export const Events = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Events & News</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with upcoming events, celebrations, and news from Klinara Kids
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden border-2 hover:border-klinara-rose transition-all hover:shadow-xl group">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-klinara-teal text-white">
                      {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{event.title}</h3>
                    <p className="text-slate-600">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="px-4 py-20 mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Latest Announcements</h2>
          <div className="space-y-6">
            {[
              {
                date: "December 10, 2025",
                title: "Admissions Open for 2026",
                content: "We are now accepting applications for all programs starting January 2026. Limited seats available!",
              },
              {
                date: "December 5, 2025",
                title: "Winter Break Schedule",
                content: "The school will be closed from December 24, 2025 to January 5, 2026 for winter break.",
              },
              {
                date: "November 28, 2025",
                title: "Parent-Teacher Meeting",
                content: "Monthly parent-teacher interaction sessions scheduled for the first week of every month.",
              },
            ].map((announcement, idx) => (
              <Card key={idx} className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{announcement.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{announcement.title}</h3>
                  <p className="text-slate-600">{announcement.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
