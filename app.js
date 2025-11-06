// ================================
// Global State
// ================================
let cars = [
    {
        id: 'car3242',
        owner: 'Bob',
        make: 'Honda',
        model: 'Civic',
        year: 2019,
        color: 'Blue',
        mileage: 45000,
        image: null
    },
    {
        id: 'car4567',
        owner: 'Alice',
        make: 'Toyota',
        model: 'Camry',
        year: 2021,
        color: 'Silver',
        mileage: 28000,
        image: null
    },
    {
        id: 'car8901',
        owner: 'Charlie',
        make: 'Ford',
        model: 'F-150',
        year: 2020,
        color: 'Red',
        mileage: 52000,
        image: null
    }
];

let currentCarId = null;
let filteredCars = [...cars];

// ================================
// Initialization
// ================================
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    renderCarList();
    initializeKeyboardNavigation();
});

// ================================
// Local Storage Functions
// ================================
function saveToLocalStorage() {
    localStorage.setItem('carInventory', JSON.stringify(cars));
}

function loadFromLocalStorage() {
    const stored = localStorage.getItem('carInventory');
    if (stored) {
        cars = JSON.parse(stored);
        filteredCars = [...cars];
    }
}

// ================================
// Navigation Functions
// ================================
function navigateToHome() {
    showPage('homePage');
    renderCarList();
}

function navigateToDetails(carId) {
    currentCarId = carId;
    showPage('detailsPage');
    renderCarDetails(carId);
}

function navigateToAddCar() {
    showPage('addCarPage');
    document.getElementById('addCarForm').reset();
    document.getElementById('addImagePreview').innerHTML = '';
}

function navigateToEditCar(carId) {
    currentCarId = carId;
    showPage('editCarPage');
    populateEditForm(carId);
}

function navigateToSettings() {
    showPage('settingsPage');
}

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// ================================
// Car List Rendering
// ================================
function renderCarList() {
    const carListContainer = document.getElementById('carList');
    const noResults = document.getElementById('noResults');
    
    if (filteredCars.length === 0) {
        carListContainer.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    carListContainer.style.display = 'grid';
    noResults.style.display = 'none';
    
    carListContainer.innerHTML = filteredCars.map(car => `
        <div class="car-card" role="article" aria-label="${car.year} ${car.make} ${car.model}">
            <div class="car-info">
                <h3>${car.year} ${car.make} ${car.model}</h3>
                <p class="car-details">Owner: ${car.owner} | ID: ${car.id}</p>
            </div>
            <div class="car-actions">
                <button class="btn btn-secondary" onclick="navigateToDetails('${car.id}')" 
                        aria-label="View details of ${car.year} ${car.make} ${car.model}">
                    View Details
                </button>
            </div>
        </div>
    `).join('');
}

// ================================
// Car Details Rendering
// ================================
function renderCarDetails(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) {
        showToast('Car not found', 'error');
        navigateToHome();
        return;
    }
    
    const detailsContent = document.getElementById('carDetailsContent');
    detailsContent.innerHTML = `
        <h2 class="details-title">${car.year} ${car.make} ${car.model}</h2>
        
        <div class="details-grid">
            <div class="detail-item">
                <span class="detail-label">Car ID:</span>
                <span class="detail-value">${car.id}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Owner:</span>
                <span class="detail-value">${car.owner}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Make:</span>
                <span class="detail-value">${car.make}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Model:</span>
                <span class="detail-value">${car.model}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Year:</span>
                <span class="detail-value">${car.year}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Color:</span>
                <span class="detail-value">${car.color || 'N/A'}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Mileage:</span>
                <span class="detail-value">${car.mileage ? car.mileage.toLocaleString() + ' miles' : 'N/A'}</span>
            </div>
        </div>
        
        <div class="car-image-container">
            ${car.image ? 
                `<img src="${car.image}" alt="${car.year} ${car.make} ${car.model}" class="car-image">` :
                `<div class="image-placeholder">[CAR IMAGE]</div>`
            }
        </div>
    `;
}

// ================================
// Filter and Search Functions
// ================================
function filterCars() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const yearFilter = document.getElementById('filterYear').value;
    const makeFilter = document.getElementById('filterMake').value;
    const modelFilter = document.getElementById('filterModel').value.toLowerCase();
    
    filteredCars = cars.filter(car => {
        const matchesSearch = !searchTerm || 
            car.owner.toLowerCase().includes(searchTerm) ||
            car.make.toLowerCase().includes(searchTerm) ||
            car.model.toLowerCase().includes(searchTerm) ||
            car.id.toLowerCase().includes(searchTerm);
            
        const matchesYear = !yearFilter || car.year.toString() === yearFilter;
        const matchesMake = !makeFilter || car.make === makeFilter;
        const matchesModel = !modelFilter || car.model.toLowerCase().includes(modelFilter);
        
        return matchesSearch && matchesYear && matchesMake && matchesModel;
    });
    
    renderCarList();
}

function sortCars() {
    const sortOption = document.getElementById('sortOption').value;
    
    switch(sortOption) {
        case 'year-desc':
            filteredCars.sort((a, b) => b.year - a.year);
            break;
        case 'year-asc':
            filteredCars.sort((a, b) => a.year - b.year);
            break;
        case 'make-asc':
            filteredCars.sort((a, b) => a.make.localeCompare(b.make));
            break;
        case 'make-desc':
            filteredCars.sort((a, b) => b.make.localeCompare(a.make));
            break;
    }
    
    renderCarList();
}

function focusSearch() {
    navigateToHome();
    setTimeout(() => {
        document.getElementById('searchInput').focus();
    }, 100);
}

// ================================
// Add Car Function
// ================================
function handleAddCar(event) {
    event.preventDefault();
    
    const newCar = {
        id: 'car' + Date.now(),
        owner: document.getElementById('addOwner').value,
        make: document.getElementById('addMake').value,
        model: document.getElementById('addModel').value,
        year: parseInt(document.getElementById('addYear').value),
        color: document.getElementById('addColor').value,
        mileage: parseInt(document.getElementById('addMileage').value) || null,
        image: document.getElementById('addImagePreview').querySelector('img')?.src || null
    };
    
    cars.push(newCar);
    filteredCars = [...cars];
    saveToLocalStorage();
    
    showToast('Car added successfully!');
    navigateToHome();
}

// ================================
// Edit Car Functions
// ================================
function editCurrentCar() {
    navigateToEditCar(currentCarId);
}

function populateEditForm(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;
    
    document.getElementById('editCarId').value = car.id;
    document.getElementById('editOwner').value = car.owner;
    document.getElementById('editMake').value = car.make;
    document.getElementById('editModel').value = car.model;
    document.getElementById('editYear').value = car.year;
    document.getElementById('editColor').value = car.color || '';
    document.getElementById('editMileage').value = car.mileage || '';
    
    const previewDiv = document.getElementById('editImagePreview');
    if (car.image) {
        previewDiv.innerHTML = `<img src="${car.image}" class="preview-image" alt="Car preview">`;
    } else {
        previewDiv.innerHTML = '';
    }
}

function handleEditCar(event) {
    event.preventDefault();
    
    const carId = document.getElementById('editCarId').value;
    const carIndex = cars.findIndex(c => c.id === carId);
    
    if (carIndex === -1) {
        showToast('Car not found', 'error');
        return;
    }
    
    cars[carIndex] = {
        ...cars[carIndex],
        owner: document.getElementById('editOwner').value,
        make: document.getElementById('editMake').value,
        model: document.getElementById('editModel').value,
        year: parseInt(document.getElementById('editYear').value),
        color: document.getElementById('editColor').value,
        mileage: parseInt(document.getElementById('editMileage').value) || null,
        image: document.getElementById('editImagePreview').querySelector('img')?.src || cars[carIndex].image
    };
    
    filteredCars = [...cars];
    saveToLocalStorage();
    
    showToast('Car updated successfully!');
    navigateToDetails(carId);
}

function cancelEdit() {
    if (currentCarId) {
        navigateToDetails(currentCarId);
    } else {
        navigateToHome();
    }
}

// ================================
// Delete Car Functions
// ================================
function showDeleteConfirmation() {
    const car = cars.find(c => c.id === currentCarId);
    if (!car) return;
    
    const deleteInfo = document.getElementById('deleteCarInfo');
    deleteInfo.innerHTML = `
        <p><strong>${car.year} ${car.make} ${car.model}</strong></p>
        <p>Owner: ${car.owner}</p>
        <p>ID: ${car.id}</p>
    `;
    
    const modal = document.getElementById('deleteModal');
    modal.classList.add('active');
}

function closeDeleteModal() {
    const modal = document.getElementById('deleteModal');
    modal.classList.remove('active');
}

function confirmDelete() {
    const carIndex = cars.findIndex(c => c.id === currentCarId);
    
    if (carIndex !== -1) {
        cars.splice(carIndex, 1);
        filteredCars = [...cars];
        saveToLocalStorage();
        
        closeDeleteModal();
        showToast('Car deleted successfully!');
        navigateToHome();
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('deleteModal');
    if (event.target === modal) {
        closeDeleteModal();
    }
}

// ================================
// Image Preview Function
// ================================
function previewImage(event, previewId) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewDiv = document.getElementById(previewId);
            previewDiv.innerHTML = `<img src="${e.target.result}" class="preview-image" alt="Image preview">`;
        };
        reader.readAsDataURL(file);
    }
}

// ================================
// Settings Functions
// ================================
function changeTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
    showToast('Theme changed successfully!');
}

function toggleLargeText() {
    const isChecked = document.getElementById('largeText').checked;
    if (isChecked) {
        document.body.classList.add('large-text');
    } else {
        document.body.classList.remove('large-text');
    }
    localStorage.setItem('largeText', isChecked);
    showToast('Text size updated!');
}

function toggleHighContrast() {
    const isChecked = document.getElementById('highContrast').checked;
    if (isChecked) {
        document.body.classList.add('high-contrast');
    } else {
        document.body.classList.remove('high-contrast');
    }
    localStorage.setItem('highContrast', isChecked);
    showToast('Contrast mode updated!');
}

function saveSettings() {
    const theme = document.querySelector('input[name="theme"]:checked').value;
    const language = document.getElementById('languageSelect').value;
    const largeText = document.getElementById('largeText').checked;
    const highContrast = document.getElementById('highContrast').checked;
    const screenReader = document.getElementById('screenReader').checked;
    
    localStorage.setItem('theme', theme);
    localStorage.setItem('language', language);
    localStorage.setItem('largeText', largeText);
    localStorage.setItem('highContrast', highContrast);
    localStorage.setItem('screenReader', screenReader);
    
    changeTheme(theme);
    
    showToast('Settings saved successfully!');
}

// Load settings on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const savedLargeText = localStorage.getItem('largeText') === 'true';
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    
    if (savedTheme === 'dark') {
        document.querySelector('input[name="theme"][value="dark"]').checked = true;
        document.body.classList.add('dark-mode');
    }
    
    if (savedLargeText) {
        document.getElementById('largeText').checked = true;
        document.body.classList.add('large-text');
    }
    
    if (savedHighContrast) {
        document.getElementById('highContrast').checked = true;
        document.body.classList.add('high-contrast');
    }
});

// ================================
// CSV Import/Export Functions
// ================================
function exportCSV() {
    const csvContent = [
        ['ID', 'Owner', 'Make', 'Model', 'Year', 'Color', 'Mileage'],
        ...cars.map(car => [
            car.id,
            car.owner,
            car.make,
            car.model,
            car.year,
            car.color || '',
            car.mileage || ''
        ])
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'car-inventory.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showToast('CSV exported successfully!');
}

function importCSV() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';
    
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const lines = e.target.result.split('\n');
                    const headers = lines[0].split(',');
                    
                    for (let i = 1; i < lines.length; i++) {
                        if (lines[i].trim()) {
                            const values = lines[i].split(',');
                            const car = {
                                id: values[0] || 'car' + Date.now() + i,
                                owner: values[1],
                                make: values[2],
                                model: values[3],
                                year: parseInt(values[4]),
                                color: values[5] || null,
                                mileage: parseInt(values[6]) || null,
                                image: null
                            };
                            cars.push(car);
                        }
                    }
                    
                    filteredCars = [...cars];
                    saveToLocalStorage();
                    renderCarList();
                    showToast('CSV imported successfully!');
                } catch (error) {
                    showToast('Error importing CSV file', 'error');
                    console.error('Import error:', error);
                }
            };
            reader.readAsText(file);
        }
    };
    
    input.click();
}

// ================================
// Toast Notification
// ================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show';
    
    if (type === 'error') {
        toast.classList.add('error');
    }
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ================================
// Keyboard Navigation
// ================================
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Escape key - close modals or go back
        if (e.key === 'Escape') {
            const modal = document.getElementById('deleteModal');
            if (modal.classList.contains('active')) {
                closeDeleteModal();
            }
        }
        
        // Ctrl/Cmd + S - Save (prevent default and trigger appropriate save)
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            const activePage = document.querySelector('.page.active');
            if (activePage.id === 'addCarPage') {
                document.getElementById('addCarForm').dispatchEvent(new Event('submit'));
            } else if (activePage.id === 'editCarPage') {
                document.getElementById('editCarForm').dispatchEvent(new Event('submit'));
            }
        }
    });
}

// ================================
// Utility Functions
// ================================
function generateCarId() {
    return 'car' + Date.now();
}
