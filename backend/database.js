const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'database.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

function initializeDatabase() {
  db.serialize(() => {
    // Create services table
    db.run(`
      CREATE TABLE IF NOT EXISTS services (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL UNIQUE,
        description TEXT NOT NULL,
        fullDescription TEXT NOT NULL,
        pricing TEXT NOT NULL,
        features TEXT NOT NULL,
        benefits TEXT NOT NULL,
        imageColor TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('Error creating services table:', err.message);
      } else {
        console.log('Services table ready');
        seedDatabase();
      }
    });
  });
}

function seedDatabase() {
  const services = [
    {
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure and deployment solutions for modern applications',
      fullDescription: 'Leverage our advanced cloud computing platform to scale your applications globally. We provide enterprise-grade infrastructure with 99.9% uptime guarantee, automated backups, and seamless integration with your existing systems.',
      pricing: 'Rp 5.000.000',
      features: JSON.stringify(['Auto-scaling', 'Load Balancing', '99.9% Uptime', 'Daily Backups', '24/7 Monitoring']),
      benefits: JSON.stringify(['Reduce operational costs by 40%', 'Global presence in 50+ regions', 'Enterprise-grade security', 'Real-time analytics']),
      imageColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data',
      fullDescription: 'Protect your organization from evolving cyber threats with our comprehensive security solutions. Our team of experts provides 24/7 monitoring, threat detection, and incident response to ensure your data remains secure.',
      pricing: 'Rp 8.500.000',
      features: JSON.stringify(['Threat Detection', 'Penetration Testing', 'Firewall Management', 'DDoS Protection', 'Security Audits']),
      benefits: JSON.stringify(['99.95% threat prevention rate', 'Compliance with GDPR & ISO 27001', 'Real-time threat alerts', 'Dedicated security team']),
      imageColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Tailored enterprise software for large-scale business operations',
      fullDescription: 'Transform your enterprise operations with our customizable solutions. From ERP to CRM systems, we provide end-to-end implementation, training, and support for organizations of all sizes.',
      pricing: 'Rp 15.000.000',
      features: JSON.stringify(['ERP Systems', 'CRM Management', 'Custom Integration', 'API Development', 'Data Migration']),
      benefits: JSON.stringify(['Increase productivity by 60%', 'Streamline business processes', 'Real-time reporting & analytics', 'Multi-language support']),
      imageColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence for data-driven decisions',
      fullDescription: 'Unlock the power of your data with our advanced analytics platform. Gain actionable insights, predict trends, and make informed decisions with our AI-powered analytics solutions.',
      pricing: 'Rp 7.500.000',
      features: JSON.stringify(['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'Machine Learning', 'Report Generation']),
      benefits: JSON.stringify(['Identify trends 3x faster', 'Reduce decision-making time', 'Improve ROI by 45%', 'Custom KPI tracking']),
      imageColor: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      fullDescription: 'Create powerful mobile experiences with our expert development team. We specialize in native iOS/Android and cross-platform solutions using the latest technologies and best practices.',
      pricing: 'Rp 6.000.000',
      features: JSON.stringify(['Native Development', 'Cross-platform Apps', 'UI/UX Design', 'App Store Optimization', 'Push Notifications']),
      benefits: JSON.stringify(['Launch in 8 weeks', 'Support 90% of devices', 'App store ready code', 'Ongoing maintenance included']),
      imageColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Technical Support',
      description: '24/7 technical support and maintenance for your systems',
      fullDescription: 'Never worry about system downtime again. Our dedicated technical support team provides 24/7 monitoring, rapid response to issues, and proactive maintenance to keep your systems running smoothly.',
      pricing: 'Rp 3.500.000',
      features: JSON.stringify(['24/7 Support', 'Incident Response', 'System Monitoring', 'Preventive Maintenance', 'Knowledge Base']),
      benefits: JSON.stringify(['Average response time: 15 minutes', '99.99% satisfaction rate', 'Dedicated account manager', 'Priority issue handling']),
      imageColor: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  // Check if data already exists
  db.get('SELECT COUNT(*) as count FROM services', (err, row) => {
    if (row.count === 0) {
      services.forEach((service) => {
        db.run(`
          INSERT INTO services (title, description, fullDescription, pricing, features, benefits, imageColor)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `, [
          service.title,
          service.description,
          service.fullDescription,
          service.pricing,
          service.features,
          service.benefits,
          service.imageColor
        ], (err) => {
          if (err) {
            console.error('Error inserting service:', err.message);
          }
        });
      });
      console.log('Database seeded with 6 services');
    } else {
      console.log('Database already contains data');
    }
  });
}

module.exports = db;
