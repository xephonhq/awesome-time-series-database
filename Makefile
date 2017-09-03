.PHONY: build
build:
	npm run generate
	rm -rf /tmp/awesome-time-series-database
	cp -r dist /tmp/awesome-time-series-database
.PHONY: publish
publish:
	rm -rf /tmp/awesome-time-series-database
# cd /tmp; git clone -b gh-pages git@github.com:xephonhq/awesome-time-series-database.git