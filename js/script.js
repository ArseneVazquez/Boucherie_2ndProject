// Fonction pour afficher les détails d'un produit
function showDetails(productName, price) {
    alert(`Produit : ${productName}\nPrix : ${price}`);
}

// Validation du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Merci pour votre message. Nous vous répondrons bientôt !');
});
// Fonction pour afficher les détails d'un produit
function showDetails(productName, price) {
    alert(`Produit : ${productName}\nPrix : ${price}`);
}

// Validation du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Merci pour votre message. Nous vous répondrons bientôt !');
});


// Gestion du formulaire de commande
document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Récupération des valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    // Message de confirmation
    alert(`Merci ${name} pour votre commande de ${quantity} ${product}(s) ! Nous vous contacterons bientôt à ${email}.`);

    // Réinitialisation du formulaire
    document.getElementById('orderForm').reset();
});


// Gestion du formulaire de connexion
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    // const email = document.getElementById('email').value;
    // const password = document.getElementById('password').value;
    alert("Inscription réussie ! Vous allez être redirigé vers la page de se connecter.");
    window.location.href = "index.html";

    alert(`Connexion réussie pour l'email : ${email}`);
    window.location.href = "../index.html";
});

// Gestion du formulaire d'inscription
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // const password = document.getElementById('password').value;

    // Affiche une alerte et redirige vers index.html
    alert("Connexion réussie ! Vous allez être redirigé vers la page d'accueil.");
    window.location.href = "../login.html";
});
