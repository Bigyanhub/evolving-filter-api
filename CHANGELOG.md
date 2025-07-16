# Changelog

All notable changes to this project will be documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and the project adheres to [Semantic Versioning](https://semver.org/).

---

## [1.3.0] - 2025-07-16
### Added
- New query filters: `country`, `continent`, `is_seeking_funding`, and `has_mvp`
- Boolean parsing for `is_seeking_funding` and `has_mvp` query parameters
- Case-insensitive filtering for all fields

### Changed
- Enhanced filtering logic to support multiple criteria in a single request
- Improved data safety by creating a shallow copy of the original `startups` array to prevent mutation

---

## [1.2.0] - 2025-07-16
### Added
- Centralized error handling with `try-catch` block to handle unexpected server errors

### Fixed
- Sends a 404 response if no startups match the query filters

---

## [1.1.0] - 2025-07-16
### Added
- Basic filtering on `industry` via `/api` endpoint
- Case-insensitive match for `industry` field

---

## [1.0.0] - 2025-07-16
### Added
- Initial Express server setup
- Loaded `startups` dataset from `data/data.js`
- Created `/api` endpoint to serve full list of startup data
