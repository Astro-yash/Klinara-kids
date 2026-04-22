import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { CheckCircle2, FileText, Users, Calendar, CreditCard, ArrowRight } from 'lucide-react';
import { admissionSteps } from '../data/mock';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    program: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/submit-inquiry`, formData);
      
      if (response.data.status === 'success') {
        toast.success(response.data.message);
        setFormData({
          parentName: '',
          childName: '',
          childAge: '',
          program: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast.error('Failed to submit inquiry. Please try calling us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Admissions</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join the Klinara Kids family and give your child the foundation for lifelong success
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {admissionSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <Card className="border-2 hover:border-klinara-rose transition-all hover:shadow-lg h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-klinara-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </CardContent>
                </Card>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-klinara-brown" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Submit Your Inquiry</h2>
                <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => handleChange('parentName', e.target.value)}
                      required
                      className="mt-2"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="childName">Child's Name *</Label>
                    <Input
                      id="childName"
                      value={formData.childName}
                      onChange={(e) => handleChange('childName', e.target.value)}
                      required
                      className="mt-2"
                      placeholder="Enter child's name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="childAge">Child's Age *</Label>
                    <Input
                      id="childAge"
                      value={formData.childAge}
                      onChange={(e) => handleChange('childAge', e.target.value)}
                      required
                      className="mt-2"
                      placeholder="e.g., 2.5 years"
                    />
                  </div>
                  <div>
                    <Label htmlFor="program">Program of Interest *</Label>
                    <Select value={formData.program} onValueChange={(value) => handleChange('program', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="childcare">Little Nest - Childcare</SelectItem>
                        <SelectItem value="playgroup">Tiny Sprouts - Playgroup (2-3 years)</SelectItem>
                        <SelectItem value="nursery">Growing Buds - Nursery (3-4 years)</SelectItem>
                        <SelectItem value="lkg">Blooming Flowers - Junior KG (4-5 years)</SelectItem>
                        <SelectItem value="ukg">Bright Blossoms - Senior KG (5-7 years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      className="mt-2"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                      className="mt-2"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="mt-2"
                    rows={4}
                    placeholder="Any specific questions or requirements..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-klinara-teal hover:bg-klinara-teal-light text-white" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements */}
      <section className="px-4 py-20 bg-gradient-to-br from-klinara-beige/30 to-klinara-rose/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Required Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "Birth Certificate", desc: "Original & photocopy" },
              { icon: Users, title: "Parent ID Proof", desc: "Aadhar/Passport copy" },
              { icon: Calendar, title: "Medical Records", desc: "Vaccination details" },
              { icon: CreditCard, title: "Address Proof", desc: "Utility bill/Lease" },
            ].map((item, idx) => (
              <Card key={idx} className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-klinara-beige rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-klinara-brown" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
