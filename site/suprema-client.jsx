import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import {SupremaCredit,FloatingActions} from './suprema-components.jsx';
const props=JSON.parse(document.getElementById('suprema-props').textContent);
hydrateRoot(document.getElementById('suprema-credit-root'),<SupremaCredit/>);
hydrateRoot(document.getElementById('floating-actions-root'),<FloatingActions {...props}/>);
