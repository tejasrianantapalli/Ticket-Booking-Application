// Select all seat elements
const seats = document.querySelectorAll('.seat');
const countDisplay = document.getElementById('count');  // To display selected seats count
const totalDisplay = document.getElementById('total');  // To display total price
const pricePerSeat = 150;  // Set a fixed price per seat, can be dynamic if needed

let selectedSeats = [];  // Array to track selected seat indexes

// Function to update the count and total price
function updateSummary() {
    const selectedSeatsCount = selectedSeats.length;
    countDisplay.textContent = selectedSeatsCount;
    totalDisplay.textContent = selectedSeatsCount * pricePerSeat;
}

// Function to toggle seat selection
function toggleSeat(seat, index) {
    // If the seat is occupied, prevent any interaction
    if (seat.classList.contains('occupied')) {
        return;
    }

    // Toggle selected state
    seat.classList.toggle('selected');

    // Update the selectedSeats array
    if (seat.classList.contains('selected')) {
        selectedSeats.push(index);  // Add seat index to selectedSeats array
    } else {
        selectedSeats = selectedSeats.filter(seatIndex => seatIndex !== index);  // Remove from selectedSeats array
    }

    // Update summary (count and total price)
    updateSummary();
}

// Add event listeners for each seat
seats.forEach((seat, index) => {
    seat.addEventListener('click', () => toggleSeat(seat, index));
});

// Example of marking a seat as occupied (this could be done dynamically, like from a database)
function markOccupiedSeats() {
    const occupiedIndexes = [2, 5, 8];  // Example of occupied seat indexes (e.g., from a server)
    
    occupiedIndexes.forEach(index => {
        if (seats[index]) {
            seats[index].classList.add('occupied');  // Mark seat as occupied
        }
    });
}

// Call the markOccupiedSeats function to set some seats as occupied initially
markOccupiedSeats();
