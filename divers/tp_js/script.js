/**
 * Clé utilisée pour stocker les données User dans le local storage
 */
const LS_USER_DATA_KEY = 'userData';

/**
 * Données de l'uyilisateur courant
 */
let userData;

/**
 * Permet d'appeler le backend
 * @param {*} endPoint Endpoint appelé
 * @param {*} body Body de la requete
 * @returns Body de la réponse
 */
async function callBackend(endPoint, body) {
    const response = await fetch(`http://localhost:1337/parse/${endPoint}`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-Parse-Application-Id": "cours_angular",
        "X-Parse-Session-Token": userData?.sessionToken
    },
    body: JSON.stringify(body),
    });

    return response.json();
}

/**
 * Identifie un utilisateur auprès du backend
 */
async function login() {
    const username = document.querySelector('#login').value;
    const password = document.querySelector('#pass').value;

    // Appel au backend
    userData = await callBackend('login', {username:username,password:password});
    
    // Gestion d'erreur
    if (!userData?.username) {
        alert('Identifiant ou mot de passe inconnu !');
        return;
    }
    
    localStorage.setItem(LS_USER_DATA_KEY, JSON.stringify(userData));
    displayUser();
}

/**
 * Déconnecte un utilisateur
 */
async function logout() {
    await callBackend('logout');

    userData = undefined;
    localStorage.removeItem(LS_USER_DATA_KEY);

    displayUser();
}

/**
 * Afficher l'utilisateur dans la vue
 */
function displayUser() {
    if (userData) {
        // Utilisateur connecté
        document.querySelector('#userName').innerHTML = userData.username;
        document.querySelector('#login-form').style.display = 'none';
        document.querySelector('#logoutButton').style.display = 'block';
    } else {
        // Aucun utilisateur connecté
        document.querySelector('#userName').innerHTML = '--';
        document.querySelector('#login-form').style.display = 'block';
        document.querySelector('#logoutButton').style.display = 'none';
    }
}

/**
 * Initialisation de l'application
 */
function init() {
    userData = JSON.parse(localStorage.getItem(LS_USER_DATA_KEY));
    displayUser();
}

init();