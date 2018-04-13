# Rhyme Doctor
Rhyme Doctor is an interactive web app that helps songwriters compose song lyrics with intricate rhyme schemes. It also helps songwriters connect with each other and share their work.

## Getting Started

Once you've configured everything properly as per the Prerequisites section, run the following:

1. `yarn` (install dependencies)
2. `yarn demon` (start REST server)
3. `yarn start:engine` (start rhyme engine)
4. `yarn start:socket` (start chat server)

### Prerequisites

Keep in mind that our master branch is configured for deployment on a remote server, so if you don't have a domain name, an SSL certificate, and an NGINX server, then perhaps you don't want to go through the trouble! (Our app is deployed here: https://rhymedoctor.fun)

**MySQL**
Create a database named `RhymeDoctor` and fill out the appropriate auth info in `server/src/database/config/config.js`

**WordsAPI Key**
This can be obtained from Mashape/RapidAPI, and fill out `ALTERNATE_KEY` or `API_KEY` in `rhyme-engine/src/config.js`, as well as `X-Mashape-Key` in `server/src/controllers/wordsapi/config.js`.

**NGINX and SSL Cert**
Store your `.crt` and `.key` in `ssl-server/encryption/`. Place your NGINX conf file in the appropriate location.

**Host and Port**
Fill out `config.js` for the hostname, and `server/src/config.js` for the port.

## Built With

https://rhymedoctor.fun/about

## Contributing

We're currently not accepting contributions at this time. Perhaps some day in the future.

## Authors

* **James Yen** – [GitHub](https://github.com/jameshyen)
* **Kin Chan** – [GitHub](https://github.com/omegak911)
* **Eva Laskowski** – [GitHub](https://github.com/elaskowski)
* **Samuel Hong** – [GitHub](https://github.com/iiffd)

## Acknowledgments

* Hack Reactor, Los Angeles
