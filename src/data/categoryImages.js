// src/data/categoryImages.js
export const categoryImages = {
  electrical:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345273/electrical_i5zsz3.png",
  automation:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345277/automation_rzj652.png",
  sensors:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345263/industrialSensors_jevmci.png",
  bearings:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345263/bearings_cwcrwi.png",
  fasteners:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345283/fastner_tuuow5.png",
  spares:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345299/spareparts_j2tftw.png",
  "engineering-spares":
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345308/engineeringspare_xv6lt8.png",
  mro: "https://res.cloudinary.com/ssxygquk/image/upload/v1785345313/mroitems_prl23i.png",
  safety:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345299/saftey_mrhlw8.png",
  "power-tools":
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345297/powertool_jldmfg.png",
  pneumatic:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345300/penumaticstool_ldw1gh.png",
  welding:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345296/welding_t8rerw.png",
  consumables:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345280/consumables_jfmwcf.png",
  hydraulics:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345268/hydrolics_z70wk8.png",
  valves:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345264/valves_tqym3x.png",
  pumps:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345303/pumps_iyupeh.png",
  motors:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345288/moters_smovdx.png",
  "control-panels":
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345288/controlpanel_dsweuf.png",
  cables:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345278/cables_vkcxkf.png",
  testing:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345288/testing_aujwuj.png",
  cctv: "https://res.cloudinary.com/ssxygquk/image/upload/v1785345268/cctv_baplm8.png",
  hardware:
    "https://res.cloudinary.com/ssxygquk/image/upload/v1785345268/industriesHardware_rigbvr.png",
};

export const getCategoryImage = (slug) => {
  return categoryImages[slug] || categoryImages.default || "";
};
