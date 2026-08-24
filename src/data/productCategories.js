export const productCategories = {
  "electricals-electronics": {
    id: "electricals-electronics",
    name: "Electricals & Electronics",
    icon: "Zap",
    description:
      "Complete range of electrical and electronic components for industrial and commercial use.",
    subcategories: {
      transformer: {
        id: "transformer",
        name: "Transformer",
        products: [
          {
            id: "t-001",
            name: "Distribution Transformer",
            specs: {
              Capacity: "100-2500 kVA",
              Voltage: "11kV/433V",
              Type: "Oil Cooled",
            },
          },
          {
            id: "t-002",
            name: "Power Transformer",
            specs: {
              Capacity: "5-50 MVA",
              Voltage: "132kV/33kV",
              Type: "Oil Cooled",
            },
          },
          {
            id: "t-003",
            name: "Dry Type Transformer",
            specs: {
              Capacity: "100-2000 kVA",
              Voltage: "11kV/433V",
              Type: "Dry Type",
            },
          },
        ],
      },
      capacitor: {
        id: "capacitor",
        name: "Capacitor",
        products: [
          {
            id: "c-001",
            name: "Power Capacitor",
            specs: {
              Voltage: "230-690V",
              Capacity: "5-100 kVAR",
              Type: "Power Factor Correction",
            },
          },
          {
            id: "c-002",
            name: "Motor Start Capacitor",
            specs: {
              Voltage: "230-440V",
              Capacity: "2-100 µF",
              Type: "Motor Starting",
            },
          },
          {
            id: "c-003",
            name: "Film Capacitor",
            specs: { Voltage: "250-1000V", Capacity: "1-100 µF", Type: "Film" },
          },
        ],
      },
      "control-panel": {
        id: "control-panel",
        name: "Control Panel",
        products: [
          {
            id: "cp-001",
            name: "Motor Control Panel",
            specs: {
              Voltage: "415V",
              Current: "10-1000A",
              Type: "Motor Control",
            },
          },
          {
            id: "cp-002",
            name: "Distribution Panel",
            specs: {
              Voltage: "415V",
              Current: "100-2000A",
              Type: "Power Distribution",
            },
          },
          {
            id: "cp-003",
            name: "PLC Control Panel",
            specs: {
              Voltage: "24-230V",
              Type: "PLC Based",
              Features: "Automation Ready",
            },
          },
        ],
      },
      diode: {
        id: "diode",
        name: "Diode",
        products: [
          {
            id: "d-001",
            name: "Power Diode",
            specs: { Voltage: "100-2000V", Current: "1-500A", Type: "Power" },
          },
          {
            id: "d-002",
            name: "Signal Diode",
            specs: { Voltage: "50-200V", Current: "100-500mA", Type: "Signal" },
          },
          {
            id: "d-003",
            name: "Zener Diode",
            specs: { Voltage: "3.3-100V", Power: "0.5-5W", Type: "Zener" },
          },
        ],
      },
      relay: {
        id: "relay",
        name: "Relay",
        products: [
          {
            id: "r-001",
            name: "Electromagnetic Relay",
            specs: {
              Voltage: "12-230V",
              Contact: "SPDT/DPDT",
              Type: "Electromagnetic",
            },
          },
          {
            id: "r-002",
            name: "Solid State Relay",
            specs: {
              Voltage: "24-480V",
              Current: "10-100A",
              Type: "Solid State",
            },
          },
          {
            id: "r-003",
            name: "Protection Relay",
            specs: { Voltage: "110-220V", Type: "Overload/Short Circuit" },
          },
        ],
      },
    },
  },

  "tools-spares-hardware": {
    id: "tools-spares-hardware",
    name: "Tools, Spares and Hardware",
    icon: "Wrench",
    description:
      "Industrial tools, hardware, and spares for maintenance and operations.",
    subcategories: {
      "hand-tools": {
        id: "hand-tools",
        name: "Hand Tools",
        products: [
          {
            id: "ht-001",
            name: "Industrial Spanner Set",
            specs: {
              Size: "6-32mm",
              Material: "Chrome Vanadium",
              Type: "Combination",
            },
          },
          {
            id: "ht-002",
            name: "Heavy Duty Hammer",
            specs: { Weight: "1-5kg", Material: "Steel", Type: "Sledge" },
          },
          {
            id: "ht-003",
            name: "Precision Screwdriver Set",
            specs: {
              Size: "0-6mm",
              Material: "Chrome Vanadium",
              Type: "Precision",
            },
          },
        ],
      },
      "power-tools": {
        id: "power-tools",
        name: "Power Tools",
        products: [
          {
            id: "pt-001",
            name: "Industrial Drill Machine",
            specs: { Power: "500-2000W", Speed: "0-3000 RPM", Chuck: "13mm" },
          },
          {
            id: "pt-002",
            name: "Angle Grinder",
            specs: {
              Power: "700-2000W",
              Size: "100-230mm",
              Speed: "11000 RPM",
            },
          },
          {
            id: "pt-003",
            name: "Electric Saw",
            specs: { Power: "800-1800W", Blade: "185-254mm", Type: "Circular" },
          },
        ],
      },
      "measuring-tool": {
        id: "measuring-tool",
        name: "Measuring Tool",
        products: [
          {
            id: "mt-001",
            name: "Digital Vernier Caliper",
            specs: {
              Range: "0-300mm",
              Accuracy: "±0.02mm",
              Display: "Digital LCD",
            },
          },
          {
            id: "mt-002",
            name: "Micrometer",
            specs: { Range: "0-100mm", Accuracy: "±0.001mm", Type: "Outside" },
          },
          {
            id: "mt-003",
            name: "Laser Distance Meter",
            specs: { Range: "0-100m", Accuracy: "±2mm", Features: "Bluetooth" },
          },
        ],
      },
      "pumps-parts": {
        id: "pumps-parts",
        name: "Pumps and Parts",
        subcategories: {
          "centrifugal-pumps": {
            id: "centrifugal-pumps",
            name: "Centrifugal Pumps",
            products: [
              {
                id: "cp-001",
                name: "End Suction Pump",
                specs: {
                  Flow: "5-1000 m³/h",
                  Head: "10-100m",
                  Material: "Cast Iron/SS",
                },
              },
              {
                id: "cp-002",
                name: "Multistage Pump",
                specs: {
                  Flow: "1-500 m³/h",
                  Head: "50-500m",
                  Type: "Vertical/Horizontal",
                },
              },
            ],
          },
          "submersible-pumps": {
            id: "submersible-pumps",
            name: "Submersible Pumps",
            products: [
              {
                id: "sp-001",
                name: "Borewell Submersible",
                specs: { HP: "1-100 HP", Head: "20-200m", Type: "Borewell" },
              },
              {
                id: "sp-002",
                name: "Sewage Submersible",
                specs: { HP: "0.5-50 HP", Head: "10-50m", Type: "Sewage" },
              },
            ],
          },
          "sewage-pumps": {
            id: "sewage-pumps",
            name: "Sewage Pumps",
            products: [
              {
                id: "sw-001",
                name: "Sewage Ejector Pump",
                specs: { HP: "0.5-10 HP", Head: "10-30m", Type: "Sewage" },
              },
            ],
          },
        },
      },
    },
  },

  mechanical: {
    id: "mechanical",
    name: "Mechanical",
    icon: "Settings",
    description: "Mechanical components, machinery, and industrial equipment.",
    subcategories: {
      machinery: {
        id: "machinery",
        name: "Machinery",
        products: [
          {
            id: "mc-001",
            name: "Lathe Machine",
            specs: {
              Swing: "300-1000mm",
              "Center Distance": "1000-5000mm",
              Type: "Engine Lathe",
            },
          },
          {
            id: "mc-002",
            name: "Milling Machine",
            specs: {
              "Table Size": "300-600mm",
              "Spindle Speed": "50-2000 RPM",
              Type: "Vertical",
            },
          },
          {
            id: "mc-003",
            name: "Drilling Machine",
            specs: {
              Capacity: "13-50mm",
              "Spindle Speed": "50-2000 RPM",
              Type: "Radial",
            },
          },
        ],
      },
      "material-handling": {
        id: "material-handling",
        name: "Material Handling Equipment",
        products: [
          {
            id: "mhe-001",
            name: "Overhead Crane",
            specs: { Capacity: "1-100 ton", Span: "5-50m", Type: "EOT" },
          },
          {
            id: "mhe-002",
            name: "Forklift",
            specs: {
              Capacity: "1-10 ton",
              "Lift Height": "3-6m",
              Type: "Diesel/Electric",
            },
          },
          {
            id: "mhe-003",
            name: "Conveyor Belt",
            specs: {
              Width: "300-1200mm",
              Length: "5-100m",
              Type: "Belt Conveyor",
            },
          },
        ],
      },
      valve: {
        id: "valve",
        name: "Valve",
        products: [
          {
            id: "vl-001",
            name: "Gate Valve",
            specs: {
              Size: "1-24 inch",
              Pressure: "150-2500 LB",
              Material: "Cast Iron/SS",
            },
          },
          {
            id: "vl-002",
            name: "Ball Valve",
            specs: {
              Size: "0.5-12 inch",
              Pressure: "150-1500 LB",
              Type: "Floating/Trunnion",
            },
          },
          {
            id: "vl-003",
            name: "Check Valve",
            specs: {
              Size: "1-24 inch",
              Pressure: "150-2500 LB",
              Type: "Swing/Lift",
            },
          },
        ],
      },
      "hydraulic-pneumatic": {
        id: "hydraulic-pneumatic",
        name: "Hydraulic and Pneumatic Machines",
        products: [
          {
            id: "hp-001",
            name: "Hydraulic Cylinder",
            specs: {
              Bore: "25-500mm",
              Stroke: "50-3000mm",
              Pressure: "160-250 bar",
            },
          },
          {
            id: "hp-002",
            name: "Pneumatic Cylinder",
            specs: { Bore: "8-320mm", Stroke: "10-3000mm", Pressure: "10 bar" },
          },
          {
            id: "hp-003",
            name: "Hydraulic Pump",
            specs: {
              Flow: "5-500 lpm",
              Pressure: "210-350 bar",
              Type: "Vane/Piston",
            },
          },
        ],
      },
    },
  },

  "safety-security-protection": {
    id: "safety-security-protection",
    name: "Safety, Security & Protection",
    icon: "Shield",
    description: "Safety equipment, security systems, and protection devices.",
    subcategories: {
      "cctv-products": {
        id: "cctv-products",
        name: "CCTV Products",
        products: [
          {
            id: "cctv-001",
            name: "IP Camera",
            specs: {
              Resolution: "2-8 MP",
              Lens: "2.8-12mm",
              Features: "Night Vision, IR",
            },
          },
          {
            id: "cctv-002",
            name: "CCTV DVR/NVR",
            specs: { Channels: "4-64", Storage: "1-16 TB", Type: "AI Enabled" },
          },
          {
            id: "cctv-003",
            name: "PTZ Camera",
            specs: { Resolution: "2-8 MP", Pan: "360°", Tilt: "-5-185°" },
          },
        ],
      },
      "fire-rescue": {
        id: "fire-rescue",
        name: "Fire & Disaster Rescue Equipment",
        products: [
          {
            id: "fr-001",
            name: "Fire Extinguisher",
            specs: {
              Capacity: "1-50 kg",
              Type: "ABC/DCP/CO2",
              Rating: "2A-20B:C",
            },
          },
          {
            id: "fr-002",
            name: "Fire Alarm System",
            specs: { Type: "Conventional/Addressable", Zones: "2-64" },
          },
          {
            id: "fr-003",
            name: "Emergency Exit Light",
            specs: { Duration: "1-3 hours", Battery: "LED", Type: "Emergency" },
          },
        ],
      },
      "traffic-safety": {
        id: "traffic-safety",
        name: "Traffic Safety Equipment",
        products: [
          {
            id: "ts-001",
            name: "Traffic Signal",
            specs: { Voltage: "24V/230V", Type: "LED", Size: "200-400mm" },
          },
          {
            id: "ts-002",
            name: "Safety Cone",
            specs: { Height: "300-1000mm", Material: "PVC", Color: "Orange" },
          },
          {
            id: "ts-003",
            name: "Reflective Vest",
            specs: { Size: "M-XXXL", Material: "Polyester", Type: "Hi-Vis" },
          },
        ],
      },
    },
  },

  "wires-cables-accessories": {
    id: "wires-cables-accessories",
    name: "Wires, Cables and Accessories",
    icon: "Cable",
    description:
      "Complete range of wires, cables, and accessories for electrical installations.",
    subcategories: {
      "low-tension-cables": {
        id: "low-tension-cables",
        name: "Low Tension Cables",
        products: [
          {
            id: "lt-001",
            name: "PVC Insulated Cable",
            specs: {
              Voltage: "1.1kV",
              Size: "1-300mm²",
              "No. of Cores": "1-4",
            },
          },
          {
            id: "lt-002",
            name: "XLPE Cable",
            specs: {
              Voltage: "1.1kV",
              Size: "1-400mm²",
              Type: "Armoured/Unarmoured",
            },
          },
        ],
      },
      "high-tension-cables": {
        id: "high-tension-cables",
        name: "High Tension Cables",
        products: [
          {
            id: "ht-001",
            name: "HT XLPE Cable",
            specs: { Voltage: "3.3-33kV", Size: "1-630mm²", Type: "Armoured" },
          },
          {
            id: "ht-002",
            name: "EHV Cable",
            specs: { Voltage: "66-220kV", Size: "1-2000mm²", Type: "Oil/XLPE" },
          },
        ],
      },
      "submersible-cables": {
        id: "submersible-cables",
        name: "Submersible Cables",
        products: [
          {
            id: "sc-001",
            name: "Flat Submersible Cable",
            specs: { Voltage: "1.1kV", Size: "1-95mm²", Type: "Flat" },
          },
          {
            id: "sc-002",
            name: "Round Submersible Cable",
            specs: { Voltage: "1.1kV", Size: "1-150mm²", Type: "Round" },
          },
        ],
      },
      "cctv-cables": {
        id: "cctv-cables",
        name: "CCTV Cables",
        products: [
          {
            id: "cc-001",
            name: "Coaxial CCTV Cable",
            specs: { Length: "100m", Type: "RG-59/RG-6", Shielded: "Yes" },
          },
          {
            id: "cc-002",
            name: "Cat6 Cable",
            specs: { Speed: "1-10 Gbps", Frequency: "250MHz", Type: "UTP/STP" },
          },
        ],
      },
    },
  },

  fans: {
    id: "fans",
    name: "Fans",
    icon: "Wind",
    description: "Industrial and commercial fans for ventilation and cooling.",
    subcategories: {
      "ceiling-fans": {
        id: "ceiling-fans",
        name: "Ceiling Fans",
        products: [
          {
            id: "cf-001",
            name: "Ceiling Fan",
            specs: {
              Size: "1200-1500mm",
              Speed: "300-400 RPM",
              Motor: "50-75W",
            },
          },
          {
            id: "cf-002",
            name: "High Speed Ceiling Fan",
            specs: { Size: "1400mm", Speed: "450 RPM", Motor: "80W" },
          },
        ],
      },
      "exhaust-fans": {
        id: "exhaust-fans",
        name: "Exhaust Fans",
        products: [
          {
            id: "ef-001",
            name: "Industrial Exhaust Fan",
            specs: { Size: "18-48 inch", CFM: "2000-15000", Motor: "0.5-5 HP" },
          },
          {
            id: "ef-002",
            name: "Wall Mount Exhaust Fan",
            specs: { Size: "12-24 inch", CFM: "1000-5000", Type: "Wall Mount" },
          },
        ],
      },
      "pedestal-fans": {
        id: "pedestal-fans",
        name: "Pedestal Fans",
        products: [
          {
            id: "pf-001",
            name: "Pedestal Fan",
            specs: {
              Size: "18-24 inch",
              Speed: "3 Speed",
              Height: "Adjustable",
            },
          },
          {
            id: "pf-002",
            name: "Industrial Pedestal Fan",
            specs: {
              Size: "24-30 inch",
              Motor: "0.5-1 HP",
              "Heavy Duty": "Yes",
            },
          },
        ],
      },
    },
  },

  "led-lighting": {
    id: "led-lighting",
    name: "LED Lighting",
    icon: "Lightbulb",
    description:
      "Energy-efficient LED lighting solutions for industrial and commercial use.",
    subcategories: {
      "led-flood-lights": {
        id: "led-flood-lights",
        name: "LED Flood Lights",
        products: [
          {
            id: "fl-001",
            name: "LED Flood Light",
            specs: {
              Wattage: "50-500W",
              Lumens: "5000-50000",
              "IP Rating": "IP65",
            },
          },
          {
            id: "fl-002",
            name: "Solar Flood Light",
            specs: { Wattage: "10-100W", Battery: "12V", Solar: "Yes" },
          },
        ],
      },
      "led-street-lights": {
        id: "led-street-lights",
        name: "LED Street Lights",
        products: [
          {
            id: "sl-001",
            name: "LED Street Light",
            specs: {
              Wattage: "30-200W",
              Lumens: "3000-20000",
              Height: "6-12m",
            },
          },
          {
            id: "sl-002",
            name: "Solar Street Light",
            specs: { Wattage: "12-100W", Battery: "12V", Solar: "Integrated" },
          },
        ],
      },
      "led-panel-lights": {
        id: "led-panel-lights",
        name: "LED Panel Lights",
        products: [
          {
            id: "pl-001",
            name: "LED Panel Light",
            specs: { Wattage: "18-72W", Size: "300-1200mm", Type: "Edge-lit" },
          },
          {
            id: "pl-002",
            name: "Waterproof Panel Light",
            specs: {
              Wattage: "20-80W",
              Size: "600x600mm",
              "IP Rating": "IP65",
            },
          },
        ],
      },
    },
  },

  "switches-sockets": {
    id: "switches-sockets",
    name: "Switches & Sockets",
    icon: "ToggleLeft",
    description:
      "Industrial and residential switches, sockets, and electrical accessories.",
    subcategories: {
      switches: {
        id: "switches",
        name: "Switches",
        products: [
          {
            id: "sw-001",
            name: "Industrial Switch",
            specs: {
              Voltage: "230-415V",
              Current: "10-63A",
              Type: "Rotary/Push",
            },
          },
          {
            id: "sw-002",
            name: "Modular Switch",
            specs: { Voltage: "230V", Current: "6-16A", Type: "Modular" },
          },
        ],
      },
      sockets: {
        id: "sockets",
        name: "Sockets",
        products: [
          {
            id: "sk-001",
            name: "Industrial Socket",
            specs: {
              Voltage: "230-415V",
              Current: "16-125A",
              "IP Rating": "IP44/IP67",
            },
          },
          {
            id: "sk-002",
            name: "Modular Socket",
            specs: { Voltage: "230V", Current: "6-16A", Type: "Universal" },
          },
        ],
      },
      "spike-guards": {
        id: "spike-guards",
        name: "Spike Guards",
        products: [
          {
            id: "sg-001",
            name: "Spike Guard",
            specs: { Voltage: "230V", Current: "10-16A", Protection: "Surge" },
          },
        ],
      },
    },
  },

  pumps: {
    id: "pumps",
    name: "Pumps",
    icon: "Droplets",
    description:
      "Complete range of pumps for industrial, commercial, and domestic applications.",
    subcategories: {
      "centrifugal-pumps": {
        id: "centrifugal-pumps",
        name: "Centrifugal Pumps",
        products: [
          {
            id: "cp-001",
            name: "Horizontal Centrifugal Pump",
            specs: {
              Flow: "5-1000 m³/h",
              Head: "10-100m",
              Material: "Cast Iron",
            },
          },
          {
            id: "cp-002",
            name: "Vertical Centrifugal Pump",
            specs: {
              Flow: "5-500 m³/h",
              Head: "10-80m",
              Material: "SS/Cast Iron",
            },
          },
        ],
      },
      "submersible-pumps": {
        id: "submersible-pumps",
        name: "Submersible Pumps",
        products: [
          {
            id: "sp-001",
            name: "Submersible Pump",
            specs: { HP: "1-100 HP", Head: "10-200m", Type: "Borewell" },
          },
          {
            id: "sp-002",
            name: "Submersible Dewatering Pump",
            specs: { HP: "0.5-20 HP", Head: "10-50m", Type: "Dewatering" },
          },
        ],
      },
    },
  },

  "geysers-heaters": {
    id: "geysers-heaters",
    name: "Geysers & Heaters",
    icon: "Flame",
    description: "Industrial water heating and room heating solutions.",
    subcategories: {
      "water-heaters": {
        id: "water-heaters",
        name: "Water Heaters",
        products: [
          {
            id: "wh-001",
            name: "Industrial Water Heater",
            specs: { Capacity: "50-500L", Power: "3-12kW", Type: "Storage" },
          },
          {
            id: "wh-002",
            name: "Instant Water Heater",
            specs: {
              Power: "3-6kW",
              Type: "Instant",
              "Flow Rate": "2-5 L/min",
            },
          },
        ],
      },
      "immersion-rods": {
        id: "immersion-rods",
        name: "Immersion Rods",
        products: [
          {
            id: "ir-001",
            name: "Immersion Rod",
            specs: { Power: "1-3kW", Voltage: "230V", Material: "Copper" },
          },
        ],
      },
      "room-heaters": {
        id: "room-heaters",
        name: "Room Heaters",
        products: [
          {
            id: "rh-001",
            name: "Industrial Room Heater",
            specs: {
              Power: "2-10kW",
              Type: "Fan/Convection",
              Coverage: "100-500 sq.ft",
            },
          },
        ],
      },
    },
  },
};

// Helper function to get all categories as array
export const getCategories = () => {
  return Object.values(productCategories).map((cat) => ({
    id: cat.id,
    name: cat.name,
    icon: cat.icon,
    description: cat.description,
    subcategoryCount: Object.keys(cat.subcategories).length,
  }));
};

// Helper function to get subcategories for a category
export const getSubcategories = (categoryId) => {
  const category = productCategories[categoryId];
  if (!category) return [];
  return Object.values(category.subcategories);
};

// Helper function to get all products from a category
export const getProductsByCategory = (categoryId) => {
  const category = productCategories[categoryId];
  if (!category) return [];

  let products = [];
  const traverseSubcategories = (subcat) => {
    if (subcat.products) {
      products = [
        ...products,
        ...subcat.products.map((p) => ({ ...p, subcategory: subcat.name })),
      ];
    }
    if (subcat.subcategories) {
      Object.values(subcat.subcategories).forEach(traverseSubcategories);
    }
  };

  Object.values(category.subcategories).forEach(traverseSubcategories);
  return products;
};

// Helper function to search products
export const searchProducts = (query) => {
  const results = [];
  const searchTerm = query.toLowerCase();

  Object.values(productCategories).forEach((category) => {
    const traverseSubcategories = (subcat) => {
      if (subcat.products) {
        subcat.products.forEach((product) => {
          if (
            product.name.toLowerCase().includes(searchTerm) ||
            product.id.toLowerCase().includes(searchTerm)
          ) {
            results.push({
              ...product,
              category: category.name,
              subcategory: subcat.name,
            });
          }
        });
      }
      if (subcat.subcategories) {
        Object.values(subcat.subcategories).forEach(traverseSubcategories);
      }
    };

    Object.values(category.subcategories).forEach(traverseSubcategories);
  });

  return results;
};
