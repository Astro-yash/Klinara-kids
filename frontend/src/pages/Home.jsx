import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { BookOpen, Users, Shield, Heart, Users2, Smile, ArrowRight, Star, Laptop } from 'lucide-react';
import { schoolInfo, programs, testimonials, features } from '../data/mock';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-klinara-rose/40 via-pastel-lavender/40 to-pastel-blue/40 opacity-70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Where Young Minds Are Nurtured with
                <span className="text-klinara-teal"> Care, Curiosity & Creativity</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                A thoughtfully designed early childhood learning space where children develop strong intellectual, emotional, 
                and social foundations through exploration, creativity, and meaningful experiences. Established in {schoolInfo.established} in {schoolInfo.location}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/admissions">
                  <Button size="lg" className="bg-klinara-teal hover:bg-klinara-teal-light text-white font-semibold">
                    Enroll Your Child
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-klinara-teal text-klinara-brown hover:bg-klinara-rose/20">
                    Schedule a Visit
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1759678444821-565ff103465c?w=800"
                  alt="Happy children learning"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Klinara Kids?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide a nurturing environment where children thrive academically, socially, and emotionally
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const icons = { BookOpen, Users, Shield, Heart, Users2, Smile, Laptop };
              const Icon = icons[feature.icon];
              return (
                <Card key={feature.id} className="border-2 hover:border-klinara-rose transition-all hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-pastel-mint to-pastel-blue rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-klinara-brown" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-klinara-beige/30 to-pastel-blue/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Programs</h2>
            <p className="text-lg text-slate-600">Age-appropriate curriculum designed for holistic development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {programs.map((program, index) => (
              <Card key={program.id} className="bg-white hover:shadow-xl transition-all group hover:-translate-y-1">
                <CardContent className="p-6 flex items-center justify-center min-h-[120px]">
                  <h3 className="text-lg font-bold text-slate-800 text-center leading-snug">{program.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/programs">
              <Button variant="outline" size="lg" className="border-klinara-teal text-klinara-brown hover:bg-klinara-rose/20">
                View All Programs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-klinara-rose to-klinara-beige text-klinara-brown">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Give Your Child the Best Start?</h2>
          <p className="text-xl mb-8 text-slate-600">
            Join the Klinara Kids family and watch your child flourish in a nurturing, value-based learning environment
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-white text-klinara-brown hover:bg-klinara-beige font-semibold">
                Start Admission Process
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-klinara-brown hover:bg-white/20">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
