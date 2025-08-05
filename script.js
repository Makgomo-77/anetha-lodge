// Booking form alert
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for booking with Mashishimale Lodge! We will contact you soon.");
    this.reset();
});