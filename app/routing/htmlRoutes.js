const path = require('path');
const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', (__, res) => {
    res.sendFile(path.join(__dirname, '/../public/html/newfarm.html'));
});
router.get('/marketplace/1', (__, res) => {
    res.sendFile(path.join(__dirname, '/../public/html/marketplace1.html'));
});
router.get('/marketplace/2', (__, res) => {
    res.sendFile(path.join(__dirname, '/../public/html/marketplace2.html'));
});
router.get('/marketplace/3', (__, res) => {
    res.sendFile(path.join(__dirname, '/../public/html/marketplace3.html'));
});
