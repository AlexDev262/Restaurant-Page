const content = document.getElementById('content');
const contactPage = `<h2 class="contact-title">Contact Us</h2>
        <div class="contact-box">
        <div class="contact-field">
            <p>Adress:</p>
            <p>11860 Balboa Blvd, CA 91344</p>
        </div>

        <div class="contact-field">
            <p>Phone Number:</p>
            <p>(310) 555-0147</p>
        </div>

        <div class="contact-field">
            <p>Phone Number:</p>
            <p>(213) 555-0192</p>
        </div>

        <div class="contact-field">
            <p>Email:</p>
            <p>thevale@valerestaurant.com</p>
        </div>
        </div>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4163.593056475687!2d-118.50073150000001!3d34.2858944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29b5dc47054ad%3A0x407039948fd3c63a!2sVale%20Lounge!5e1!3m2!1sen!2smk!4v1774756691889!5m2!1sen!2smk" 
        allowfullscreen
        width="600" 
        height="450" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
`;
function createContactPage(){
    content.innerHTML = contactPage;
}   
export {createContactPage};