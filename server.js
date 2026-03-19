const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve React static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
}

// SQLite Database Connection
const dbPath = process.env.NODE_ENV === 'production' 
  ? '/tmp/certificates.db' 
  : './certificates.db';

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database');
        createTables();
        seedCertificates();
    }
});

// Create tables
const createTables = () => {
    const createCertificatesTable = `
        CREATE TABLE IF NOT EXISTS certificates (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            organization TEXT NOT NULL,
            date TEXT NOT NULL,
            description TEXT NOT NULL,
            category TEXT NOT NULL CHECK(category IN ('professional', 'participation', 'workshop', 'online-course', 'community-service', 'hackathon')),
            type TEXT NOT NULL CHECK(type IN ('internship', 'offer-letter', 'completion', 'participation', 'achievement')),
            certificateFile TEXT,
            verificationLink TEXT,
            icon TEXT DEFAULT '🎓',
            featured BOOLEAN DEFAULT 0,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `;
    
    db.run(createCertificatesTable, (err) => {
        if (err) {
            console.error('Error creating certificates table:', err.message);
        } else {
            console.log('Certificates table created or already exists');
        }
    });
};

// API Routes
app.get('/api/certificates', async (req, res) => {
    try {
        const { category, type, featured } = req.query;
        let query = 'SELECT * FROM certificates';
        const params = [];
        
        const conditions = [];
        if (category) {
            conditions.push('category = ?');
            params.push(category);
        }
        if (type) {
            conditions.push('type = ?');
            params.push(type);
        }
        if (featured === 'true') {
            conditions.push('featured = 1');
        }
        
        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ');
        }
        
        query += ' ORDER BY createdAt DESC';
        
        db.all(query, params, (err, rows) => {
            if (err) {
                res.status(500).json({ message: err.message });
            } else {
                res.json(rows);
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/certificates/categories', async (req, res) => {
    try {
        const query = `
            SELECT category, COUNT(*) as count 
            FROM certificates 
            GROUP BY category
        `;
        
        db.all(query, [], (err, rows) => {
            if (err) {
                res.status(500).json({ message: err.message });
            } else {
                const categoryCounts = {};
                rows.forEach(row => {
                    categoryCounts[row.category] = row.count;
                });
                res.json(categoryCounts);
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/certificates', async (req, res) => {
    try {
        const { title, organization, date, description, category, type, certificateFile, verificationLink, icon, featured } = req.body;
        
        const query = `
            INSERT INTO certificates (title, organization, date, description, category, type, certificateFile, verificationLink, icon, featured)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        
        const params = [title, organization, date, description, category, type, certificateFile, verificationLink, icon, featured ? 1 : 0];
        
        db.run(query, params, function(err) {
            if (err) {
                res.status(400).json({ message: err.message });
            } else {
                res.status(201).json({ id: this.lastID, ...req.body });
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Seed initial certificates data
const seedCertificates = () => {
    const certificates = [
        {
            title: "Internship Completion",
            organization: "Amaravathi Software Solutions",
            date: "Dasara period",
            description: "Internship completion certificate from Amaravathi Software Solutions during Dasara period",
            category: "professional",
            type: "completion",
            certificateFile: "amaravathi-internship-certificate.pdf",
            icon: "🎓",
            featured: 1
        },
        {
            title: "UI/UX Internship Offer",
            organization: "Woject Company",
            date: "2025",
            description: "Internship offer letter from Woject Company for UI/UX development role",
            category: "professional",
            type: "offer-letter",
            certificateFile: "woject-offer-letter.pdf",
            icon: "💼",
            featured: 1
        },
        {
            title: "Web Development Internship Offer",
            organization: "Saiket Company",
            date: "2025",
            description: "Internship offer letter from Saiket Company for web development position",
            category: "professional",
            type: "offer-letter",
            certificateFile: "saiket-offer-letter.pdf",
            icon: "🌐",
            featured: 1
        },
        {
            title: "Medical Coding Workshop",
            organization: "THOUGHT FLOWS",
            date: "10/08/2025",
            description: "Workshop participation certificate in medical coding on 10/08/2025, Vijayawada by THOUGHT FLOWS",
            category: "workshop",
            type: "participation",
            certificateFile: "medical-coding-workshop.pdf",
            icon: "🔬"
        },
        {
            title: "DD Saptagiri Telecast",
            organization: "DD Saptagiri",
            date: "November 11, 2024",
            description: "Featured in DD Saptagiri telecast program on November 11, 2024",
            category: "participation",
            type: "participation",
            verificationLink: "https://youtu.be/J8XR58tu-Ec?si=nkl-zuVk_o3RDfdQ",
            icon: "🎭",
            featured: 1
        },
        {
            title: "Generative AI Content Creation",
            organization: "Adobe/Coursera",
            date: "Sep 24, 2025",
            description: "Adobe authorized course completed through Coursera on Sep 24, 2025",
            category: "online-course",
            type: "completion",
            verificationLink: "https://coursera.org/verify/5LFTATZ4Y7R",
            icon: "🎨",
            featured: 1
        },
        {
            title: "AI Fundamentals",
            organization: "IBM SkillsBuild",
            date: "Sep 27, 2025",
            description: "Artificial Intelligence Fundamentals certification from IBM SkillsBuild on Sep 27, 2025",
            category: "online-course",
            type: "completion",
            verificationLink: "https://www.credly.com/badges/528c89eb-9be9-4423-ac41-8d1bae7bed7c",
            icon: "🤖",
            featured: 1
        },
        {
            title: "Hanuman Chalisa Homam",
            organization: "Chinmaya Mission",
            date: "8th February 2026",
            description: "NSS service participation in 108 Samishti Sri Hanuman Chalisa Homam by Chinmaya Mission on 8th February 2026",
            category: "community-service",
            type: "participation",
            certificateFile: "hanuman-chalisa-homam.pdf",
            icon: "🙏"
        },
        {
            title: "Youth Festival 2025",
            organization: "KBN College",
            date: "2025",
            description: "Participation certificate in Science Mela conducted at KBN College",
            category: "participation",
            type: "participation",
            certificateFile: "youth-festival-2025.pdf",
            icon: "🏛️"
        },
        {
            title: "National Flag Presentation",
            organization: "Vasavi Clubs International",
            date: "21/7/2025",
            description: "Participation in longest national flag presentation on 21/7/2025 by Vasavi Clubs International, Vijayawada",
            category: "participation",
            type: "participation",
            certificateFile: "national-flag-presentation.pdf",
            icon: "🇮🇳"
        },
        {
            title: "Walkathon",
            organization: "ISKCON Vijayawada",
            date: "2025",
            description: "Participated in Walkathon organized by ISKCON Vijayawada",
            category: "participation",
            type: "participation",
            certificateFile: "walkathon-iskon.pdf",
            icon: "🚶"
        },
        {
            title: "Youth Summit",
            organization: "Youth Summit Organizers",
            date: "2025",
            description: "Participated in Youth Summit on 'Role of Youth in Promoting Democratic Values and Scientific Temper'",
            category: "participation",
            type: "participation",
            certificateFile: "youth-summit-democratic-values.pdf",
            icon: "�"
        },
        {
            title: "AIgnite Hackathon 2025",
            organization: "PB Siddhartha College",
            date: "2025",
            description: "Participated in AIgnite Hackathon 2025 conducted at PB Siddhartha, Vijayawada",
            category: "participation",
            type: "participation",
            certificateFile: "aignite-hackathon-2025.pdf",
            icon: "💡"
        },
        {
            title: "VIVINYA 2K25 - SiteStrom",
            organization: "IEEE Student Branch, VVIT",
            date: "2025",
            description: "Participation in SiteStrom event organized by IEEE Student Branch, VVIT",
            category: "participation",
            type: "participation",
            certificateFile: "vivinya-sitestrom.pdf",
            icon: "⚡"
        },
        {
            title: "VIVINYA 2K25 - CodeRunners",
            organization: "IEEE Student Branch, VVIT",
            date: "2025",
            description: "Participation in CodeRunners event organized by IEEE Student Branch, VVIT",
            category: "participation",
            type: "participation",
            certificateFile: "vivinya-coderunners.pdf",
            icon: "💻"
        },
        {
            title: "VIVINYA 2K25 - CodeSwap",
            organization: "IEEE Student Branch, VVIT",
            date: "2025",
            description: "Participation in CodeSwap event organized by IEEE Student Branch, VVIT",
            category: "participation",
            type: "participation",
            certificateFile: "vivinya-codeswap.pdf",
            icon: "🔄"
        },
        {
            title: "JobReady Employability Skills",
            organization: "Wadhwani Foundation",
            date: "December 02, 2025",
            description: "Wadhwani Foundation certificate for completing 79 hours of employability skills training on December 02, 2025",
            category: "workshop",
            type: "completion",
            certificateFile: "jobready-employability-skills.pdf",
            icon: "💼"
        }
    ];

    // Check if certificates already exist
    db.get('SELECT COUNT(*) as count FROM certificates', [], (err, row) => {
        if (err) {
            console.log('Error checking certificates:', err.message);
            return;
        }
        
        if (row.count === 0) {
            // Insert certificates
            const insertQuery = `
                INSERT INTO certificates (title, organization, date, description, category, type, certificateFile, verificationLink, icon, featured)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            
            certificates.forEach(cert => {
                db.run(insertQuery, [
                    cert.title, cert.organization, cert.date, cert.description,
                    cert.category, cert.type, cert.certificateFile, cert.verificationLink,
                    cert.icon, cert.featured
                ], function(err) {
                    if (err) {
                        console.log('Error inserting certificate:', err.message);
                    } else {
                        console.log(`Certificate inserted: ${cert.title}`);
                    }
                });
            });
        } else {
            console.log('Certificates already exist in database');
        }
    });
};

// Serve static files from React app in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
