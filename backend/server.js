const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Base API route
app.get('/api', (req, res) => {
  res.json({
    message: 'TechVision Solutions API',
    version: '1.0.0',
    endpoints: {
      services: {
        getAll: 'GET /api/services',
        getById: 'GET /api/services/:id',
        create: 'POST /api/services',
        update: 'PUT /api/services/:id',
        delete: 'DELETE /api/services/:id'
      }
    }
  });
});

// ==================== GET ALL SERVICES ====================
app.get('/api/services', (req, res) => {
  db.all('SELECT * FROM services ORDER BY id ASC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Error retrieving services',
        error: err.message
      });
    }

    // Parse JSON fields
    const services = rows.map(service => ({
      ...service,
      features: JSON.parse(service.features),
      benefits: JSON.parse(service.benefits)
    }));

    res.json({
      success: true,
      message: 'Services retrieved successfully',
      data: services,
      total: services.length
    });
  });
});

// ==================== GET SERVICE BY ID ====================
app.get('/api/services/:id', (req, res) => {
  const { id } = req.params;

  db.get('SELECT * FROM services WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Error retrieving service',
        error: err.message
      });
    }

    if (!row) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    const service = {
      ...row,
      features: JSON.parse(row.features),
      benefits: JSON.parse(row.benefits)
    };

    res.json({
      success: true,
      message: 'Service retrieved successfully',
      data: service
    });
  });
});

// ==================== CREATE NEW SERVICE ====================
app.post('/api/services', (req, res) => {
  const { title, description, fullDescription, pricing, features, benefits, imageColor } = req.body;

  // Validation
  if (!title || !description || !fullDescription || !pricing || !features || !benefits || !imageColor) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  // Validate array fields
  if (!Array.isArray(features) || !Array.isArray(benefits)) {
    return res.status(400).json({
      success: false,
      message: 'Features and benefits must be arrays'
    });
  }

  const featuresJson = JSON.stringify(features);
  const benefitsJson = JSON.stringify(benefits);

  db.run(
    `INSERT INTO services (title, description, fullDescription, pricing, features, benefits, imageColor)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [title, description, fullDescription, pricing, featuresJson, benefitsJson, imageColor],
    function(err) {
      if (err) {
        if (err.message.includes('UNIQUE constraint failed')) {
          return res.status(400).json({
            success: false,
            message: 'Service with this title already exists'
          });
        }
        return res.status(500).json({
          success: false,
          message: 'Error creating service',
          error: err.message
        });
      }

      const newService = {
        id: this.lastID,
        title,
        description,
        fullDescription,
        pricing,
        features,
        benefits,
        imageColor,
        created_at: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        message: 'Service created successfully',
        data: newService
      });
    }
  );
});

// ==================== UPDATE SERVICE ====================
app.put('/api/services/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, fullDescription, pricing, features, benefits, imageColor } = req.body;

  // Validation
  if (!title || !description || !fullDescription || !pricing || !features || !benefits || !imageColor) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  // Validate array fields
  if (!Array.isArray(features) || !Array.isArray(benefits)) {
    return res.status(400).json({
      success: false,
      message: 'Features and benefits must be arrays'
    });
  }

  const featuresJson = JSON.stringify(features);
  const benefitsJson = JSON.stringify(benefits);

  // First check if service exists
  db.get('SELECT * FROM services WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Error checking service',
        error: err.message
      });
    }

    if (!row) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    // Update service
    db.run(
      `UPDATE services SET title = ?, description = ?, fullDescription = ?, pricing = ?, features = ?, benefits = ?, imageColor = ?, updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [title, description, fullDescription, pricing, featuresJson, benefitsJson, imageColor, id],
      function(err) {
        if (err) {
          if (err.message.includes('UNIQUE constraint failed')) {
            return res.status(400).json({
              success: false,
              message: 'Service with this title already exists'
            });
          }
          return res.status(500).json({
            success: false,
            message: 'Error updating service',
            error: err.message
          });
        }

        const updatedService = {
          id: parseInt(id),
          title,
          description,
          fullDescription,
          pricing,
          features,
          benefits,
          imageColor,
          updated_at: new Date().toISOString()
        };

        res.json({
          success: true,
          message: 'Service updated successfully',
          data: updatedService
        });
      }
    );
  });
});

// ==================== DELETE SERVICE ====================
app.delete('/api/services/:id', (req, res) => {
  const { id } = req.params;

  // First check if service exists
  db.get('SELECT * FROM services WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Error checking service',
        error: err.message
      });
    }

    if (!row) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    // Delete service
    db.run('DELETE FROM services WHERE id = ?', [id], function(err) {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Error deleting service',
          error: err.message
        });
      }

      res.json({
        success: true,
        message: 'Service deleted successfully',
        data: {
          id: parseInt(id),
          title: row.title
        }
      });
    });
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║  TechVision Solutions API Server       ║
║  Running on: http://localhost:${PORT}     ║
║  Endpoints: http://localhost:${PORT}/api  ║
╚════════════════════════════════════════╝
  `);
});

module.exports = app;
