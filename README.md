This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Create SmartContract - Deploy
install truffle suite [Truffle](https://trufflesuite.com/)
```bash
npm install -g truffle
```
use Ganache [Ganache](https://trufflesuite.com/ganache/) for test

create a bare Truffle project
```bash
truffle inin -p
```
Once this operation is completed, you'll now have a project structure with the following items:
- `contracts/`: Directory for Solidity contracts
- `migrations/`: Directory for scriptable deployment files
- `test/`: Directory for test files for testing your application and contracts
- `truffle-config.js`: Truffle configuration file

change port: `8545` to `7545` in `truffle-config.js` like Ganache RPC SERVER port,

Add new WorkSpace to `Ganache desktop` with import `truffle-config.js`

Create migration file `1_example_migration.js`
```bash
var NftMarket = artifacts.require("NftMarket");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(NftMarket);
};

custom `truffle-config.js`
add `contracts_build_directory: './public/contracts',`
```
run 
```bash
truffle migrate
# or
truffle migrate --reset
```