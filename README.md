# Certificate Portfolio - MERN Stack Application

A modern, dynamic certificate portfolio application built with the MERN stack (MongoDB, Express.js, React, Node.js) that showcases professional certificates, achievements, and participation in various events.

## 🚀 Features

### **Frontend (React)**
- **Modern UI/UX** with Framer Motion animations
- **Responsive Design** for all devices
- **Dynamic Certificate Filtering** by category
- **Interactive Components** with hover effects
- **Smooth Scrolling** and navigation
- **Contact Form** with validation
- **Theme Support** (Dark/Light mode ready)

### **Backend (Node.js/Express)**
- **RESTful API** for certificate management
- **MongoDB Integration** with Mongoose
- **Certificate Categorization** (Professional, Participation, Workshop, etc.)
- **File Upload Support** for certificates
- **Verification Links** for online certificates
- **Seeded Data** with all certificates

### **Database (MongoDB)**
- **Certificate Schema** with comprehensive fields
- **Category-based Organization**
- **Featured Certificate Support**
- **Flexible Metadata** storage

## 📋 Certificate Categories

1. **Professional Certificates**
   - Internship Completions
   - Offer Letters
   - Job Certifications

2. **Online Courses**
   - Adobe Generative AI
   - IBM AI Fundamentals
   - Coursera Certifications

3. **Workshops & Training**
   - Medical Coding
   - Employability Skills
   - Technical Workshops

4. **Hackathons & Events**
   - IEEE Events (SiteStrom, CodeRunners, CodeSwap)
   - AIgnite Hackathon
   - Youth Festival

5. **Community Service**
   - NSS Activities
   - Religious Events
   - Social Work

## 🛠️ Technology Stack

### **Frontend**
- **React 18** - Component-based UI
- **Framer Motion** - Animations
- **Styled Components** - CSS-in-JS
- **React Router** - Navigation
- **Axios** - HTTP Client
- **React Icons** - Icon Library

### **Backend**
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Multer** - File Uploads
- **CORS** - Cross-Origin Requests

### **Development Tools**
- **Concurrently** - Run multiple scripts
- **Nodemon** - Auto-restart server
- **React Scripts** - Build tools

## 📦 Installation & Setup

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd certificate-portfolio-mern
```

### **2. Install Backend Dependencies**
```bash
npm install
```

### **3. Install Frontend Dependencies**
```bash
cd client
npm install
cd ..
```

### **4. Environment Setup**
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/certificate-portfolio
PORT=5000
NODE_ENV=development
```

### **5. Start MongoDB**
```bash
# For local MongoDB
mongod

# Or use MongoDB Atlas (update .env with connection string)
```

### **6. Run the Application**

**Development Mode (Both servers):**
```bash
npm run dev
```

**Individual Servers:**
```bash
# Backend only
npm run server

# Frontend only
npm run client
```

**Production Mode:**
```bash
npm run build
npm start
```

## 🌐 Access Points

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **API Documentation:** http://localhost:5000/api/certificates

## 📊 API Endpoints

### **Certificates**
- `GET /api/certificates` - Get all certificates
- `GET /api/certificates?category=professional` - Filter by category
- `GET /api/certificates/categories` - Get category counts
- `POST /api/certificates` - Add new certificate

### **Category Filters**
- `professional` - Professional certificates
- `participation` - Event participation
- `workshop` - Workshops and training
- `online-course` - Online courses
- `community-service` - Community service
- `hackathon` - Hackathons and competitions

## 🎨 UI Components

### **Pages**
- **Hero** - Animated introduction
- **About** - Personal information
- **Skills** - Technical skills grid
- **Projects** - Featured projects showcase
- **Certificates** - Dynamic certificate gallery
- **Contact** - Contact form and information

### **Features**
- **Dynamic Filtering** - Filter certificates by category
- **Search Functionality** - Search certificates by title/organization
- **Responsive Grid** - Adaptive layout for all screen sizes
- **Smooth Animations** - Page transitions and hover effects
- **Interactive Cards** - Certificate cards with details
- **Social Links** - Integrated social media links

## 📁 File Structure

```
certificate-portfolio-mern/
├── server.js                 # Main server file
├── package.json             # Backend dependencies
├── .env                     # Environment variables
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── context/         # React context
│   │   ├── styles/          # Global styles
│   │   ├── App.js           # Main App component
│   │   └── index.js         # Entry point
│   ├── public/
│   │   └── index.html      # HTML template
│   └── package.json        # Frontend dependencies
└── uploads/                 # Certificate files (auto-created)
```

## 🔧 Customization

### **Adding New Certificates**
1. Update the seed data in `server.js`
2. Add certificate files to `uploads/` folder
3. Restart the server to reseed data

### **Modifying Categories**
1. Update the certificate schema in `server.js`
2. Update category icons and labels in `Certificates.js`
3. Update the seed data accordingly

### **Styling Changes**
- Modify `GlobalStyles.js` for global styles
- Update individual component styles
- Add new animations with Framer Motion

## 🚀 Deployment

### **Frontend (Netlify/Vercel)**
```bash
cd client
npm run build
# Deploy the build/ folder
```

### **Backend (Heroku/Railway)**
```bash
# Set environment variables
# Deploy the root folder
# Ensure MongoDB is accessible
```

### **Database (MongoDB Atlas)**
1. Create a free MongoDB Atlas cluster
2. Update `MONGODB_URI` in `.env`
3. Deploy the application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Name:** Pulikonda Keshav Shanmukh
- **Email:** keshavshanmukh25@gmail.com
- **LinkedIn:** linkedin.com/in/keshavshanmukhpulikonda
- **GitHub:** github.com/KeshavShanmukh

## 🌟 Acknowledgments

- React team for the amazing framework
- MongoDB for the flexible database
- Framer Motion for smooth animations
- All certificate issuing organizations

---

**Built with ❤️ and modern web technologies**
