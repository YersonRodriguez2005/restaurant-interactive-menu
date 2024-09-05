document.querySelectorAll('.menu-category button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        document.querySelectorAll('.menu-category button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        document.querySelectorAll('.menu-item').forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
