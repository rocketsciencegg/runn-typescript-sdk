# runn-typescript-sdk

> **This is a public, open source repository.** Contributions and issues welcome.

TypeScript SDK for the [Runn API](https://api.runn.io) (resource planning and project management), auto-generated from OpenAPI spec.

## Requirements

Node.js **22.13.0 or newer** (enforced by `engines` in `package.json`). This is the
compatibility floor for consumers of the SDK — the oldest Node you may install it on.

The SDK itself is built and released on the exact version in `.node-version`, which is
what CI provisions via `node-version-file`. That number is ahead of the floor on purpose:
it is the toolchain we compile with, not a requirement placed on you.

## Installation

```bash
npm install github:rocketsciencegg/runn-typescript-sdk
```

Pin a specific version:

```bash
npm install github:rocketsciencegg/runn-typescript-sdk#v1.0.0
```

## Quick Start

```typescript
import { DefaultApi, Configuration } from 'runn-typescript-sdk';

const config = new Configuration({ accessToken: process.env.RUNN_API_KEY });
const api = new DefaultApi(config);

const people = await api.listPeople({ acceptVersion: '1.0.0', limit: 50 });
console.log(people.data.values);
```

## Authentication

All API calls require a bearer token passed via `Configuration.accessToken`. Every request also requires `acceptVersion: '1.0.0'` in the parameters object.

All methods follow the pattern `api.methodName({ acceptVersion, ...params }, axiosOptions?)` returning `Promise<AxiosResponse<T>>`. List endpoints return cursor-based pagination with `{ values, nextCursor, hasMore }`.

## API Reference

See the [generated docs](docs/) for all available methods and models.

## How This SDK Is Generated

Generated from `runn.json` using [OpenAPI Generator](https://openapi-generator.tech/) v7.19.0 (`typescript-axios`).

```bash
just install   # System deps (Java)
just build     # Regenerate + compile
just compile   # TypeScript only
```

## Generated Files

All `.ts` source files and `docs/` are auto-generated. Do not edit manually.
Custom files (README, justfile, .github/, CLAUDE.md) are protected via `.openapi-generator-ignore`.

## License

[MIT](LICENSE)
