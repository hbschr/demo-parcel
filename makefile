.PHONY: clean
clean:
	rm -rf .cache
	rm -rf dist

.PHONY: distclean
distclean: clean
	rm -rf node_modules
