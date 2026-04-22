import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ExternalLink, Heart, Brain, Eye, Users, Sparkles, TrendingUp } from 'lucide-react';

export const Elthea = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-klinara-teal/20 to-klinara-golden/20 rounded-full mb-6">
              <span className="text-klinara-brown font-semibold">US-Based AI Learning Platform</span>
            </div>
            <h1 className="text-5xl font-bold text-slate-800 mb-6">Smart Learning with Elthea</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Every child arrives at Klinara Kids carrying something extraordinary inside them: a spark of curiosity, 
              a way of solving problems, a particular kind of emotional intelligence that most conventional tools simply miss.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-klinara-cream to-klinara-beige/30 border-2 border-klinara-rose/30">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-slate-700 mb-6">
                  At Klinara Kids, we partnered with Elthea precisely because it was built to find what others overlook.
                </p>
                <a href="https://elthea.xyz" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-klinara-teal hover:bg-klinara-teal-light text-white">
                    Visit Elthea
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Discovering the Hidden Child */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Discovering the Hidden Child</h2>
              <p className="text-lg text-slate-600 mb-4 font-semibold text-klinara-teal">
                Elthea is not a testing platform. It is a discovery platform.
              </p>
              <div className="space-y-4 text-slate-600">
                <p>
                  Developed in the United States and purpose-built for early childhood education, Elthea uses proprietary 
                  behavior assessment games. These are short, playful experiences that a child simply enjoys as play while quietly 
                  observing the patterns beneath.
                </p>
                <p>
                  How does this child respond to challenge? How do they navigate frustration? Where does their attention 
                  light up and linger? These behavioral signals, invisible to the naked eye and impossible to capture through 
                  worksheets or checklists, form a portrait of the child that goes far deeper than scores or grades.
                </p>
                <p className="font-medium text-slate-800">
                  The result is a GROW profile: a holistic map of your child's goal-oriented behaviors, relationship instincts, 
                  organizational tendencies, and emotional warmth. Not a ranking. Not a label. A window.
                </p>
              </div>
            </div>
            <div>
              <Card className="bg-gradient-to-br from-klinara-teal/10 to-klinara-beige/20 border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-klinara-golden rounded-xl flex items-center justify-center flex-shrink-0">
                        <Brain className="w-6 h-6 text-klinara-brown" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Goal-Oriented Behaviors</h3>
                        <p className="text-sm text-slate-600">How your child approaches challenges and sets objectives</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-klinara-rose rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-klinara-brown" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Relationship Instincts</h3>
                        <p className="text-sm text-slate-600">Social awareness and interpersonal connections</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-klinara-teal-light rounded-xl flex items-center justify-center flex-shrink-0">
                        <Eye className="w-6 h-6 text-klinara-brown" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Organizational Tendencies</h3>
                        <p className="text-sm text-slate-600">Focus, attention patterns, and structured thinking</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-klinara-beige rounded-xl flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-klinara-brown" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Emotional Warmth</h3>
                        <p className="text-sm text-slate-600">Empathy, emotional expression, and sensitivity</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* A Different Kind of AI */}
      <section className="px-4 py-20 bg-gradient-to-br from-klinara-beige/20 to-klinara-rose/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">A Different Kind of AI</h2>
            <p className="text-2xl text-klinara-teal font-medium mb-6">
              Most AI in education is built to measure. Elthea was built to understand.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-4 text-slate-600">
                  <p>
                    What powers Elthea's assessments is not a general purpose system repurposed for children. It is a 
                    <strong className="text-klinara-teal"> proprietary AI engine</strong>, purpose engineered from the 
                    ground up for early childhood behavior.
                  </p>
                  <p>
                    Where conventional platforms analyze inputs and return outputs, Elthea's underlying intelligence works 
                    differently: it reads the shape of a child's play (the hesitations, the repetitions, the moments of 
                    delight and avoidance) and weaves them into something genuinely insightful.
                  </p>
                  <p className="text-lg font-medium text-slate-800 pt-4">
                    It is, in the field of early childhood AI, genuinely its own kind of thing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* A Motherly Intelligence */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800"
                alt="Teacher and child"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-slate-800 mb-6">A Motherly Intelligence</h2>
              <p className="text-lg text-slate-700 mb-4">
                What makes Elthea's AI distinctive is not only how it works, but the philosophy it embodies.
              </p>
              <div className="space-y-4 text-slate-600">
                <p>
                  It was designed to think about a child the way a devoted, perceptive mother would: holistically, warmly, 
                  without judgment. It does not optimize for metrics or reduce a child to a percentile.
                </p>
                <p>
                  Instead, it holds the whole child in view: their emotional world, their cognitive patterns, their social 
                  instincts, their hidden strengths. It speaks about them in language that opens doors rather than closes them.
                </p>
                <div className="bg-klinara-cream p-6 rounded-xl mt-6">
                  <p className="text-slate-700">
                    <span className="font-semibold text-klinara-teal">Where other platforms report data, Elthea offers reflections.</span><br/>
                    <span className="font-semibold text-klinara-brown">Where others produce scores, Elthea surfaces stories:</span> gentle, plain language insights that help parents and teachers see the child more clearly and respond more thoughtfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Parents See */}
      <section className="px-4 py-20 bg-gradient-to-br from-klinara-teal/10 to-klinara-golden/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-800 mb-6 text-center">What Parents See</h2>
            <p className="text-lg text-slate-600 mb-8 text-center">
              Through the Klinara Kids school application, parents receive secure access to their child's Elthea dashboard: 
              not a cold data feed, but a living record of growth.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white border-2 hover:border-klinara-rose transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-klinara-golden flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">Behavioral & Cognitive Insights</h3>
                      <p className="text-sm text-slate-600">Drawn from gameplay observation, revealing natural patterns</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 hover:border-klinara-rose transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-klinara-teal flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">GROW Profile Summaries</h3>
                      <p className="text-sm text-slate-600">Revealing emerging strengths and developmental areas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 hover:border-klinara-rose transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-klinara-rose flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">Warm, Readable Reflections</h3>
                      <p className="text-sm text-slate-600">Updated as your child progresses through their journey</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 hover:border-klinara-rose transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Brain className="w-6 h-6 text-klinara-brown flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">Continuous Growth Narrative</h3>
                      <p className="text-sm text-slate-600">Who your child is becoming — not just how they perform</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* For Teachers */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">For Teachers Who Look Closely</h2>
          <Card className="bg-gradient-to-br from-klinara-cream to-klinara-beige/30 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-4 text-slate-700">
                <p className="text-lg">
                  Elthea gives Klinara Kids teachers something rare: a structured way to see what they already sense intuitively.
                </p>
                <p>
                  The platform surfaces developmental patterns across the four dimensions of a child's inner world — how they feel, 
                  how they think, how they focus, and how they relate — translating those observations into practical, compassionate 
                  next steps.
                </p>
                <p className="text-lg font-semibold text-klinara-teal pt-4">
                  The technology never replaces the teacher's judgment. It deepens it.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="px-4 py-20 bg-gradient-to-r from-klinara-teal to-klinara-golden text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Every Child is Carrying a Gift</h2>
          <p className="text-xl mb-8 leading-relaxed">
            At Klinara Kids, we believe every child is carrying a gift they cannot yet name. 
            Elthea helps us find it — gently, carefully, and with all the warmth that discovery deserves.
          </p>
          <a href="https://elthea.xyz" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-klinara-teal hover:bg-klinara-cream">
              Learn More About Elthea
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};
