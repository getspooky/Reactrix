// Copyright 2020 the Reactrix authors. All rights reserved. MIT license.
import React, { useState } from 'react';
import { validateRules } from './common';
import { isObject, isNullOrUndefined } from './utils/types';

export function useValidate(initLanguage = 'en') {

   const [msg, setMsg] = useState([]);

   const setValidator = (data, rules) => {

     if(!isObject(rules) || isNullOrUndefined(rules)) {
       throw new TypeError('Rules has to return an object (see docs)');
     }

     // Starts the validation process.
     for (const [key, value] of Object.entries(rules)) {
        const message = validateRules(data[key], value, initLanguage);
        // push message state.
        setMsg(previousState => [...previousState,...message]);
     }

   };

   return [ msg, setValidator ];

}
