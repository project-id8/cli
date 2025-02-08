.PHONY: all clean build-darwin-arm64 build-darwin-amd64 build-linux-amd64 build-linux-arm64

# Binary name
BINARY_NAME=id8

# Version from git tag
VERSION=$(shell git describe --tags --abbrev=0 2>/dev/null || echo "dev")

# Output directory
DIST_DIR=dist

# Default target
all: clean build package

# Clean build artifacts
clean:
	rm -rf $(DIST_DIR)
	mkdir -p $(DIST_DIR)

# Build targets for different platforms
build: build-darwin-arm64 build-darwin-amd64 build-linux-amd64 build-linux-arm64

build-darwin-arm64:
	deno compile --allow-read --allow-write --allow-env --allow-net \
		--target aarch64-apple-darwin \
		--output $(DIST_DIR)/$(BINARY_NAME)-darwin-arm64 main.ts

build-darwin-amd64:
	deno compile --allow-read --allow-write --allow-env --allow-net \
		--target x86_64-apple-darwin \
		--output $(DIST_DIR)/$(BINARY_NAME)-darwin-amd64 main.ts

build-linux-amd64:
	deno compile --allow-read --allow-write --allow-env --allow-net \
		--target x86_64-unknown-linux-gnu \
		--output $(DIST_DIR)/$(BINARY_NAME)-linux-amd64 main.ts

build-linux-arm64:
	deno compile --allow-read --allow-write --allow-env --allow-net \
		--target aarch64-unknown-linux-gnu \
		--output $(DIST_DIR)/$(BINARY_NAME)-linux-arm64 main.ts

# Package binaries into archives
package:
	cp LICENSE README.md $(DIST_DIR)/
	for binary in $(DIST_DIR)/$(BINARY_NAME)-* ; do \
		tar -C $(DIST_DIR) -czf "$${binary}.tar.gz" \
			"$$(basename $$binary)" LICENSE README.md ; \
	done
	cd $(DIST_DIR) && sha256sum *.tar.gz > checksums.txt

# Development build for current platform
dev:
	deno compile --allow-read --allow-write --allow-env --allow-net \
		--output $(DIST_DIR)/$(BINARY_NAME) main.ts 