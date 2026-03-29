const content = document.getElementById('content');
const menuPage = `<h2 class="menu-title">Menu 🍷🍽️</h2>
       <div class="menu">
            <section class="section-one">
                <ul>
                <li><h3>Starters | $3</h3>
                    <p>Grilled Shrimp Skewers</p>
                    <p>Tempura Squid Rings</p>
                    <p>Steamed Scallops in Herb Butter</p>
                </li>
                <li><h3>Soup & Fresh Greens | $4</h3>
                    <p>Manhattan Lobster Bisque</p>
                    <p>Spicy Shrimp Ceviche</p>
                    <p>Papaya Prawn Salad</p>
                </li>
                <li><h3>Confections | $5</h3>
                    <p>Key Lime Pie</p>
                    <p>Lemon Sorbet</p>
                    <p>Coconut Cream Mousse</p>
                </li>
                </ul>
            </section>
            <hr>

            <section class="section-two">
                <ul>
                <li>
                    <h3>Cocktails | $6</h3>
                    <p>Blue Ocean Mojito</p>
                    <p>Sauvignon Blanc</p>
                    <p>Merlot</p>
                    <p>Pinot Noir</p>
                </li>
                <li>
                    <h3>Non-alcoholic Refreshments | $3</h3>
                    <p>Orange Juice</p>
                    <p>Lemonade</p>
                    <p>Ginger Ale</p>
                    <p>Cold Brew Coffee</p>
                </li>
                </ul>
            </section>
        </div>`

function createMenuPage(){
    content.innerHTML = menuPage;
}
      
export {createMenuPage};
