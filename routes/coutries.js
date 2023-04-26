const express = require("express");
const router = express.Router();
const controller = require("../controller/countryController")


router.get("/",controller.fetchAllcountries)
router.get("/:countryId",controller.fetchSpecificCountry)
router.post("/", controller.createCountry)

router.delete("/:countryId",controller.deleteCountry)
router.patch("/:countryId",controller.updateCountry)



module.exports = router