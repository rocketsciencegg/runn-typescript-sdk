.PHONY: help install dev serve deploy generate-sdk test clean setup-kv

# Default shell
SHELL := bash

# Load .env file if it exists
ifneq (,$(wildcard .env))
    include .env
    export
endif

help: ## Show this help message
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	@brew install openjdk

generate: ## Generate RUNN SDK from OpenAPI spec
	@if [ ! -f "runn.json" ]; then \
		echo "Error: runn.json not found. Please add your OpenAPI spec file."; \
		exit 1; \
	fi
	@echo "Generating RUNN SDK from OpenAPI spec..."
	@export PATH="/opt/homebrew/opt/openjdk/bin:$$PATH" && \
	npx @openapitools/openapi-generator-cli generate \
		-i runn.json \
		-g typescript-node \
		-o . \
		--additional-properties=npmName=runn-typescript-sdk,modelPropertyNaming=camelCase
	@echo "SDK generated in src/api/generated/"

