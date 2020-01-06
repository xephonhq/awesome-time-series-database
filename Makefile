.PHONY: dev check
dev:
	yarn run docs:dev

check:
	cd data && node check.js