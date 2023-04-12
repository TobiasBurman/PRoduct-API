const express = require("express");
const router = express.Router();
const controller = require("../controller/productController")


router.get("/",controller.fetchAllproducts)
router.get("/:productId",controller.fetchSpecificProduct)
router.post("/", controller.createProduct)

router.delete("/:productId",controller.deleteProduct)
router.patch("/:productId",controller.updateProduct)



module.exports = router