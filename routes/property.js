// property.js
const express = require("express");
const {
  createProperty,
  getAllProperties,
  getPropertyById,
} = require("../controllers/propertyController");
const router = express.Router();

// @route   POST /api/properties
// @desc    Create a new property
// @access  Public (can be protected if needed)
router.post("/", createProperty);

// @route   GET /api/properties
// @desc    Get all properties
// @access  Public
router.get("/", getAllProperties);

// @route   GET /api/properties/:id
// @desc    Get a single property by ID
// @access  Public
router.get("/:id", getPropertyById);

module.exports = router;
