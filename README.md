# SSE Template

In this repository, I implemented a simple API with support for SSE (Server-Sent Events) using TypeScript and Express. The implementation covers some basic concepts of SSE in a system of real-time notification, sent via an admin panel, for the users connected via the SSE protocol.

## Stack

<p align="center">
    <img href="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img href="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express" />
    <img href="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD" alt="Nodemon" />
    <img href="https://img.shields.io/badge/prettier-%23192a32?style=for-the-badge&logo=prettier&logoColor=dc524a" alt="Prettier" />
    <img href="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt="Eslint" />
    <img href="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img href="https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white" alt="CSS3" />
    <img href="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript"/>
</p>

For this project, I used TypeScript together with Express to create the back end. For the front end, I kept it very simple and used only HTML, CSS, and JavaScript.

## Cloning the repo

To clone this repository into your local machine, just run the following command:

```bash
git clone https://github.com/lucaaszsx/sse-template
cd ./sse-template
```

## Running the project

To run the project, you need to install the dependencies:

```bash
pnpm install
```

After installing dependencies, you can run the app and test it:

```bash
pnpm run dev
```

## Building the project

To build this application, run the following command:

```bash
pnpm run build
```

The build files will be generated in the `dist/` directory. You can start the application from the build files by running:

```bash
pnpm run start
```

## Contributing

Actually, I created this repository with the sole purpose of recording some learnings. But contributions are welcome, if you want you can submit an issue to report a problem or even open a pull request to add a new feature.

## License

This project is licensed under the MIT License. See **[LICENSE](./LICENSE)** for full license text.
