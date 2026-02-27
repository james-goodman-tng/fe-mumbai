# Mumbai Clock Frontend

Frontend component displaying Mumbai time by consuming the Mumbai Time API.

## Running Locally

Open `index.html` in a browser (requires the API to be running at localhost:3005).

## Running with Docker

```bash
docker build -t fe-mumbai .
docker run -p 8085:80 fe-mumbai
```