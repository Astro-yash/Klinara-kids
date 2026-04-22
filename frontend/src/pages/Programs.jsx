import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Clock, BookOpen, Users, Sparkles, MessageSquare, Calculator, Home, Eye, UsersRound } from 'lucide-react';
import { programs } from '../data/mock';

export const Programs = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Our Programs</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Age-appropriate curriculum designed to foster holistic development through play-based learning and structured activities
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto space-y-12">
          {programs.map((program, index) => (
            <Card key={program.id} className="overflow-hidden border-2 hover:border-klinara-rose transition-all hover:shadow-xl">
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1759678444821-565ff103465c' :
                      index === 1 ? '1554721299-e0b8aa7666ce' :
                      index === 2 ? '1761208663763-c4d30657c910' :
                      '1574130303188-31a915382726'
                    }?w=800`}
                    alt={program.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                      <span className="text-3xl font-bold text-klinara-brown">{index + 1}</span>
                    </div>
                  </div>
                </div>
                <CardContent className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <Badge className="bg-klinara-beige text-klinara-brown hover:bg-klinara-beige w-fit mb-4">
                    {program.duration}
                  </Badge>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">{program.title}</h2>
                  <p className="text-slate-600 mb-6 text-lg">{program.description}</p>
                  
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-klinara-brown" />
                    Key Learning Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-klinara-teal rounded-full"></div>
                        <span className="text-klinara-brown">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-klinara-beige/30 to-klinara-rose/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">What Makes Our Programs Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-klinara-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-klinara-brown" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Activity-Based Learning</h3>
                <p className="text-slate-600">
                  Hands-on exploration that encourages curiosity and discovery through experience
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-klinara-rose rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-klinara-brown" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Individual Attention</h3>
                <p className="text-slate-600">
                  Personalized support to help every child develop at their own pace
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-klinara-teal-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-klinara-brown" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Balanced Approach</h3>
                <p className="text-slate-600">
                  Integration of academics, creativity, life skills, and social growth
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Curriculum Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Our Curriculum</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              At Klinara Kids, our curriculum combines activity-based learning, real-life experiences, and structured early education to support the overall development of every child. Instead of rote learning, children understand concepts through exploration, observation, and hands-on activities.
            </p>
          </div>

          <div className="mb-12">
            <Card className="bg-gradient-to-br from-klinara-cream to-klinara-beige/20 border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-slate-600 text-center text-lg">
                  Our curriculum is designed to nurture curiosity, independence, creativity, and strong foundational skills. 
                  Our learning framework focuses on the following key developmental areas:
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-klinara-rose transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-klinara-beige rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-7 h-7 text-klinara-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Language Development</h3>
                  </div>
                </div>
                <p className="text-slate-600">
                  Children develop strong communication skills through storytelling, phonics, reading activities, and writing readiness. 
                  This helps build vocabulary, confidence in speaking, and early literacy skills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-klinara-rose transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-klinara-rose rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-7 h-7 text-klinara-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Mathematics & Logical Thinking</h3>
                  </div>
                </div>
                <p className="text-slate-600">
                  Through engaging activities and learning materials, children explore numbers, counting, shapes, patterns, 
                  and basic mathematical concepts that strengthen logical thinking and problem-solving abilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-klinara-rose transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-klinara-golden rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Home className="w-7 h-7 text-klinara-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Practical Life Skills</h3>
                  </div>
                </div>
                <p className="text-slate-600">
                  Children learn everyday life skills such as organizing, caring for their surroundings, simple food preparation, 
                  and developing independence in daily routines. These activities build confidence, discipline, and responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-klinara-rose transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-klinara-teal-light rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-7 h-7 text-klinara-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Sensorial Learning</h3>
                  </div>
                </div>
                <p className="text-slate-600">
                  Through hands-on materials and observation activities, children refine their senses and develop an understanding 
                  of shapes, sizes, colors, textures, and patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-klinara-rose transition-all hover:shadow-xl md:col-span-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-klinara-rose rounded-2xl flex items-center justify-center flex-shrink-0">
                    <UsersRound className="w-7 h-7 text-klinara-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Social & Interpersonal Skills</h3>
                  </div>
                </div>
                <p className="text-slate-600">
                  Group activities and collaborative learning help children develop respect, empathy, communication skills, 
                  and positive social behavior.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="bg-gradient-to-r from-klinara-teal/10 to-klinara-beige/10 border-2 border-klinara-teal/30">
              <CardContent className="p-8">
                <p className="text-center text-slate-700 text-lg font-medium">
                  At Klinara Kids, our curriculum encourages children to explore, think independently, and learn through 
                  meaningful experiences, helping them build a strong foundation for lifelong learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Daily Schedule Sample */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">A Day at Klinara Kids</h2>
          <Card className="bg-gradient-to-br from-klinara-beige/30 to-klinara-rose/30 border-0">
            <CardContent className="p-8">
              <div className="space-y-4">
                {[
                  { time: "8:00 - 8:30 AM", activity: "Arrival & Free Play" },
                  { time: "8:30 - 9:00 AM", activity: "Circle Time & Morning Assembly" },
                  { time: "9:00 - 10:00 AM", activity: "Structured Learning Activities" },
                  { time: "10:00 - 10:30 AM", activity: "Snack Time & Hygiene" },
                  { time: "10:30 - 11:30 AM", activity: "Outdoor Play & Physical Activities" },
                  { time: "11:30 AM - 12:00 PM", activity: "Creative Arts & Music" },
                  { time: "12:00 - 1:00 PM", activity: "Lunch & Story Time" },
                  { time: "1:00 - 2:00 PM", activity: "Quiet Time & Activities" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl">
                    <div className="w-32 flex-shrink-0">
                      <Badge variant="outline" className="text-klinara-brown border-klinara-teal">
                        {item.time}
                      </Badge>
                    </div>
                    <p className="text-slate-800 font-medium">{item.activity}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
