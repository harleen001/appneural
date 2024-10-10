    
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const gridContainer = document.querySelector('.grid-container');
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'Loading projects...';
    gridContainer.appendChild(loadingMessage);

    async function fetchProjects() {
        try {
            const response = await fetch('projects.json'); 
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            loadingMessage.style.display = 'none';
            if (!data || data.length === 0) {
                gridContainer.innerHTML = '<p>No projects found.</p>';
                return;
            }

            data.forEach(item => {
                const gridItem = document.createElement('div');
                gridItem.className = 'grid-item';
                gridItem.dataset.title = item.title;
                gridItem.dataset.description = item.description;

                gridItem.innerHTML = `
                    <img src="${item.imageUrl}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.description.substring(0, 100)}...</p>
                `;

                gridItem.addEventListener('click', () => {
                    modalTitle.textContent = item.title;
                    modalDescription.textContent = item.description;
                    modal.style.display = 'block';
                });

                gridContainer.appendChild(gridItem);
            });
        } catch (error) {
            loadingMessage.style.display = 'none';
            gridContainer.innerHTML = `<p class="error-message">Error: ${error.message}</p>`;
        }
    }
    fetchProjects();

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = '';

        if (!name || !email || !message) {
            errorMessage.textContent = 'Please fill in all fields.';
        } else {
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message!');
            document.getElementById('contactForm').reset();
        }
    });