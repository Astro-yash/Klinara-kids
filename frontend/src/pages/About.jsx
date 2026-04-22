import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { BookOpen, Users, Heart, Award } from 'lucide-react';
import { schoolInfo } from '../data/mock';

export const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">About Klinara Kids</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A thoughtfully designed early childhood learning space where young minds are nurtured with care, curiosity, and creativity
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1574130303188-31a915382726?w=800"
                alt="Classroom"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Welcome to Klinara Kids</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Klinara Kids is a thoughtfully designed early childhood learning space where young minds are nurtured with care, curiosity, and creativity. We believe the early years of a child's life are the most important for building strong intellectual, emotional, and social foundations.
                </p>
                <p>
                  At Klinara Kids, learning goes beyond books. Our approach combines activity-based learning, real-world exploration, and modern technology to help children understand concepts through experience rather than memorization.
                </p>
                <p>
                  We encourage children to explore, ask questions, and think independently. Through meaningful activities, practical experiences, and guided discovery, we nurture confident learners who develop strong values, discipline, and curiosity about the world around them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 py-20 bg-klinara-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Klinara Kids was founded with a vision to create a preschool where learning is joyful, meaningful, and deeply rooted in real-life experiences.
                </p>
                <p>
                  The inspiration behind Klinara Kids comes from the belief that children should not simply memorize information but truly understand the world around them. By combining traditional values with modern learning methods, Klinara Kids aims to create an environment where children grow into thoughtful, confident, and responsible individuals.
                </p>
                <p>
                  Every program and activity at Klinara Kids is carefully designed to nurture curiosity, encourage creativity, and build a strong foundation for lifelong learning.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?w=800"
                alt="Children learning"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-20 bg-gradient-to-br from-klinara-beige/30 to-klinara-rose/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-klinara-golden to-klinara-beige rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-klinara-brown" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
                <p className="text-slate-600">
                  To create a nurturing and inspiring learning environment where children develop strong intellectual, social, and emotional foundations through exploration, creativity, and meaningful experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-klinara-rose to-klinara-pink rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-klinara-brown" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
                <p className="text-slate-600">
                  To empower young learners to become confident thinkers, compassionate individuals, and future innovators who are prepared to explore the world with curiosity and courage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="border-2 hover:border-klinara-rose transition-all hover:shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-klinara-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-klinara-brown" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Respect</h3>
                <p className="text-sm text-slate-600">Teaching children to value others, respect elders, and appreciate diversity</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-klinara-rose transition-all hover:shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-klinara-rose rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-klinara-brown" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Curiosity</h3>
                <p className="text-sm text-slate-600">Encouraging children to ask questions and explore the world around them</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-klinara-teal-light transition-all hover:shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-klinara-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-klinara-brown" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Responsibility</h3>
                <p className="text-sm text-slate-600">Helping children develop independence and accountability in their daily habits</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-klinara-golden transition-all hover:shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-klinara-golden rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-klinara-brown" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Creativity</h3>
                <p className="text-sm text-slate-600">Providing opportunities for imagination, expression, and innovative thinking</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-klinara-rose transition-all hover:shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-klinara-rose rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-klinara-brown" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Kindness</h3>
                <p className="text-sm text-slate-600">Building empathy, compassion, and positive relationships with others</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Approach */}
      <section className="px-4 py-20 bg-gradient-to-br from-klinara-rose/30 to-klinara-beige/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Curriculum Approach</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  At Klinara Kids, our curriculum is designed around experiential and activity-based learning.
                </p>
                <p>
                  Children learn through observation, exploration, and hands-on experiences rather than passive instruction. Concepts are introduced through interactive activities that help children understand ideas in a meaningful and memorable way.
                </p>
                <p>
                  For example, instead of simply learning about plants through pictures, children participate in planting seeds, watering plants, and observing the stages of growth.
                </p>
                <p>
                  Our curriculum also integrates creative arts, nature exploration, storytelling, and problem-solving activities, helping children develop critical thinking skills and a love for learning.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1761208663763-c4d30657c910?w=800"
                alt="Children exploring"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
