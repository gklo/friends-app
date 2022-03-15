# Friends app

An app to show a list of your friends and their locations

## Prerequisite
Copy `.env` file to `.env.local` and `.env.test.local` and update the environment variables such as Google API key, API URL

## Development
Run the following command to start development server:
```bash
npm start
```

## Test
Run the following command to start unit test
```bash
npm test
```

## Production
Run the following command to generate production files
```bash
npm run build
```
Start a local server and serve the generated files
```
serve -s build 
```
