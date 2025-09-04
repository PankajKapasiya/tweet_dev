import express from 'express';
import v1approutes from './v1/index.js';

const router = express.Router();

router.use('/v1', v1approutes);

export default router;
