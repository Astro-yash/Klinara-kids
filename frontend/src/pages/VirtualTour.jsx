import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { virtualTourSpots } from '../data/mock';

export const VirtualTour = () => {
  const [currentSpot, setCurrentSpot] = React.useState(0);

  const nextSpot = () => {
    setCurrentSpot((prev) => (prev + 1) % virtualTourSpots.length);
  };

  const prevSpot = () => {
    setCurrentSpot((prev) => (prev - 1 + virtualTourSpots.length) % virtualTourSpots.length);
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Virtual Tour</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our campus from the comfort of your home
          </p>
        </div>
      </section>

      {/* Main Tour Viewer */}
      <section className="px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={virtualTourSpots[currentSpot].image}
                  alt={virtualTourSpots[currentSpot].title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">{virtualTourSpots[currentSpot].title}</h2>
                  <p className="text-lg">{virtualTourSpots[currentSpot].description}</p>
                </div>
                
                {/* Navigation Buttons */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <Button
                    onClick={prevSpot}
                    size="icon"
                    className="bg-white/90 text-slate-800 hover:bg-white rounded-full w-12 h-12"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </Button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <Button
                    onClick={nextSpot}
                    size="icon"
                    className="bg-white/90 text-slate-800 hover:bg-white rounded-full w-12 h-12"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </Button>
                </div>

                {/* Spot Indicator */}
                <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full">
                  <span className="font-semibold text-slate-800">
                    {currentSpot + 1} / {virtualTourSpots.length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {virtualTourSpots.map((spot, index) => (
              <button
                key={spot.id}
                onClick={() => setCurrentSpot(index)}
                className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                  currentSpot === index ? 'border-klinara-teal shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={spot.image}
                  alt={spot.title}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                  <p className="text-white text-xs font-medium">{spot.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Visit CTA */}
      <section className="px-4 py-20 bg-gradient-to-r from-klinara-rose to-klinara-beige text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Like What You See?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule an in-person visit to experience our campus and meet our wonderful team
          </p>
          <Button size="lg" className="bg-white text-klinara-brown hover:bg-blue-50">
            Schedule Campus Visit
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};
