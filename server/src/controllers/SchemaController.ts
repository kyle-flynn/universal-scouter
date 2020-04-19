import {Router, Request, Response} from 'express';
import Database from '../Database';
import {Schema} from 'universal-scouter-shared';

const router: Router = Router();

/* GET requests for schemas */
router.get('/', async (req: Request, res: Response) => {
  const values = await Database.getAllSchemas();
  res.send({response: values});
});

router.get('/:schema_id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.schema_id, 10);
    const values = await Database.getSchema(id);
    if (values.length > 0) {
      res.send({response: values[0]});
    } else {
      res.status(404).send('Unable to locate schema.');
    }
  } catch {
    res.status(400).send('Unable to convert identifier to number.');
  }
});

/* POST requests for schemas */
router.post('/', async (req: Request, res: Response) => {
  await Database.insertSchema(new Schema().fromJSON(req.body));
  const values = Database.getAllSchemas();
  res.send({response: values});
});

/* PUT requests for schemas */
router.put('/:schema_id', async (req: Request, res: Response) => {
  await Database.updateSchema(new Schema().fromJSON(req.body));
  const values = Database.getAllSchemas();
  res.send({response: values});
});

/* DELETE requests for schemas */
router.delete('/:schema_id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.schema_id, 10);
    await Database.removeSchema(id);
    const newValues = await Database.getAllSchemas();
    res.send({response: newValues});
  } catch {
    res.status(400).send('Unable to convert identifier to number.');
  }
});

export default router;