// Example code for uploading video using fetch API
const uploadVideo = async (file) => {
    const formData = new FormData();
    formData.append('video', file);
  
    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Video uploaded successfully:', data);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };
  
  // Example usage
  const fileInput = document.getElementById('videoFileInput');
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadVideo(file);
    }
  });
  