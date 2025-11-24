# Simple API Testing for TechVision Backend

$baseUrl = "http://localhost:3000/api"

Write-Host "===== TechVision API - CRUD Testing =====" -ForegroundColor Cyan
Write-Host ""

# Test 1: Get All Services
Write-Host "[TEST 1] GET /api/services - Retrieve all services" -ForegroundColor Green
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/services" -Method Get -ContentType "application/json"
    $data = $response.Content | ConvertFrom-Json
    Write-Host "  Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "  Result: $($data.message)" -ForegroundColor White
    Write-Host "  Total Services: $($data.total)" -ForegroundColor Cyan
    Write-Host ""
} catch {
    Write-Host "  ERROR: Server not responding" -ForegroundColor Red
    Write-Host ""
}

# Test 2: Get Single Service
Write-Host "[TEST 2] GET /api/services/1 - Retrieve Cloud Computing service" -ForegroundColor Green
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/services/1" -Method Get -ContentType "application/json"
    $data = $response.Content | ConvertFrom-Json
    Write-Host "  Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "  Service Title: $($data.data.title)" -ForegroundColor Cyan
    Write-Host "  Price: $($data.data.pricing)" -ForegroundColor Cyan
    Write-Host ""
} catch {
    Write-Host "  ERROR: Could not retrieve service" -ForegroundColor Red
    Write-Host ""
}

# Test 3: Create New Service
Write-Host "[TEST 3] POST /api/services - Create new AI Solutions service" -ForegroundColor Green
try {
    $newService = @{
        title = "AI Solutions"
        description = "Artificial Intelligence and Machine Learning solutions"
        fullDescription = "Transform your business with cutting-edge AI solutions."
        pricing = "Rp 12.000.000"
        features = @("Machine Learning", "Neural Networks", "NLP", "Computer Vision")
        benefits = @("Automate 70%", "Improve accuracy by 95%", "Real-time predictions")
        imageColor = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    } | ConvertTo-Json

    $response = Invoke-WebRequest -Uri "$baseUrl/services" -Method Post -ContentType "application/json" -Body $newService
    $data = $response.Content | ConvertFrom-Json
    Write-Host "  Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "  Created Service: $($data.data.title)" -ForegroundColor Cyan
    Write-Host "  Service ID: $($data.data.id)" -ForegroundColor Cyan
    $newServiceId = $data.data.id
    Write-Host ""
} catch {
    Write-Host "  ERROR: Could not create service" -ForegroundColor Red
    Write-Host ""
}

# Test 4: Update Service
Write-Host "[TEST 4] PUT /api/services/1 - Update Cloud Computing with new price" -ForegroundColor Green
try {
    $updateService = @{
        title = "Cloud Computing Pro"
        description = "Advanced cloud infrastructure with enhanced security"
        fullDescription = "Enterprise-grade cloud with 99.99% uptime guarantee."
        pricing = "Rp 6.500.000"
        features = @("Auto-scaling", "Load Balancing", "99.99% Uptime", "Enhanced Security")
        benefits = @("Reduce costs by 50%", "Global presence", "Enterprise security")
        imageColor = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    } | ConvertTo-Json

    $response = Invoke-WebRequest -Uri "$baseUrl/services/1" -Method Put -ContentType "application/json" -Body $updateService
    $data = $response.Content | ConvertFrom-Json
    Write-Host "  Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "  Updated Service: $($data.data.title)" -ForegroundColor Cyan
    Write-Host "  New Price: $($data.data.pricing)" -ForegroundColor Cyan
    Write-Host ""
} catch {
    Write-Host "  ERROR: Could not update service" -ForegroundColor Red
    Write-Host ""
}

# Test 5: Delete Service
Write-Host "[TEST 5] DELETE /api/services/7 - Delete created service" -ForegroundColor Green
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/services/7" -Method Delete -ContentType "application/json"
    $data = $response.Content | ConvertFrom-Json
    Write-Host "  Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "  Deleted Service: $($data.data.title)" -ForegroundColor Cyan
    Write-Host ""
} catch {
    Write-Host "  STATUS: Service not found or already deleted" -ForegroundColor Yellow
    Write-Host ""
}

Write-Host "===== Test Summary =====" -ForegroundColor Cyan
Write-Host "Test completed. Check results above." -ForegroundColor White
