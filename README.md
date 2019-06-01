Please use node.js to run the app.
to use nodejs:
- download node.js via [nvm](https://github.com/nvm-sh/nvm)
- install latest LTS release of node.js (in terminal run ``` nvm i 10```) - it will install node.js of LTS version
- in project root directory run `npm run install:all`
- in project root run `npm run encrypt`: you will see message alike below: 
```
> user@user-pc:~/Study/Crypto$ npm run encrypt
> rsa-custom@1.0.0 encrypt /home/vsorokin/Study/Crypto
> npm run build && node --inspect index.js


> rsa-custom@1.0.0 build /home/vsorokin/Study/Crypto
> tsc -p tsconfig.json

Gotta be encrypted: hello
encrypted 'Ȁ}ۀۀയ'
decrypted 'hello'
```