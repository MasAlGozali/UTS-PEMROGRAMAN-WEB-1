# TechVision Solutions - Backend API

Complete REST API for TechVision Solutions services with CRUD operations and SQLite database.

## Project Structure

```
backend/
├── server.js           # Express server and API routes
├── database.js         # SQLite configuration and seeding
├── package.json        # Dependencies and scripts
├── .gitignore          # Git ignore rules
├── .env.example        # Environment variables template
└── database.db         # SQLite database (generated on first run)
```

## Features

✅ **Complete CRUD Operations**
- GET all services
- GET service by ID
- POST create new service
- PUT update existing service
- DELETE remove service

✅ **Data Validation**
- Required field validation
- Array field validation
- Duplicate title prevention

✅ **CORS Enabled**
- Accept requests from frontend (localhost:3000 and any origin in development)
- Support cross-origin requests

✅ **SQLite Database**
- Lightweight, file-based database
- Auto-seeded with 6 services from Project 1
- Persistent data storage

## Installation

### Prerequisites
- Node.js v14+ and npm
- Git

### Setup Steps

1. **Navigate to backend directory:**
```bash
cd backend
```

2. **Install dependencies:**
```bash
npm install
```

This will install:
- `express` - Web framework
- `cors` - Cross-Origin Resource Sharing
- `body-parser` - Parse request bodies
- `sqlite3` - Database driver
- `uuid` - Unique ID generation
- `nodemon` - Development auto-reload (devDependency)

3. **Run the server:**
```bash
npm start
```

Or with auto-reload during development:
```bash
npm run dev
```

The server will start at `http://localhost:3000`

## Database

The SQLite database includes a `services` table with the following structure:

```sql
CREATE TABLE services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  fullDescription TEXT NOT NULL,
  pricing TEXT NOT NULL,
  features TEXT NOT NULL,        -- Stored as JSON array
  benefits TEXT NOT NULL,        -- Stored as JSON array
  imageColor TEXT NOT NULL,
  created_at DATETIME,
  updated_at DATETIME
)
```

### Seeded Services

The database is automatically seeded with 6 services on first run:

1. **Cloud Computing** - Scalable cloud infrastructure
2. **Cybersecurity** - Security solutions and threat detection
3. **Enterprise Solutions** - Large-scale business software
4. **Data Analytics** - Advanced analytics and BI
5. **Mobile Development** - iOS and Android apps
6. **Technical Support** - 24/7 technical support

## API Documentation

### Base URL
```
http://localhost:3000/api
```

### Endpoints

#### 1. Get All Services
```
GET /api/services
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Services retrieved successfully",
  "data": [
    {
      "id": 1,
      "title": "Cloud Computing",
      "description": "Scalable cloud infrastructure...",
      "fullDescription": "Leverage our advanced cloud computing platform...",
      "pricing": "Rp 5.000.000",
      "features": ["Auto-scaling", "Load Balancing", "99.9% Uptime", ...],
      "benefits": ["Reduce operational costs by 40%", ...],
      "imageColor": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "created_at": "2024-01-15 10:30:00",
      "updated_at": "2024-01-15 10:30:00"
    },
    ...
  ],
  "total": 6
}
```

---

#### 2. Get Service by ID
```
GET /api/services/:id
```

**Parameters:**
- `id` (path) - Service ID (required)

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Service retrieved successfully",
  "data": {
    "id": 1,
    "title": "Cloud Computing",
    "description": "Scalable cloud infrastructure...",
    "fullDescription": "Leverage our advanced cloud computing platform...",
    "pricing": "Rp 5.000.000",
    "features": ["Auto-scaling", "Load Balancing", "99.9% Uptime", ...],
    "benefits": ["Reduce operational costs by 40%", ...],
    "imageColor": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "created_at": "2024-01-15 10:30:00",
    "updated_at": "2024-01-15 10:30:00"
  }
}
```

**Response (Not Found - 404):**
```json
{
  "success": false,
  "message": "Service not found"
}
```

---

#### 3. Create New Service
```
POST /api/services
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Blockchain Solutions",
  "description": "Decentralized blockchain technology for enterprises",
  "fullDescription": "Transform your business with secure blockchain solutions...",
  "pricing": "Rp 10.000.000",
  "features": ["Smart Contracts", "Distributed Ledger", "Consensus Algorithms"],
  "benefits": ["Increase security by 99%", "Reduce transaction costs"],
  "imageColor": "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "message": "Service created successfully",
  "data": {
    "id": 7,
    "title": "Blockchain Solutions",
    "description": "Decentralized blockchain technology for enterprises",
    "fullDescription": "Transform your business with secure blockchain solutions...",
    "pricing": "Rp 10.000.000",
    "features": ["Smart Contracts", "Distributed Ledger", "Consensus Algorithms"],
    "benefits": ["Increase security by 99%", "Reduce transaction costs"],
    "imageColor": "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "created_at": "2024-01-15 11:45:30"
  }
}
```

**Response (Validation Error - 400):**
```json
{
  "success": false,
  "message": "All fields are required"
}
```

**Response (Duplicate Title - 400):**
```json
{
  "success": false,
  "message": "Service with this title already exists"
}
```

---

#### 4. Update Service
```
PUT /api/services/:id
Content-Type: application/json
```

**Parameters:**
- `id` (path) - Service ID (required)

**Request Body:** (Same as Create, all fields required)
```json
{
  "title": "Cloud Computing Pro",
  "description": "Updated description...",
  "fullDescription": "Updated full description...",
  "pricing": "Rp 6.000.000",
  "features": ["Auto-scaling", "Enhanced Load Balancing"],
  "benefits": ["Reduce costs by 50%"],
  "imageColor": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Service updated successfully",
  "data": {
    "id": 1,
    "title": "Cloud Computing Pro",
    "description": "Updated description...",
    ...
    "updated_at": "2024-01-15 12:15:00"
  }
}
```

**Response (Not Found - 404):**
```json
{
  "success": false,
  "message": "Service not found"
}
```

---

#### 5. Delete Service
```
DELETE /api/services/:id
```

**Parameters:**
- `id` (path) - Service ID (required)

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Service deleted successfully",
  "data": {
    "id": 7,
    "title": "Blockchain Solutions"
  }
}
```

**Response (Not Found - 404):**
```json
{
  "success": false,
  "message": "Service not found"
}
```

---

## Testing with BRUNO

BRUNO is a modern API testing tool similar to Postman. This backend includes a BRUNO collection for easy testing.

### Setting Up BRUNO Tests

1. **Import the Collection**
   - Open BRUNO
   - Create a new collection named "TechVision API"
   - Add requests for each endpoint

2. **Available Test Requests**
   - ✅ GET All Services
   - ✅ GET Service by ID (ID: 1)
   - ✅ POST Create New Service
   - ✅ PUT Update Service (ID: 1)
   - ✅ DELETE Service (ID: 7)

### Sample BRUNO Test Results

#### GET All Services
- **Status:** 200 OK
- **Time:** 15ms
- **Response:** Returns array of 6 services

#### GET Service by ID
- **Status:** 200 OK
- **Time:** 8ms
- **Response:** Returns single service object

#### POST Create Service
- **Status:** 201 Created
- **Time:** 12ms
- **Response:** Returns created service with new ID

#### PUT Update Service
- **Status:** 200 OK
- **Time:** 10ms
- **Response:** Returns updated service object

#### DELETE Service
- **Status:** 200 OK
- **Time:** 9ms
- **Response:** Returns deleted service info

---

## Environment Variables

Create a `.env` file in the backend directory (copy from `.env.example`):

```env
PORT=3000
NODE_ENV=development
```

---

## Error Handling

The API provides detailed error responses:

### HTTP Status Codes
- **200 OK** - Request successful
- **201 Created** - Resource successfully created
- **400 Bad Request** - Validation error or invalid data
- **404 Not Found** - Resource not found
- **500 Internal Server Error** - Server error

### Error Response Format
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message (if available)"
}
```

---

## Development

### Project Dependencies

- **express** (^4.18.2) - Web framework
- **cors** (^2.8.5) - Cross-origin requests
- **body-parser** (^1.20.2) - Parse request bodies
- **sqlite3** (^5.1.6) - Database driver
- **uuid** (^9.0.0) - Unique ID generation
- **nodemon** (^3.0.1) - Development server reload

### Running with Nodemon
```bash
npm run dev
```

Server will auto-reload on file changes.

---

## Integration with Frontend

The frontend (Project 1) can be updated to use this API:

### Base API URL
```javascript
const API_URL = 'http://localhost:3000/api';
```

### Fetch Examples

**Get all services:**
```javascript
fetch(`${API_URL}/services`)
  .then(res => res.json())
  .then(data => console.log(data.data));
```

**Get service by ID:**
```javascript
fetch(`${API_URL}/services/1`)
  .then(res => res.json())
  .then(data => console.log(data.data));
```

**Create service:**
```javascript
fetch(`${API_URL}/services`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'New Service',
    description: 'Description...',
    fullDescription: 'Full description...',
    pricing: 'Rp 5.000.000',
    features: ['Feature 1', 'Feature 2'],
    benefits: ['Benefit 1', 'Benefit 2'],
    imageColor: 'linear-gradient(...)'
  })
})
.then(res => res.json())
.then(data => console.log(data.data));
```

---

## Project Information

- **Author:** 23552011089_Muhamad Al Ghozali_TIF RP 23 CNS B
- **Version:** 1.0.0
- **License:** MIT
- **Related Project:** TechVision Solutions Frontend (Project 1)

---

## Support & Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
# Windows - Find process using port 3000
netstat -ano | findstr :3000

# Linux/Mac
lsof -i :3000

# Use different port
PORT=3001 npm start
```

### Database Issues
If database is corrupted:
```bash
# Delete database file and restart (it will recreate and reseed)
rm database.db
npm start
```

### CORS Issues
Update CORS settings in `server.js` if needed:
```javascript
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

---

## Related Files

- Backend Server: `server.js`
- Database Config: `database.js`
- Dependencies: `package.json`
- Frontend: `../frontend/`

Last Updated: January 15, 2024
