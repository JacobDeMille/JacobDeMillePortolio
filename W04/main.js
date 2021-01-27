
const form = document.forms['search'];
form.addEventListener ('submit', search, false);
function search() {
    alert(' Form Submitted');
}
function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}
