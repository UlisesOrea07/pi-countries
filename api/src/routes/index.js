const { Router } = require('express');
const countriesRouter = require('./countries');
const activitiesRouter = require('./activities')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);
router.use(countriesRouter);
router.use(activitiesRouter);

module.exports = router;
