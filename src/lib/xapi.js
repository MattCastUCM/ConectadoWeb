const xAPIConfig = {
    "grant_type": "code",
    "auth_endpoint": "https://sso.simva-beta2.e-ucm.es:443/realms/simva/protocol/openid-connect/auth",
    "token_endpoint": "https://sso.simva-beta2.e-ucm.es:443/realms/simva/protocol/openid-connect/token",
    "client_id": "simva-plugin",
    "code_challenge_method": "S256",
    "redirect_uri":"https://simva-beta2.e-ucm.es/"
}
const urlParams = new URLSearchParams(window.location.search);
var simvaResultUri, authToken, username, homepage,debug;
if(urlParams.size > 0) {
    simvaResultUri = urlParams.get('url');
    var token = urlParams.get('authToken');
    if(token) {
        authToken = "Bearer " + token;
    } else {
        authToken = null;
    }
    username = urlParams.get('username');
    homepage = urlParams.get('homepage');
    debug=urlParams.get('debug');
    if(debug !== null && debug == "true") {
        debug = Boolean(debug);
        console.debug(simvaResultUri);
        console.debug(authToken);
        console.debug(username);
        console.debug(homepage);
        console.debug(debug);
    }
} else {
    simvaResultUri = null;
    authToken = null;
    username = null;
    homepage = null;
    debug = false;
}
export var xapiTracker = new xAPITrackerAsset(simvaResultUri, null, authToken, homepage, username, "ConectadoWeb", debug);
//export var xapiTracker = new xAPITrackerAssetOAuth2(simvaResultUri, null, xAPIConfig, homepage, username, "ConectadoWeb");
export var accessibleXapiTracker = new AccessibleTracker(xapiTracker);
export var alternativeXapiTracker = new AlternativeTracker(xapiTracker);
export var completableXapiTracker = new CompletableTracker(xapiTracker);
export var gameObjectXapiTracker = new GameObjectTracker(xapiTracker);
//completableXapiTracker.sendStatement(completableXapiTracker.Initialized("ConectadoWeb", COMPLETABLETYPE.GAME));
//completableXapiTracker.sendStatement(completableXapiTracker.Progressed("ConectadoWeb", COMPLETABLETYPE.GAME, 0.5));
//completableXapiTracker.sendStatement(completableXapiTracker.Completed("ConectadoWeb", COMPLETABLETYPE.GAME, true, false));
//completableXapiTracker.sendStatement(completableXapiTracker.Completed("ConectadoWeb", COMPLETABLETYPE.GAME, true, true));