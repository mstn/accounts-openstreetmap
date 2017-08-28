Accounts.oauth.registerService('openstreetmap');

if (Meteor.isClient) {
  const loginWithOpenstreetmap = function(options, callback) {
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }
    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    OpenStreetMap.requestCredential(options, credentialRequestCompleteCallback);
  }
  Accounts.registerClientLoginFunction('openstreetmap', loginWithOpenstreetmap);
  Meteor.loginWithOpenstreetmap = function () {
    return Accounts.applyLoginFunction('openstreetmap', arguments);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: [],
    forOtherUsers: []
  });
}
