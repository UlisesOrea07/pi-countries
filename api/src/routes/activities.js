const { Activity } = require('../db');
const router = require('express').Router();

router.get('/activities', async (req, res) => {
    try {
        const activities = await Activity.findAll();
        res.json(activities);
    } catch (error) {
        res.send(error);
    }

});
router.post('/activity', async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    if (!name, !difficulty, !duration, !season) {
        res.status(400).send('All field are needed')
    }
    try {
        const activity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        });
        await activity.addCountry(countries);
        res.status(201).json({ message: 'created', id: activity.id })
    } catch (error) {
        res.send(error);
    }
});
module.exports = router;