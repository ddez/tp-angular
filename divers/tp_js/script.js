/**
 * Clé utilisée pour stocker les données User dans le local storage
 */
const LS_USER_DATA_KEY = 'userData';

/**
 * Données de l'uyilisateur courant
 */
let userData;

/**
 * Log l'utilisateur lorsqu'il n'ets pas connecté, sinon le déconnecte
 */
function toggleLogin() {
    if (userData) {
        logout();
    } else {
        login();
    }
}

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
        "X-Parse-Session-Token": userData?.sesionToken
    },
    body: JSON.stringify(body),
    });

    return response.json();
}

/**
 * Identifie un utilisateur auprès du backend
 */
async function login() {
    userData = await callBackend('login', {username:"bob",password:"bob"});
    localStorage.setItem(LS_USER_DATA_KEY, JSON.stringify(userData));
    displayUser();
}

/**
 * Déconnecte un utilisateur
 */
async function logout(arg1) {
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
        document.querySelector('#userName').innerHTML = userData.username;
        document.querySelector('#loginButton').innerHTML = 'Se deconnecter';
    } else {
        document.querySelector('#userName').innerHTML = '--';
        document.querySelector('#loginButton').innerHTML = 'Se connecter';
    }
}

/**
 * Initialisation de l'application
 */
function init() {
    userData = JSON.parse(localStorage.getItem('userData'));
    displayUser();
}

init();