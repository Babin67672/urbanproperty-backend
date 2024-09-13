// propertyController.js
const Property = require("../models/Property");

// Create a new property
exports.createProperty = async (req, res) => {
  const propertyData = req.body;
  try {
    const newProperty = new Property(propertyData);
    await newProperty.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(500).json({ error: "Property creation failed" });
  }
};

// Fetch all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch properties" });
  }
};

// Fetch a single property by ID
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch property" });
  }
};
