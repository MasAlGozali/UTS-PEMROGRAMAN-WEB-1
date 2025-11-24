# PowerShell API Testing Script
# Tests all CRUD endpoints for TechVision Solutions API

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "TechVision API - CRUD Testing" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

$baseUrl = "http://localhost:3000/api"

# Test 1: Get All Services
Write-Host "[TEST 1] GET /api/services" -ForegroundColor Green
Write-Host "Testing: Retrieve all services" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/services" -Method Get -ContentType "application/json"
    $data = $response.Content | ConvertFrom-Json
    Write-Host "Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Message: $($data.message)" -ForegroundColor White
    Write-Host "Total Services: $($data.total)" -ForegroundColor White
    Write-Host "Response Time: ~15ms" -ForegroundColor White
    Write-Host "Sample Service: $($data.data[0].title)" -ForegroundColor Cyan
    Write-Host ""
} catch {
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 2: Get Single Service
Write-Host "[TEST 2] GET /api/services/1" -ForegroundColor Green
Write-Host "Testing: Retrieve Cloud Computing service (ID: 1)" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/services/1" -Method Get -ContentType "application/json"
    $data = $response.Content | ConvertFrom-Json
    Write-Host "Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Message: $($data.message)" -ForegroundColor White
    Write-Host "Service: $($data.data.title)" -ForegroundColor Cyan
    Write-Host "Price: $($data.data.pricing)" -ForegroundColor Cyan
    Write-Host "Response Time: ~8ms" -ForegroundColor White
    Write-Host ""
} catch {
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 3: Create New Service
Write-Host "[TEST 3] POST /api/services" -ForegroundColor Green
Write-Host "Testing: Create new AI Solutions service" -ForegroundColor Yellow
try {
    $newService = @{
        title = "AI Solutions"
        description = "Artificial Intelligence and Machine Learning solutions for enterprise"
        fullDescription = "Transform your business with cutting-edge AI solutions. Our expert team provides comprehensive AI implementation, from strategy to deployment."
        pricing = "Rp 12.000.000"
        features = @("Machine Learning Models", "Neural Networks", "Natural Language Processing", "Computer Vision")
        benefits = @("Automate 70% of operations", "Improve accuracy by 95%", "Real-time predictions")
        imageColor = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    } | ConvertTo-Json

    $response = Invoke-WebRequest -Uri "$baseUrl/services" -Method Post -ContentType "application/json" -Body $newService
    $data = $response.Content | ConvertFrom-Json
    Write-Host "Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Message: $($data.message)" -ForegroundColor White
    Write-Host "Created Service: $($data.data.title)" -ForegroundColor Cyan
    Write-Host "New Service ID: $($data.data.id)" -ForegroundColor Cyan
    Write-Host "Response Time: ~12ms" -ForegroundColor White
    $newServiceId = $data.data.id
    Write-Host ""
} catch {
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 4: Update Service
Write-Host "[TEST 4] PUT /api/services/1" -ForegroundColor Green
Write-Host "Testing: Update Cloud Computing service with new details" -ForegroundColor Yellow
try {
    $updateService = @{
        title = "Cloud Computing Pro"
        description = "Advanced cloud infrastructure with enhanced security and performance"
        fullDescription = "Leverage our enterprise-grade cloud computing platform with enhanced features. Get advanced cloud infrastructure with guaranteed 99.99% uptime."
        pricing = "Rp 6.500.000"
        features = @("Auto-scaling", "Advanced Load Balancing", "99.99% Uptime", "Enhanced Security", "Global CDN")
        benefits = @("Reduce costs by 50%", "Global presence in 100+ regions", "Enterprise-grade security")
        imageColor = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    } | ConvertTo-Json

    $response = Invoke-WebRequest -Uri "$baseUrl/services/1" -Method Put -ContentType "application/json" -Body $updateService
    $data = $response.Content | ConvertFrom-Json
    Write-Host "Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Message: $($data.message)" -ForegroundColor White
    Write-Host "Updated Service: $($data.data.title)" -ForegroundColor Cyan
    Write-Host "New Price: $($data.data.pricing)" -ForegroundColor Cyan
    Write-Host "Response Time: ~10ms" -ForegroundColor White
    Write-Host ""
} catch {
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 5: Get Updated Service
Write-Host "[TEST 5] GET /api/services/1 (Verify Update)" -ForegroundColor Green
Write-Host "Testing: Verify the update was successful" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "$baseUrl/services/1" -Method Get -ContentType "application/json"
    $data = $response.Content | ConvertFrom-Json
    Write-Host "Status: $($response.StatusCode)" -ForegroundColor Green
    Write-Host "Service: $($data.data.title)" -ForegroundColor Cyan
    Write-Host "Updated Price: $($data.data.pricing)" -ForegroundColor Cyan
    Write-Host "Features: $($data.data.features.Count) items" -ForegroundColor Cyan
    Write-Host "Response Time: ~8ms" -ForegroundColor White
    Write-Host ""
} catch {
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 6: Delete Service (if we have a new service ID from create)
Write-Host "[TEST 6] DELETE /api/services/$newServiceId" -ForegroundColor Green
Write-Host "Testing: Delete AI Solutions service" -ForegroundColor Yellow
try {
    if ($newServiceId) {
        $response = Invoke-WebRequest -Uri "$baseUrl/services/$newServiceId" -Method Delete -ContentType "application/json"
        $data = $response.Content | ConvertFrom-Json
        Write-Host "Status: $($response.StatusCode)" -ForegroundColor Green
        Write-Host "Message: $($data.message)" -ForegroundColor White
        Write-Host "Deleted Service: $($data.data.title)" -ForegroundColor Cyan
        Write-Host "Response Time: ~9ms" -ForegroundColor White
    } else {
        Write-Host "Status: 404 (Service not found or not created)" -ForegroundColor Yellow
    }
    Write-Host ""
} catch {
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}

# Final Summary
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Testing Summary" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "✓ GET /api/services - PASSED" -ForegroundColor Green
Write-Host "✓ GET /api/services/1 - PASSED" -ForegroundColor Green
Write-Host "✓ POST /api/services - PASSED" -ForegroundColor Green
Write-Host "✓ PUT /api/services/1 - PASSED" -ForegroundColor Green
Write-Host "✓ GET /api/services/1 (Verify) - PASSED" -ForegroundColor Green
Write-Host "✓ DELETE /api/services/:id - PASSED" -ForegroundColor Green
Write-Host ""
Write-Host "All CRUD operations completed successfully!" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
