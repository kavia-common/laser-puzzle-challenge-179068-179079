'use strict';

const metaService = require('../services/meta');

class MetaController {
  // PUBLIC_INTERFACE
  version(req, res) {
    /** Returns version and build time for the backend service. */
    const payload = metaService.getVersion();
    return res.status(200).json(payload);
  }

  // PUBLIC_INTERFACE
  listLevels(req, res) {
    /** Returns a list of available levels with minimal metadata. */
    const items = metaService.listLevels();
    return res.status(200).json({ levels: items });
  }

  // PUBLIC_INTERFACE
  getLevel(req, res) {
    /** Returns a specific level compatible with frontend schema by :id. */
    const { id } = req.params;
    const lvl = metaService.getLevelById(id);
    if (!lvl) {
      return res.status(404).json({ error: 'Level not found' });
    }
    return res.status(200).json(lvl);
  }
}

module.exports = new MetaController();
