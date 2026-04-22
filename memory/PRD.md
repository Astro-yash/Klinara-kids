# Klinara Kids Pre-School Website - Product Requirements Document

## Project Overview
**Project Name:** Klinara Kids Pre-School Website  
**Domain:** kinara-kids.com  
**Established:** 2026  
**Location:** BN Reddy, Hyderabad  
**Purpose:** Professional pre-school website with Asian curriculum focus

## Contact Information
- **Address:** BN Reddy, Hyderabad
- **Phone:** 9482183823
- **Email:** kinara-kids@pre-school.com

## User Personas
1. **Parents/Guardians** - Looking for quality pre-school education for their children
2. **Prospective Families** - Researching pre-school options in Hyderabad
3. **Current Students' Parents** - Staying updated with events and news

## Core Requirements (Static)
- Classic pastel color scheme (soft, not too bright, not dull)
- Comprehensive sections: Hero, About, Programs, Admissions, Contact, Gallery, Testimonials, Faculty, Virtual Tour, Events/News
- Contact/Inquiry form
- Google Maps integration
- Photo gallery
- Responsive design
- Professional appearance

## Implementation Status

### Phase 1: Frontend with Mock Data ✅ (December 14, 2025)

**Completed Features:**
1. **Header Component** ✅
   - Sticky navigation with scroll effect
   - Contact info bar (phone, email)
   - Mobile-responsive menu
   - Logo placeholder

2. **Footer Component** ✅
   - Quick links
   - Contact information
   - Social media links
   - School hours

3. **Home Page** ✅
   - Hero section with CTA buttons
   - Features showcase (6 key features)
   - Programs preview (4 programs)
   - Testimonials section (4 testimonials)
   - Call-to-action section

4. **About Page** ✅
   - School story and history
   - Mission & Vision cards
   - Core values (4 values)
   - Asian curriculum approach section

5. **Programs Page** ✅
   - Detailed program cards (Playgroup, Nursery, LKG, UKG)
   - Key learning areas for each program
   - Daily schedule sample
   - Special features section

6. **Faculty Page** ✅
   - Faculty member cards (4 teachers)
   - Teaching philosophy section
   - Parent testimonials

7. **Admissions Page** ✅
   - 5-step admission process
   - Inquiry form (functional with mock submission)
   - Required documents section
   - Fee structure

8. **Gallery Page** ✅
   - Photo grid with lightbox
   - Category-based exploration
   - Click-to-enlarge functionality

9. **Events Page** ✅
   - Upcoming events cards
   - Latest announcements section

10. **Virtual Tour Page** ✅
    - Interactive tour viewer
    - Navigation between spots
    - Thumbnail preview
    - Schedule visit CTA

11. **Contact Page** ✅
    - Contact information cards
    - Contact form (functional with mock submission)
    - Google Maps integration

**Design Implementation:**
- ✅ Classic pastel colors (soft blues, purples, greens, oranges)
- ✅ Shadcn UI components
- ✅ Lucide React icons (no emoji characters)
- ✅ Smooth transitions and hover effects
- ✅ Responsive grid layouts
- ✅ Professional card-based design
- ✅ Toast notifications for form submissions

**Mock Data Structure:**
- School information
- Programs (4 programs with details)
- Faculty (4 members)
- Testimonials (4 parent reviews)
- Events (3 upcoming events)
- Gallery (8 images)
- Features (6 key features)
- Virtual tour spots (4 locations)
- Admission steps (5 steps)

## Next Phase: Backend Development

### Backend Requirements (Not Yet Implemented)

**API Endpoints Needed:**
1. **Contact/Inquiry Management**
   - `POST /api/inquiries` - Submit inquiry form
   - `GET /api/inquiries` - Get all inquiries (admin)
   - `GET /api/inquiries/:id` - Get specific inquiry
   - `PATCH /api/inquiries/:id` - Update inquiry status

2. **Contact Form**
   - `POST /api/contact` - Submit contact form
   - `GET /api/contact` - Get all messages (admin)

3. **Events Management**
   - `GET /api/events` - Get all events
   - `POST /api/events` - Create event (admin)
   - `PATCH /api/events/:id` - Update event (admin)
   - `DELETE /api/events/:id` - Delete event (admin)

4. **Gallery Management**
   - `GET /api/gallery` - Get all gallery images
   - `POST /api/gallery` - Upload image (admin)
   - `DELETE /api/gallery/:id` - Delete image (admin)

5. **Testimonials Management**
   - `GET /api/testimonials` - Get all testimonials
   - `POST /api/testimonials` - Add testimonial (admin)
   - `PATCH /api/testimonials/:id` - Update testimonial (admin)

**Database Models Needed:**
- Inquiry (parentName, childName, childAge, program, email, phone, message, status, createdAt)
- Contact (name, email, phone, subject, message, status, createdAt)
- Event (title, date, description, image, status, createdAt)
- Gallery (imageUrl, category, description, createdAt)
- Testimonial (parentName, childName, text, rating, status, createdAt)

**Integration Tasks:**
1. Remove mock.js data
2. Connect forms to backend APIs
3. Implement admin dashboard (optional)
4. Add email notifications for new inquiries
5. Implement image upload for gallery

## Prioritized Backlog

### P0 (High Priority)
- Backend API development
- Database models
- Form submissions to database
- Email notifications

### P1 (Medium Priority)
- Admin dashboard for managing content
- Gallery image upload
- Events management system
- Testimonials moderation

### P2 (Low Priority)
- User authentication for parents
- Student portal
- Payment integration for fees
- Newsletter subscription
- Blog section

## Technical Stack
- **Frontend:** React 19, Tailwind CSS, Shadcn UI
- **Backend:** FastAPI, Python
- **Database:** MongoDB
- **Deployment:** Emergent Platform
- **Domain:** kinara-kids.com

## Design Guidelines Followed
- ✅ Classic pastel color scheme
- ✅ No dark gradients or vibrant colors
- ✅ Lucide React icons only (no emoji)
- ✅ Shadcn UI components
- ✅ Professional, clean layout
- ✅ Smooth transitions and animations
- ✅ Responsive design
- ✅ Proper spacing and typography

## Current Status
**Phase:** Frontend Complete with Mock Data  
**Next Step:** Backend Development  
**Website:** Live at preview URL with full frontend functionality
