const heading = document.querySelector('.btn');
if (heading) {
    heading.addEventListener('click', function() {
        alert('Button clicked!');
    });
} else {
    console.log('Button with class "btn" not found');
}