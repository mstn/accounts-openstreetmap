Package.describe({
  name: 'mstn:accounts-openstreetmap',
  summary: "Login service for OpenStreetMap accounts",
  version: "0.1.0"
});

Package.onUse(function(api) {
  api.use('underscore', ['server']);
  api.use('accounts-base', ['client', 'server']);
  
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('mstn:openstreetmap-oauth');
  api.imply('mstn:openstreetmap-oauth');
  
  api.use('http', ['client', 'server']);
  api.addFiles("accounts-osm.js");
  
});
