start:
		npm start

build: 
		rm -rf dist
		npm run build

lint:
		npx eslint .