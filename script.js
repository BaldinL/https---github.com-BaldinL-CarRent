document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('rent-modal');
    const closeBtn = document.querySelector('.close-btn');
    const rentBtns = document.querySelectorAll('.rent-btn');
    const rentForm = document.getElementById('rent-form');
    const carIdInput = document.getElementById('car-id');

    rentBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const carId = e.target.closest('.car').getAttribute('data-id');
            carIdInput.value = carId;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    rentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(rentForm);
        alert(`Запит на оренду відправлено!\nІм'я: ${formData.get('name')}\nЕлектронна пошта: ${formData.get('email')}\nID Машини: ${formData.get('car-id')}`);
        modal.style.display = 'none';
        rentForm.reset();
    });
});
