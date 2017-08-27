Package.describe({
  name: 'accounts-openstreetmap',
  summary: "Login service for OpenStreetMap accounts",
  version: "0.1.0"
});

Package.onUse(function(api) {
  api.use('underscore', ['server']);
  api.use('accounts-base', ['client', 'server']);
  
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('openstreetmap-oauth');
  api.imply('openstreetmap-oauth');
  
  api.use('http', ['client', 'server']);
  api.addFiles("accounts-osm.js");
  
});
