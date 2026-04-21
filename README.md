# Obyra - Professional Software Development Company Website

A modern, fully-responsive website built with React, Tailwind CSS, and Vite for Obyra, a UK-based software development company.

## 🌐 Website Features

### Pages Implemented

#### Main Pages
- **Home** - Landing page with services preview, team stats, and testimonials
- **Services** - Comprehensive list of 8 service categories with 70+ individual services
- **Industries** - 16 industry verticals served
- **Solutions** - 10 proprietary Obyra solutions (HappyForce, Hero, Shop, etc.)
- **Contact** - Full contact form with EmailJS integration

#### Company Pages (11 Sub-pages)
- **About** - Company mission, vision, values, and team
- **Process** - Development methodology and tools
- **Careers** - Job openings and why work at Obyra
- **Testimonials** - Client success stories and case studies
- **Clients** - Partner companies
- **University** - Training and educational programs
- **Manifesto** - Company beliefs and principles
- **Blog** - Latest articles and insights
- **News & Updates** - Company announcements
- **Press Room** - Press releases and media resources
- **Events** - Webinars, conferences, and meetups

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

3. **Build for production:**
```bash
npm run build
```

## 📧 EmailJS Setup

The contact form is ready to send emails via EmailJS. Follow these steps to configure it:

### 1. Create EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email

### 2. Create Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add Service" (e.g., Gmail, Outlook, or SMTP)
- Follow the prompts and take note of your **Service ID**

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use the following variables in your template:
  - `{{from_name}}` - Sender name
  - `{{from_email}}` - Sender email
  - `{{phone}}` - Phone number
  - `{{company}}` - Company name
  - `{{subject}}` - Email subject
  - `{{message}}` - Message content

- Take note of your **Template ID**

### 4. Get Public Key
- In EmailJS dashboard, go to "Account"
- Copy your **Public Key**

### 5. Configure Environment Variables
Create or update `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Restart Development Server
```bash
npm run dev
```

The contact form should now send emails successfully!

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9)
- **Secondary**: Gray (#64748b)
- **Background**: White with gray accents
- **Accent**: Blue gradients

### Typography
- **Headings**: Poppins
- **Body**: Inter
- **Mobile Responsive**: Yes

## 📁 Project Structure

```
src/
├── assets/
│   └── logo.jsx              # Obyra SVG logo
├── components/
│   ├── common/
│   │   ├── Navbar.jsx        # Navigation with dropdowns
│   │   └── Footer.jsx        # Footer with links
│   ├── sections/
│   │   └── Sections.jsx      # Reusable section components
│   └── cards/
│       └── Cards.jsx         # Card components
├── data/
│   ├── services.js           # Services data
│   ├── industries.js         # Industries data
│   ├── solutions.js          # Solutions data
│   └── images.js             # Unsplash image URLs
├── hooks/
│   └── useEmailJS.js         # EmailJS custom hook
├── utils/
│   └── emailConfig.js        # EmailJS config
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Industries.jsx
│   ├── Solutions.jsx
│   ├── Contact.jsx
│   └── Company/
│       ├── About.jsx
│       ├── Process.jsx
│       ├── Careers.jsx
│       ├── Testimonials.jsx
│       ├── More.jsx          # Clients, University, Manifesto
│       └── Additional.jsx    # Blog, News, Press, Events
├── App.jsx                   # Main app with routing
├── main.jsx                  # Entry point
└── index.css                 # Tailwind CSS styles
```

## 🛠️ Technologies Used

- **React 18** - UI framework
- **React Router v6** - Client-side routing
- **Tailwind CSS v4** - Styling with @tailwindcss/postcss
- **Vite** - Build tool
- **EmailJS** - Email service integration
- **Lucide React** - SVG icons

## 📱 Responsive Design

Fully responsive on all devices:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔗 Navigation Menu

**Main Menu Items:**
- Home
- Services (with dropdown showing service categories)
- Industries
- Solutions
- Company (with dropdown showing all company sub-pages)
- Contact

**Company Sub-menu:**
- About
- Process
- Careers
- Testimonials
- Clients
- University
- Manifesto
- Blog
- News & Updates
- Press Room
- Events

## 🚀 Deployment

### Netlify
1. Connect Git repository
2. Build: `npm run build`
3. Publish: `dist`
4. Add environment variables

### Vercel
1. Import project
2. Environment variables auto-detected
3. Deploy

## 📞 Support

- EmailJS Docs: https://www.emailjs.com/docs/
- React Router: https://reactrouter.com/
- Tailwind CSS: https://tailwindcss.com/

---

**Built with React + Tailwind CSS | © 2024 Obyra**
