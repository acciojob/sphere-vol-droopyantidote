function volume_sphere(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page

    // Retrieve the radius value entered by the user
    const radiusInput = document.getElementById('radius').value.trim();

    // Validate the input
    const radius = parseFloat(radiusInput);

    if (isNaN(radius) || radius < 0) {
        // Display 'NaN' for invalid input
        document.getElementById('volume').value = 'NaN';
    } else {
        // Calculate the volume of the sphere
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Display the calculated volume rounded to four decimal places
        document.getElementById('volume').value = volume.toFixed(4);
    }
}
