import VideoReelModel, { VideoStatusProcess } from "../datalayers/models/mongodb/VideoReel.model"
import SonyVegasController from './sonyvegas.controller'
class VideoController {
    async testingFfmpeg() {
        try {
            await SonyVegasController.ffmpeg({})
        } catch (error) {
            throw error
        }
    }
    async executeProcessToBuildReel() {
        const videoId: any = null

        try {
            // al iniciar proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoStatusProcess.INIT
            })
            // al finalizar proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoStatusProcess.END
            })
        } catch (error) {
            // al obtener error en el proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoStatusProcess.ERR
            })
            throw error
        }
    }
    async getStatusOfProcess({ }: any) {
        try {

        } catch (error) {
            throw error
        }
    }

    private async setStatusOfVideo({ }: any) {

    }

    private async createVideoReel() {

    }

    async updateData() {
        let dateUpdate=  new Date()
        const updateData = await VideoReelModel.findOneAndUpdate({
            _id: "62f302a0f9027c96dda81aa6"
        }, {
            $set: {
                srcLink: 'https://google.com',
                updatedAt: dateUpdate
            }
        })
    }

    async createData() {
        let dateUpdate=  new Date()
        const updateData = await VideoReelModel.insertMany([{
            srcLink: 'https://google.com',
            createdAt: new Date()
        }])
    }

    async cutVideo(nameVideo: string, startTime: string, endTime: string, numberCpusAvailables: number) {
        try {
            await SonyVegasController.cutVideo(nameVideo, startTime, endTime, numberCpusAvailables)
        } catch (error) {
            throw error
        }
    }

    async testMongoDB() {
        
        try{
            const data = await VideoReelModel.findOne({}).lean()
    
            console.log(data, 'la data')
    
            return data
            
        }catch (error) {
            throw error
        }
    }



    async datos(nombre_pagina: string, limite: number) {
        try {
            console.log('vamos bien')
            await SonyVegasController.datos(nombre_pagina, limite)
        } catch (error) {
            throw error
        }
    }

    //Descarga los videos
    async downloadvid(name_archivo: string){
        try {        
            console.log('Entre fase 2')
            const ruta = '/back/Reto_backend/srcvideosdescargados'
            let args2 = [
                'let counter=0;',
                'for video in *.mp4;',
                'do mv -i',
                '"$video"',
                `${ruta}/"video"_$((counter+1)).mp4`,
                '&& counter=$(( counter+1 )); done',
            ]
            await SonyVegasController.downloadvid(name_archivo)
            await SonyVegasController.libre(args2)
        } catch (error) {
            throw error
        }
    }
}

export default new VideoController()