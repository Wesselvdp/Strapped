import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import './css/app.css';

const client = Client.buildClient({
  storefrontAccessToken: '968613b52d8c521489647296516045d1',
  domain: 'grommit-strapped.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
