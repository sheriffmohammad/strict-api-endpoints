# API Endpoints Type Generator

This npm package provides a utility to generate strict TypeScript types for nested API endpoint paths. It ensures type safety and autocompletion for deeply nested API configurations, making your development process more robust and efficient.

## Installation

```bash
npm install strict-api-endpoints
```

or with Yarn:

```bash
yarn add strict-api-endpoints
```

## Usage

### Defining API Endpoints

Start by defining your API endpoints using nested objects. Each key represents a segment of the path, and the type generator constructs all possible combinations for you.

#### Example: Simple API Structure

```typescript
import { ApiEndpoints } from 'strict-api-endpoints';

type ApiEndpointsConfig = {
  auth: {
    login: unknown;
    logout: unknown;
  };
  user: {
     profile: {
      '': unknown
      view: unknown;
      edit: unknown;
    };
  };
};

type ApiPaths = ApiEndpoints<ApiEndpointsConfig>;
```

#### Resulting Type

The `ApiPaths` type will resolve to:

```typescript
type ApiPaths =
  | "/auth/login"
  | "/auth/logout"
  | "/user/profile"
  | "/user/profile/view"
  | "/user/profile/edit";
```

### Advanced Example

For a more complex API structure:

```typescript
type ComplexApiEndpoints = {
  users: {
    list: unknown;
    profile: {
      view: unknown;
      update: unknown;
    };
  };
  products: {
    list: unknown;
    details: {
      reviews: unknown;
    };
  };
};

type ComplexApi = ApiEndpoints<ComplexApiEndpoints>;
```

This will generate:

```typescript
type ComplexApi =
  | "/users/list"
  | "/users/profile/view"
  | "/users/profile/update"
  | "/products/list"
  | "/products/details/reviews";
```

### Why Use This Package?

- **Type Safety**: Prevent errors by ensuring only valid API endpoints are used.
- **Autocompletion**: Get better IDE support for navigating your API paths.
- **Ease of Use**: Simplify the process of defining and maintaining API endpoint types.

## How It Works

1. **Nested Object Parsing**: It recursively parses nested objects to construct all possible paths.
2. **Slash Prefixing**: Each path is automatically prefixed with a `/` to match standard REST API conventions.

### Core Types

- `ApiEndpoints<T>`: Generates all possible endpoint strings from a nested object type `T`.
- `AddPrefix<P, T>`: A helper type that adds a `/` prefix to nested keys.

## Limitations

- **Deeply Nested Structures**: Excessively deep API structures may result in TypeScript's recursion limit being hit. Simplify your endpoint structures if this occurs.

## Development

### Clone the Repository

```bash
git clone https://github.com/yourusername/api-endpoints-type-generator.git
cd api-endpoints-type-generator
```

### Install Dependencies

```bash
npm install
```

### Run Tests

```bash
npm test
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

