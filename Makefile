BUILD_COMMIT = $(shell git rev-parse HEAD)

.PHONY: dev
dev:
	npm run dev

.PHONY: build
build:
	mv nuxt.config.js nuxt.config.js.bak
	cp web/nuxt.config.gh.js nuxt.config.js
	npm run generate
	mv nuxt.config.js.bak nuxt.config.js

.PHONY: publish
publish: build
	rm -rf /tmp/awesome-time-series-database
	cd /tmp; git clone -b gh-pages git@github.com:xephonhq/awesome-time-series-database.git
	cd /tmp/awesome-time-series-database; rm -rf *
	cp README.md /tmp/awesome-time-series-database
	cp -r dist/* /tmp/awesome-time-series-database
	cd /tmp/awesome-time-series-database; git add .
	cd /tmp/awesome-time-series-database; git commit -m "Build $(BUILD_COMMIT)"