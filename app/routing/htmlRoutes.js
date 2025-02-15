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
router.get('/marketplace/4', (__, res) => {
    res.sendFile(path.join(__dirname, '/../public/html/marketplace4.html'));
});
router.get('/marketplace/5', (__, res) => {
    res.sendFile(path.join(__dirname, '/../public/html/marketplace5.html'));
});
router.get('/marketplace/6', (__, res) => {
    res.sendFile(path.join(__dirname, '/../public/html/marketplace6.html'));
});
