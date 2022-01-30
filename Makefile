a-test:
	docker run -it --rm -p 8080:80 -v ${PWD}/out:/usr/share/nginx/html nginx

a-build:
	yarn build && yarn export

a-run:
	yarn run dev

a-prepare:
	nvm use v12.22.9
	yarn install