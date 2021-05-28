const path = require('path');
const express = require('express');
const router = express.Router();

module.exports = router;

// router.get('/2', (__, res) => {
//     res.sendFile(path.join(__dirname, '/../public/html/farm2.html'));
// });

router.get('/', (__, res) => {
    res.sendFile(path.join(__dirname, '/../public/html/farm.html'));
});