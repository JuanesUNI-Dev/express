import { reserveByDate, requestByDate, requestBySpace, reserveBySpace, totalsales, valuesByDate, valuesByMonth } from "../service/stadistic.service.js";

export const stadisticController = {
    reserveByDate : async(req, res) => {
        try {
            const result = await reserveByDate();
            //Retornar Respuesta
            return res.status(200).json({result : result})
        } catch (error) {
            const status = error.statusCode || 500;
            //Retornar Error
            return res.status(status).json({message: error.message})
        }
    },
    requestByDate : async(req, res) => {
        try {
            const result = await requestByDate();
            //Retornar Respuesta
            return res.status(200).json({result : result})
        } catch (error) {
            const status = error.statusCode || 500;
            //Retornar Error
            return res.status(status).json({message: error.message})
        }
    },
    requestBySpace : async(req, res) => {
        try {
            const result = await requestBySpace();
            //Retornar Respuesta
            return res.status(200).json({result : result})
        } catch (error) {
            const status = error.statusCode || 500;
            //Retornar Error
            return res.status(status).json({message: error.message})
        }
    },
    reserveBySpace : async(req, res) => {
        try {
            const result = await reserveBySpace();
            //Retornar Respuesta
            return res.status(200).json({result : result})
        } catch (error) {
            const status = error.statusCode || 500;
            //Retornar Error
            return res.status(status).json({message: error.message})
        }
    },
    totalsales : async(req, res) => {
        try {
            const result = await totalsales();
            //Retornar Respuesta
            return res.status(200).json({result : result})
        } catch (error) {
            const status = error.statusCode || 500;
            //Retornar Error
            return res.status(status).json({message: error.message})
        }
    },
    valuesByDate : async(req, res) => {
        try {
            const result = await valuesByDate();
            //Retornar Respuesta
            return res.status(200).json({result : result})
        } catch (error) {
            const status = error.statusCode || 500;
            //Retornar Error
            return res.status(status).json({message: error.message})
        }
    },
    valuesByMonth : async(req, res) => {
        try {
            const result = await valuesByMonth();
            //Retornar Respuesta
            return res.status(200).json({result : result})
        } catch (error) {
            const status = error.statusCode || 500;
            //Retornar Error
            return res.status(status).json({message: error.message})
        }
    },
}
