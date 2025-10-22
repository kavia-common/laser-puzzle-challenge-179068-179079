'use strict';

/**
 * Service layer providing static metadata and level data for the MVP.
 * In a later phase this can be replaced with a DB or file-backed source.
 */
class MetaService {
  constructor() {
    // Static list of levels for MVP. Keep IDs as strings for URL param compatibility.
    this.levels = [
      {
        id: '1',
        name: 'Intro Beam',
        description: 'Learn the basics of reflecting a single laser to a target.',
        difficulty: 'easy',
      },
      {
        id: '2',
        name: 'Crossing Paths',
        description: 'Route beams around obstacles using mirrors.',
        difficulty: 'medium',
      },
    ];

    // Minimal level schema compatible with frontend expectations:
    // - grid: rows x cols
    // - lasers: source positions and directions
    // - targets: target positions
    // - obstacles: fixed blocks
    // - mirrors: starting mirrors (can be empty)
    // Note: This is intentionally simple for MVP and can be extended.
    this.levelDetails = {
      '1': {
        id: '1',
        name: 'Intro Beam',
        grid: { rows: 8, cols: 8 },
        lasers: [{ row: 0, col: 0, dir: 'E', color: 'red' }],
        targets: [{ row: 0, col: 7 }],
        obstacles: [],
        mirrors: [{ row: 2, col: 2, orientation: '/' }],
        rules: { maxMoves: 0 },
        metadata: { difficulty: 'easy' },
      },
      '2': {
        id: '2',
        name: 'Crossing Paths',
        grid: { rows: 10, cols: 10 },
        lasers: [{ row: 9, col: 0, dir: 'N', color: 'red' }],
        targets: [{ row: 0, col: 9 }],
        obstacles: [{ row: 5, col: 5 }],
        mirrors: [{ row: 7, col: 2, orientation: '\\' }],
        rules: { maxMoves: 0 },
        metadata: { difficulty: 'medium' },
      },
    };

    // Build metadata. In CI this could be injected via env; provide defaults.
    this.versionInfo = {
      version: process.env.APP_VERSION || '0.1.0',
      buildTime: process.env.BUILD_TIME || new Date().toISOString(),
    };
  }

  // PUBLIC_INTERFACE
  getVersion() {
    /** Returns current version and build time info. */
    return this.versionInfo;
  }

  // PUBLIC_INTERFACE
  listLevels() {
    /** Returns minimal list of available levels for selector UI. */
    return this.levels;
  }

  // PUBLIC_INTERFACE
  getLevelById(id) {
    /** Returns a full level definition by ID or null if not found. */
    return this.levelDetails[id] || null;
  }
}

module.exports = new MetaService();
