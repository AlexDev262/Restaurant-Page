import trayIcon from "./assets/tray.png";
import facebookIcon from './assets/facebook-icon.png';
import instagramIcon from './assets/instagram-icon.png';
import twitterIcon from './assets/twitter-icon.png';

import imgOne from './assets/gal_1.avif';
import imgTwo from './assets/gal_2.jpg';
import imgThree from './assets/gal_3.jpg';
import imgFour from './assets/gal_4.jpg';
import imgFive from './assets/gal_5.jpg';
import imgSix from './assets/gal_6.jpg';



const content = document.getElementById('content');
const aboutPage = `<div class="opening-image">
            <p class="who-we-are">WHO WE ARE</p>
            <p>About us</p>
        </div>
        <main>
            <div class="articles">
                <p class="description">Vale Wine Bar & Restaurant</p>
                <h2>About us</h2>
                <p>Vale Wine Bar & Restaurant is a family-owned restaurant located in the West Hollywood neighborhood, envisioned as a pleasant place away from the city hustle, a place for enjoyment and delicious food. It is a venue with its own winter atmosphere, featuring an enclosed smoking area with 88 seats and an indoor non-smoking area with 52 seats, a summer terrace with 120 seats, a children’s play area of 650 m², and a private parking lot reserved for regular guests with a capacity of 25 parking spaces.</p>
                <p>Our restaurant is inspired by the combination of top-quality food and a wide selection of wines at affordable prices. Dishes are prepared in a modern manner using traditional Macedonian ingredients, enriched by the creativity of our chefs. Each meal is recommended to be paired with one of many Macedonian or imported wines from our wine cellar, which features over 250 wine labels from different parts of the world, offered in a unique way at supermarket prices.</p>
                <p>Your favorite place for children’s birthday parties, family lunches, or corporate celebrations.</p>
                <p>We are creating a new tradition, one we strive to cherish for many years…</p>
                
                <div class="reservations">
                    <img alt="server-icon" class="server-icon" src=${trayIcon} width="50" height="50">
                    <p class="reservations-text">Reservations Phone Numbers</p>
                    <p class="reservations-number">(310) 555-0147 / (213) 555-0192</p>
                </div>

                <div class="social-icons">
                    <a href="https://www.facebook.com/"><img class="icon" alt="facebook-icon" src=${facebookIcon} width="50" height="50"></a>
                    <a href="https://www.instagram.com/"><img class="icon" alt="instagram-icon" src=${instagramIcon} width="50" height="50"></a>
                    <a href="https://www.x.com/"><img class="icon" alt="google-icon" src=${twitterIcon} width="50" height="50"></a>
                </div>
            </div>
            
            <div class="about-images">
                <img alt="gal-1" class="gal-img" src="${imgOne}" width="100" height="100">
                <img alt="gal-2" class="gal-img" src=${imgTwo} width="100" height="100">
                <img alt="gal-3" class="gal-img" src=${imgThree} width="100" height="100">
                <img alt="gal-4" class="gal-img" src=${imgFour} width="100" height="100">
                <img alt="gal-5" class="gal-img" src=${imgFive} width="100" height="100">
                <img alt="gal-6" class="gal-img" src=${imgSix} width="100" height="100">
            </div>
        </main>`;

function createAboutPage(){
    content.innerHTML = aboutPage;
}

export {createAboutPage};