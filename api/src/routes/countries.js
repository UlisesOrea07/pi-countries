const { Country, Activity } = require('../db');
const router = require('express').Router();
const { Op } = require('sequelize');

router.get('/countries', async (req, res) => {
    try {
        const countries = await Country.findAll({
            include: Activity
        });
        res.json(countries);
    } catch (error) {
        res.send(error);
    }

});

router.get('/countries', async (req, res) => {
    try {
        const { expresion } = req.query;
        const countries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: expresion
                }
            },
            include: Activity
        });
        res.json(countries);
    } catch (error) {
        res.send(error);
    }

})
router.get('/country/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const country = await Country.findByPk(id);

        res.json(country);
    } catch (error) {
        res.send(error);
    }
});
module.exports = router;