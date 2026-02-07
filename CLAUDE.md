# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Auto-generated TypeScript SDK for the [Runn API](https://api.runn.io) (resource planning and project management). Generated from an OpenAPI spec (`runn.json`) using OpenAPI Generator v7.19.0 with the `typescript-axios` template. Uses Axios as the HTTP client.

## Build Commands

```bash
npm install            # Install dependencies (also runs build via prepare hook)
npm run build          # Compile TypeScript to dist/
just build             # Full regeneration: generate SDK from runn.json OpenAPI spec + compile
just compile           # Compile TypeScript only (no regeneration)
just install           # Install system dependencies (openjdk via Homebrew)
just clean             # Remove dist/ directory
```

There are **no tests, linting, or formatting** configured. Source files contain `/* tslint:disable */` / `/* eslint-disable */` markers from the generator.

## Architecture

All TypeScript source files in the root directory are **auto-generated** from the OpenAPI spec. Do not manually edit these files — changes will be overwritten on next `just build`.

| File | Purpose |
|------|---------|
| `api.ts` | `DefaultApi` class with 200+ methods (the main SDK surface) |
| `configuration.ts` | `Configuration` class for auth setup (bearer token) |
| `base.ts` | `BaseAPI` base class, `RequiredError`, server config |
| `common.ts` | Internal utilities (auth, serialization, request helpers) |
| `index.ts` | Re-exports from `api.ts` and `configuration.ts` |

**Key files that are NOT auto-generated:**
- `justfile` — build/generation orchestration
- `runn.json` — OpenAPI spec (source of truth for the SDK)
- `LLMs.txt` — comprehensive SDK usage guide with examples
- `.openapi-generator-ignore` — controls which files the generator preserves
- `.github/` — CI/CD workflows and Dependabot config
- `LICENSE` — MIT license

## SDK Usage Patterns

Authentication uses bearer token via `Configuration.accessToken`. Every API call requires `acceptVersion: '1.0.0'` in the request parameters object.

```typescript
import { DefaultApi, Configuration } from 'runn-typescript-sdk';

const config = new Configuration({ accessToken: process.env.RUNN_API_KEY });
const api = new DefaultApi(config);

const people = await api.listPeople({ acceptVersion: '1.0.0', limit: 50 });
// response.data: { values: T[], nextCursor?: string, hasMore: boolean }
```

All methods follow the pattern: `api.methodName({ acceptVersion, ...params }, axiosOptions?)` returning `Promise<AxiosResponse<T>>`. List endpoints return cursor-based pagination with `{ values, nextCursor, hasMore }`.

## Key Conventions

- Entity IDs are numbers, dates are ISO 8601 `YYYY-MM-DD`, time values are in minutes
- API categories: People/Teams, Projects/Clients, Assignments, Actuals (time tracking), Roles/Skills, Reporting, Custom Fields, Time Off, Contracts, Views
- Bulk operations available for actuals (`createActualsBulk`) and clients (`createClientsBulk`)
- `LLMs.txt` contains the full method reference with working examples — consult it for detailed API usage
