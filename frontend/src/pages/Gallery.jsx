import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { X } from 'lucide-react';
import { gallery } from '../data/mock';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Photo Gallery</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Glimpses of learning, fun, and growth at Klinara Kids
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {gallery.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-klinara-rose cursor-pointer transition-all hover:shadow-xl group"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </Button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Categories Section */}
      <section className="px-4 py-20 mt-20 bg-gradient-to-br from-klinara-beige/30 to-klinara-rose/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Explore Our Campus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Classroom Activities",
                desc: "Interactive learning sessions and creative workshops",
                image: "https://images.unsplash.com/photo-1574130303188-31a915382726?w=600",
              },
              {
                title: "Outdoor Play",
                desc: "Fun and safe outdoor activities for physical development",
                image: "https://images.unsplash.com/photo-1587825140632-6fb7ad9dfafc?w=600",
              },
              {
                title: "Cultural Events",
                desc: "Celebrations and performances throughout the year",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
              },
            ].map((category, idx) => (
              <Card key={idx} className="overflow-hidden border-0 shadow-lg group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-sm text-white/90">{category.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
