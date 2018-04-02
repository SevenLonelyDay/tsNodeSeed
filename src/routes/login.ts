import * as express from 'express';

const router = express.Router();

router.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.body);
    res.json({ title: 'Hello Express' });
});

router.post('/regist', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.body);
    res.json({ mes: '注册成功！' });
});

export = router;