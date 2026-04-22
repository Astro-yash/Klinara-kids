import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { schoolInfo } from '../data/mock';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/submit-contact`, formData);
      
      if (response.data.status === 'success') {
        toast.success(response.data.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to send message. Please try calling us directly.');
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
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us for any inquiries or to schedule a visit
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <Card className="border-2 hover:border-klinara-rose transition-all">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-klinara-beige rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-klinara-brown" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Address</h3>
                        <p className="text-slate-600">{schoolInfo.address}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-klinara-rose transition-all">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-klinara-rose rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-klinara-brown" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                        <a href={`tel:${schoolInfo.phone}`} className="text-slate-600 hover:text-klinara-brown transition-colors">
                          {schoolInfo.phone}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-klinara-rose transition-all">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-klinara-teal-light rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-klinara-brown" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                        <a href={`mailto:${schoolInfo.email}`} className="text-slate-600 hover:text-klinara-brown transition-colors break-all">
                          {schoolInfo.email}
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-klinara-rose transition-all">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-klinara-golden rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-klinara-brown" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">School Hours</h3>
                        <p className="text-slate-600">Monday - Friday</p>
                        <p className="text-slate-600">8:00 AM - 6:00 PM</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        className="mt-2"
                        placeholder="Enter your name"
                      />
                    </div>

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

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        required
                        className="mt-2"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        required
                        className="mt-2"
                        rows={5}
                        placeholder="Your message here..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-klinara-teal hover:bg-klinara-teal-light text-white" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="border-2 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <iframe
                title="Klinara Kids Location"
                src="https://maps.google.com/maps?q=17.3203332,78.5472870&hl=en&z=17&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
