// const express = require('express');
// const router = express.Router();
// const cartController = require('../controllers/cartController');
// // const authUser = require('../middleware/authUser');

// // Remove the /cart prefix since it's added by app.use('/api', cartRoute)
// router.post('/', cartController.addToCart);
// router.get('/', cartController.getCart);
// router.delete('/:id', cartController.removeFromCart);

// module.exports = router;

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const verifyToken = require('../middleware/authUser');

router.post('/', verifyToken, cartController.addToCart);
router.get('/', verifyToken, cartController.getCart);
router.delete('/:id', verifyToken, cartController.removeFromCart);

module.exports = router;