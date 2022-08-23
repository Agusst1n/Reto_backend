import { Response, } from 'restify';
import { Router, } from 'restify-router';
import videoController from '../controllers/video.controller';

const router = new Router();

router.get('/execute', async (req, res): Promise<Response> => {
  try {
    await videoController.executeProcessToBuildReel()
    return res.json({ success: true, hola: 'hola q hace'});
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});


router.get('/testMongoDB', async (req, res): Promise<Response> => {
  try {
    await videoController.testMongoDB()
    return res.json({ success: true, hola: 'hola q hace estoy ok'});
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});


router.get('/ffmpeg', async (req, res): Promise<Response> => {
  try {
    await videoController.testingFfmpeg()
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});

router.post('/cutvideo', async (req, res): Promise<Response> => {
  try {
    const {nameVideo, startTime, endTime, numberCpusAvailables} = req.body
    console.log("🚀 ~ file: video.routes.ts ~ line 28 ~ router.get ~ nameVideo", nameVideo)
    await videoController.cutVideo(nameVideo, startTime, endTime, numberCpusAvailables)

    //!esperar la info para guardarse
    //const videoDB = await videoController.cutVideo(nameVideo, startTime, endTime, numberCpusAvailables)
    
    //!aca puede enviarse los datos en mongo
    //await videoDB.save();

    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});

export default router;