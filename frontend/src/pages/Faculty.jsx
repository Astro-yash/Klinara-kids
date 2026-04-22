import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Award, GraduationCap, Heart } from 'lucide-react';
import { faculty, testimonials } from '../data/mock';

export const Faculty = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Meet Our Faculty</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experienced, caring educators dedicated to nurturing your child's growth and development
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member) => (
              <Card key={member.id} className="border-2 hover:border-klinara-rose transition-all hover:shadow-xl group">
                <CardContent className="p-6 text-center">
                  <div className="mb-6 relative">
                    <Avatar className="w-32 h-32 mx-auto border-4 border-blue-100 group-hover:border-klinara-rose transition-colors">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-2xl bg-klinara-beige text-klinara-brown">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                  <p className="text-klinara-brown font-medium mb-3">{member.role}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                      <GraduationCap className="w-4 h-4" />
                      <span>{member.qualification}</span>
                    </div>
                    <Badge variant="outline" className="text-slate-600">
                      {member.experience} Experience
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="px-4 py-20 bg-gradient-to-br from-klinara-beige/30 to-klinara-rose/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Our Teaching Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-klinara-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-klinara-brown" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Child-Centered Approach</h3>
                <p className="text-slate-600">
                  We believe every child is unique and deserves personalized attention and care
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-klinara-rose rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-klinara-brown" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Continuous Learning</h3>
                <p className="text-slate-600">
                  Our teachers regularly update their skills through workshops and training programs
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-klinara-teal-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-klinara-brown" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Collaborative Teaching</h3>
                <p className="text-slate-600">
                  We work closely with parents to ensure consistent learning experiences
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">What Parents Say About Our Teachers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gradient-to-br from-klinara-beige/30 to-klinara-rose/30 border-0">
                <CardContent className="p-8">
                  <p className="text-klinara-brown mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-slate-800">{testimonial.parent}</p>
                    <p className="text-sm text-slate-600">Parent of {testimonial.child}</p>
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
