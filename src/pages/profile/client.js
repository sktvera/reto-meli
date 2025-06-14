/**
 * Module dependencies
 */
 const React = require('react');
 const { hydrateRoot } = require('react-dom/client');
 const View = require('./view');

/**
 * Mount View on client
 */
hydrateRoot(document.getElementById('root-app'), <View />);
