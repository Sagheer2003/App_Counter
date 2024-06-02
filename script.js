
let count = 0; // Initialize count

// Function to increment count
function increment() {
    count++;
    document.getElementById('countDisplay').classList.add('hide');
    setTimeout(() => {
        document.getElementById('countDisplay').innerText = count;
        document.getElementById('countDisplay').classList.remove('hide');
    }, 500);
}

// Function to decrement count
function decrement() {
    if (count > 0) {
        count--;
        document.getElementById('countDisplay').classList.add('hide');
        setTimeout(() => {
            document.getElementById('countDisplay').innerText = count;
            document.getElementById('countDisplay').classList.remove('hide');
        }, 500);
    }
}