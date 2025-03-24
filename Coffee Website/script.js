document.addEventListener('DOMContentLoaded', function() {
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showAlert(message, type = 'error') {
        alert(message);
    }

    function showModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;z-index:999;';
        
     
        modal.innerHTML = `
            <div style="background:white;padding:20px;border-radius:5px;width:90%;max-width:500px;">
                <div style="display:flex;justify-content:space-between;margin-bottom:15px;">
                    <h3 style="margin:0;">${title}</h3>
                    <span id="closeModal" style="cursor:pointer;font-size:24px;">&times;</span>
                </div>
                <div>${content}</div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
  
        document.getElementById('closeModal').onclick = function() {
            document.body.removeChild(modal);
        };
    }

    function showBookingForm() {
        const formContent = `
            <form id="bookingForm">
                <div style="margin-bottom:15px;">
                    <label style="display:block;margin-bottom:5px;">Name</label>
                    <input type="text" id="bookingName" required style="width:100%;padding:8px;border-radius:4px;border:1px solid #ccc;">
                </div>
                <div style="margin-bottom:15px;">
                    <label style="display:block;margin-bottom:5px;">Phone</label>
                    <input type="tel" id="bookingPhone" required style="width:100%;padding:8px;border-radius:4px;border:1px solid #ccc;">
                </div>
                <div style="margin-bottom:15px;">
                    <label style="display:block;margin-bottom:5px;">Date</label>
                    <input type="date" id="bookingDate" required style="width:100%;padding:8px;border-radius:4px;border:1px solid #ccc;">
                </div>
                <div style="margin-bottom:15px;">
                    <label style="display:block;margin-bottom:5px;">Time</label>
                    <input type="time" id="bookingTime" required style="width:100%;padding:8px;border-radius:4px;border:1px solid #ccc;">
                </div>
                <div style="margin-bottom:15px;">
                    <label style="display:block;margin-bottom:5px;">Guests</label>
                    <input type="number" id="bookingGuests" min="1" max="20" required style="width:100%;padding:8px;border-radius:4px;border:1px solid #ccc;">
                </div>
                <div style="margin-bottom:15px;">
                    <label style="display:block;margin-bottom:5px;">Special Requests</label>
                    <textarea id="bookingNotes" rows="3" style="width:100%;padding:8px;border-radius:4px;border:1px solid #ccc;"></textarea>
                </div>
                <button type="submit" style="background:#3b141c;color:white;border:none;padding:10px 20px;border-radius:25px;cursor:pointer;">Book Table</button>
            </form>
        `;
        
        showModal('Book A Table', formContent);
        
        // Form submission
        setTimeout(() => {
            document.getElementById('bookingForm').onsubmit = function(e) {
                e.preventDefault();
                const name = document.getElementById('bookingName').value;
                const date = document.getElementById('bookingDate').value;
                const time = document.getElementById('bookingTime').value;
                const guests = document.getElementById('bookingGuests').value;
                
                document.querySelector('.modal-overlay').remove();
                showAlert(`Table booked for ${guests} on ${date} at ${time}. Thank you, ${name}!`, 'success');
            };
        }, 100);
    }


    const contactForm = document.querySelector('.contact_form form');
    if (contactForm) {
        contactForm.onsubmit = function(e) {
            e.preventDefault();
            
            const name = document.getElementById('Name').value.trim();
            const email = document.getElementById('email').value.trim();
            const number = document.getElementById('number').value.trim();
            const message = document.getElementById('textarea').value.trim();
            
     
            if (!name) return showAlert('Please enter your name');
            if (!email) return showAlert('Please enter your email');
            if (!isValidEmail(email)) return showAlert('Please enter a valid email');
            if (!number) return showAlert('Please enter your contact number');
            if (!message) return showAlert('Please enter your message');
            
            showAlert('Thank you for your message!', 'success');
            this.reset();
        };
    }

    const orderButton = document.querySelector('.hero_section_button .button:first-child');
    if (orderButton) {
        orderButton.onclick = function() {
            showModal('Order Online', 'Our online ordering system will be available soon!');
        };
    }

    const bookTableButton = document.querySelector('.hero_section_button .button:last-child');
    if (bookTableButton) {
        bookTableButton.onclick = function() {
            showBookingForm();
        };
    }
});