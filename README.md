# 🦄 Reactrix

Validation is the most important aspect while designing an application. It validates the incoming data. Reactrix provides a convenient method `useValidate` to validate incoming data with a variety of powerful validation rules.

<p align="left">
<img alt="GitHub version" src="https://img.shields.io/github/v/release/getspooky/useValidator?style=for-the-badge">
<img alt="GitHub" src="https://img.shields.io/github/license/getspooky/useValidator?style=for-the-badge">
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/getspooky/useValidator?style=for-the-badge">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/getspooky/useValidator?style=for-the-badge">
</p>

> Simple, lightweight model-based validation for React Hooks Inspired by [PHP Framework Laravel's validation](https://laravel.com/)

## Features

- 🤗 Familiar and easy to setup.
- 🌍 i18n Support and error Messages in different locales.
- 👊 Written in JavaScript.
- 🗃 No dependencies.

## 📦 Installation

Install it with yarn:

```sh
yarn add reactrix --save
```

Or with npm:

```sh
npm install reactrix --save
```

## 🏷 Usage

Let's define some validations in React components

```jsx
import React, { useState } from 'react';
import { useValidator } from 'reactrix';

function Login(props) {
  const [data, setData] = useState({});
  const [msg, setValidator] = useValidator();
  
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    );
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setValidator(data, {
      email: 'required|email',
      password: 'required|string'
    }); 
    
    if(!msg) {
      alert('Great ✅');
    }
    
  }
   
  return (
    <form>  
        <div className="container">   
          <label>Email : </label>   
          <input type="email" placeholder="Enter Email" name="email" onChange={handleChange} />  
          <label>Password : </label>   
          <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} />  
          <button type="submit" onClick={handleSubmit}>Login</button>     
          Forgot <a href="#"> password? </a>   
        </div>
    </form>
  );
  
}

```

> 💅 You can use custom react component or ui library like `react-bootstrap` to display error messages.

## 🚦Common Rules 

| Keyword          |      Description                                                                                                | 
|------------------|:----------------------------------------------------------------------------------------------------------------|
| **Common Validator**                                                                                                               | 
| `alpha`          | Checks if the string contains only letter(a-zA-Z)                                                               | 
| `alphaNum`       | Checks if the string contains only letters and numbers                                                          | 
| `ascii`          | Checks if the string contains ASCII chars only                                                                  | 
| `base32`         | Checks if a string is base32 encoded                                                                            | 
| `base64`         | Checks if a string is base64 encoded                                                                            | 
| `boolean`        | Checks if a value is a boolean                                                                                  | 
| `date`           | Checks if a value is a date                                                                                     | 
| `decimal`        | Checks if a value is a decimal                                                                                  | 
| `email`          | Checks if the string is an email                                                                                | 
| `function`       | Checks if the object is function                                                                                |  
| `hexColor`       | Checks if the string is a hexadecimal color                                                                     | 
| `integer`        | Checks if the value is an integer number                                                                        | 
| `ipAddress`      | Checks if the string is an IP (version 4 or 6)                                                                  |
| `lowercase`      | Checks if the string is lowercase                                                                               | 
| `mimeType`       | Checks if the string matches to a valid [MIME type](https://en.wikipedia.org/wiki/Media_type) format            | 
| `numeric`        | Checks if a value is a number                                                                                   | 
| `object`         | Checks if a value is an object                                                                                  |
| `port`           | Checks if the string is a Port                                                                                  |
| `string`         | Checks if the string is a string                                                                                |
| `undefined`      | Checks if the string is undefined                                                                               |
| `uppercase`      | Checks if the string is uppercase                                                                               |
| `url`            | Checks if the string is url                                                                                     |
| **Math**                                                                                                                           |
| `equals`         | Checks if value equals ("===") comparison.                                                                      | 
| `max`            | Checks if the given number is less than or equal to given number                                                | 
| `MaxLength`      | Checks if the string's length is not more than given number                                                     | 
| `min`            | Checks if the given number is more than or equal to given number                                                | 
| `MinLength`      | Checks if the given number is less than or equal to given number                                                | 
| **ISO**                                                                                                                            |
| `ISO31661Alpha2` | Checks if the string is a valid [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) officially assigned country code | 
| `ISO31661Alpha3` | Checks if the string is a valid [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) officially assigned country code |                                             | 
| **Currency**                                                                                                                           |
| `bitcoin` | Checks if the string is a valid BTC address                                                                     | 
| `ethereum`| Checks if the string is an Ethereum address using basic regex. Does not validate address checksums              | 
| **Hash**                                                                                                                           |
| `md4` | Checks if the string is a valid md4 algorithm                                                                              | 
| `md5` | Checks if the string is a valid md5 algorithm                                                                              | 
| `sha1` | Checks if the string is a valid sha1 algorithm                                                                            | 
| `sha256` | Checks if the string is a valid sha256 algorithm                                                                        | 
| `sha384` | Checks if the string is a valid sha384 algorithm                                                                        | 
| `sha512` | Checks if the string is a valid sha512 algorithm                                                                        | 

## 📢 Compatibility

This library uses ES6 Promises so be sure to provide a polyfill for it for the browsers that do not support it.

## 📋 Changelog 

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## 📒 Samples
Take a look on samples in [./sample](simple) for more examples of usages.

## 👨‍💻 Contributing

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):


<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/getspooky"><img src="https://avatars1.githubusercontent.com/u/37160072?s=460&u=6578a0a9d158c7ecb0afa5e8c9ec13194e736b3e&v=4" width="100px;" alt="Yasser A.Idrissi"/><br /><sub><b>Yasser A.Idrissi</b></sub></a><br /><a href="https://github.com/getspooky/Reactrix" title="Code">💻</a> <a href="" title="Documentation">📖</a> <a href="#ideas" title="Ideas, Planning, & Feedback">🤔</a> <a href="#review" title="Reviewed Pull Requests">👀</a> <a href="" title="Tests">⚠️</a></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

You are welcome to contribute to this project, but before you do, please make sure you read the [contribution guide](CONTRIBUTING.md).


## 📝 License

The `reactrix` Library is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).

