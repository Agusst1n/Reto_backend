import { spawn } from 'child_process'
import { mkdirSync, existsSync, appendFileSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'
import uuid4 from "uuid4";

class SonyVegasByBootcamp {
    dirVideos: string;
    constructor(){
        this.dirVideos = `${__dirname.split('/').slice(0,5).join('/')}/srcvideos`
    }
    async ffmpeg(argsFfmpeg: any) {
        try {
            return new Promise((resolve, reject) => {
                const opts = { shell: true }
                
                console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 13 ~ SonyVegasByBootcamp ~ ffmpeg ~ argsFfmpeg", argsFfmpeg, this.dirVideos)
                const child = spawn('ffmpeg', (argsFfmpeg), opts)
            

                child.stdout.on('data', (data: any) => {
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data: any) => {
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code: any) => {
                    console.log(`child process exited with code ${code}`);
                    resolve(`proceso terminado => ${code}`)
                });

                child.on('error', (code: any) => {
                    reject(`proceso con errores => ${code}`)
                });

                child.on('message', (code: any) => {
                    console.log(`this is message from child.on =>`, code)
                });
            })
        } catch (error) {
        console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 43 ~ SonyVegasByBootcamp ~ ffmpeg ~ error", error)

        }
    }

    async cutVideo(nameVideo: string, startTime: string, endTime: string, numberCpusAvailables = 4) {
        try {
            let extensionVideo = '.mp4'
            let videoSource = {
                srcVideo: `${this.dirVideos}/${nameVideo}${extensionVideo}`,
                srcVideoOutput: `${this.dirVideos}/${nameVideo}-${uuid4()}${extensionVideo}`
            }
            // ffmpeg -y -i video_5.mp4 -threads 4 -ss 00:00:00 -to 00:00:20 -async 1 video_5_cut.mp4
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 53 ~ SonyVegasByBootcamp ~ cutVideo ~ videoSource", videoSource)
            let args = [
                '-y',
                '-i',
                videoSource?.srcVideo,
                `-threads ${numberCpusAvailables}`,
                `-ss ${startTime}`,
                `-to ${endTime}`,
                '-async 1',
                videoSource?.srcVideoOutput
            ]

            await this.ffmpeg(args)
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 67 ~ SonyVegasByBootcamp ~ cutVideo ~ error", error)
            throw error
        }
    }


    async cutVideos(videoSources: any[]) {
        try {
        } catch (error) {
            throw error
        }
    }
    async joinVideos(arrVideos: any[]) {
        try {

        } catch (error) {

        }
    }
    async addFilterVideos(arrVideos: any[]) {
        try {

        } catch (error) {

        }
    }
    async addImagesToVideos(arrVideos: any[]) {
        try {

        } catch (error) {

        }
    }

    async curl(args: any){
        try {
            return new Promise((resolve, reject)=>{
                const opts = { shell: true }
                const child = spawn('curl',(args), opts)
                child.stdout.on('data', (data: any) => {
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data: any) => {
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code: any) => {
                    console.log(`child process exited with code ${code}`);
                    resolve(`proceso terminado => ${code}`)
                });

                child.on('error', (code: any) => {
                    reject(`proceso con errores => ${code}`)
                });

                child.on('message', (code: any) => {
                    console.log(`this is message from child.on =>`, code)
                });
            })
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 24 ~ SonyVegasByBootcamp ~ cd ~ error", error)   
        }
    }

    async libre(args: any){
        try {
            console.log('entre al cambio de nombre')
            return new Promise((resolve, reject)=>{
                const opts = { shell: true }
                const child = spawn(' ',(args), opts)
                
                child.stdout.on('data', (data: any) => {
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data: any) => {
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code: any) => {
                    console.log(`child process exited with code ${code}`);
                    resolve(`proceso terminado => ${code}`)
                });

                child.on('error', (code: any) => {
                    reject(`proceso con errores => ${code}`)
                });

                child.on('message', (code: any) => {
                    console.log(`this is message from child.on =>`, code)
                });
            })
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 24 ~ SonyVegasByBootcamp ~ cd ~ error", error)   
        }
    }

    async youtubedl(args: any){
        try {
            return new Promise((resolve, reject)=>{
                const opts = { shell: true }
                const child = spawn('youtube-dl', (args), opts)

                child.stdout.on('data', (data: any) => {
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data: any) => {
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code: any) => {
                    console.log(`child process exited with code ${code}`);
                    resolve(`proceso terminado => ${code}`)
                });

                child.on('error', (code: any) => {
                    reject(`proceso con errores => ${code}`)
                });

                child.on('message', (code: any) => {
                    console.log(`this is message from child.on =>`, code)
                });
            })
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 24 ~ SonyVegasByBootcamp ~ cd ~ error", error)   
        }
    }

    async datos(nombre_pagina: string, limite: number){
        try {
            console.log('entre')
            console.log(nombre_pagina, 'nombre', limite, 'limite')
            let args = [
                '-H', 
                '"User-agent:',
                "'your bot 0.1'"+'"', 
                `https://www.reddit.com/r/${nombre_pagina}/top.json\?limit\=${limite}`,
                "| jq '.' |",
                'grep url_overridden_by_dest',
                '| grep -Eoh', 
                '"https://v.redd.it\\/\\w{13}"',
                '>',
                'videos.txt'
            ]
            await this.curl(args)      
        } catch (error) {
            throw error
        }
    }

    //Descargamos los videos del archivo de datos descargado
    async downloadvid(name_archivo: string){
        try {
            console.log('Entre route fase 3')
            let args = [
                '-a',
                `${name_archivo}.txt`
            ]
            console.log(args)
            await this.youtubedl(args)      
        } catch (error) {
            throw error
        }
    }
}

export default new SonyVegasByBootcamp()