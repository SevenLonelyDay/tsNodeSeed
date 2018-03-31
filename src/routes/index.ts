import * as express from 'express';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json({ title: 'Hello Express' });
});

export = router;