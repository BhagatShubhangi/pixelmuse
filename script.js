document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const captionForm = document.getElementById('captionForm');
    const resultSection = document.getElementById('resultSection');
    const captionText = document.getElementById('captionText');
    const previewImage = document.getElementById('previewImage');

    imageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    captionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const file = imageInput.files[0];
        
        if (file) {
            const captions = [
                "A stunning moment that captures the essence of creativity.",
                "Visual storytelling at its finest - each pixel tells a story.",
                "An extraordinary image that transcends ordinary perception.",
                "Imagination meets technology in this breathtaking snapshot."
            ];

            const selectedCaption = captions[Math.floor(Math.random() * captions.length)];
            captionText.textContent = selectedCaption;
            resultSection.classList.remove('d-none');
        }
    });
});