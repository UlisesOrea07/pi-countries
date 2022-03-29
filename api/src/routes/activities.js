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
        res.status(400).res.json({ "status": "error", "error": {}, "message": "all fields are needed" })
    }
    try {
        const activity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        });
        await activity.addCountry(countries);
        res.status(201).res.json({ "status": "ok", "data": activity, "message": "Response activity created" })
    } catch (error) {
        res.send({ status: "error", error: "Something went wrong" + error });
    }
});
module.exports = router;