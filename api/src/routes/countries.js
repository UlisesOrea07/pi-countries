const { Country, Activity } = require('../db');
const router = require('express').Router();
const { Op } = require('sequelize');

// router.get('/countries', async (req, res) => {
//     try {
//         const countries = await Country.findAll({
//             include: Activity,
//         });
//         res.json({ "status": "ok", "data": countries, "message": "Response succefuly" });
//     } catch (error) {
//         res.send({ "status": "error", "error": "Something went wrong" + error });
//     }

// });

router.get('/countries', async (req, res) => {
    try {
        const { expresion } = req.query;
        let countries = [];
        if (!expresion) {
            countries = await Country.findAll({
                include: Activity,
            });
        } else {
            countries = await Country.findAll({
                where: {
                    name: {
                        [Op.substring]: expresion
                    }
                },
                include: Activity
            });
        }
        countries ? res.json({ "status": "ok", "data": countries, "message": "Response succefuly" })
            : res.json({ "status": "not", "error": "Not found" });
    } catch (error) {
        res.send({ status: "error", error: "Something went wrong" + error });
    }

});

router.get('/country/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const country = await Country.findByPk(id);
        console.log(country)
        country ? res.json({ "status": "ok", "data": country, "message": "Response succefuly" })
            : res.json({ status: "not", error: "Not found" });
    } catch (error) {
        res.send({ status: "error", error: "Something went wrong" + error });
    }
});
module.exports = router;