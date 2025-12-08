import pool from "../lib/db.js";
import { errorHandler } from "../util/errorHandler.js";

export const valuesByDate = async() => {
    try {
        const result = await pool.query(
            `
            SELECT 
                EXTRACT(YEAR FROM init_date) AS year,
                EXTRACT(MONTH FROM init_date) AS month,
                SUM(total_value) AS total_sum
            FROM LOG_RESERVATION
            GROUP BY 
                EXTRACT(YEAR FROM init_date),
                EXTRACT(MONTH FROM init_date)
            ORDER BY 
                year ASC,
                month ASC;
            `
        );
        return result.rows
    } catch (error) {
        errorHandler(error)
    }
}
export const totalsales = async() => {
    try {
        const result = await pool.query(
            `
            SELECT
            SUM(estimated_value) AS VENTAS_ESTIMADAS,
            SUM(total_value) AS VENTAS_TOTALES
            FROM LOG_RESERVATION;
            `
        );
        return result.rows
    } catch (error) {
        errorHandler(error)
    }
}
export const reserveBySpace = async() => {
    try {
        const result = await pool.query(
            `
            SELECT 
            name_space AS ESPACIO,
            COUNT(name_space) AS No_Reservas
            FROM LOG_RESERVATION
            GROUP BY NAME_sPACE
            ORDER BY No_Reservas DESC;
            `
        );
        return result.rows
    } catch (error) {
        errorHandler(error)
    }
}
export const reserveByDate = async() => {
    try {
        const result = await pool.query(
            `
            SELECT 
                EXTRACT(YEAR FROM init_date) AS year,
                EXTRACT(MONTH FROM init_date) AS month,
                COUNT(id_reservation) AS NoReservas
            FROM LOG_RESERVATION
            GROUP BY 
                EXTRACT(YEAR FROM init_date),
                EXTRACT(MONTH FROM init_date)
            ORDER BY 
                year ASC,
                month ASC; 
            `
        );
        return result.rows
    } catch (error) {
        errorHandler(error)
    }
}
export const valuesByMonth = async() => {
    try {
        const result = await pool.query(
            `
            SELECT 
                EXTRACT(YEAR FROM init_date) AS year,
                EXTRACT(MONTH FROM init_date) AS month,
                SUM(total_value) AS total_sum
            FROM LOG_RESERVATION
            GROUP BY 
                EXTRACT(YEAR FROM init_date),
                EXTRACT(MONTH FROM init_date)
            ORDER BY 
                year ASC,
                month ASC;
            `
        );
        return result.rows
    } catch (error) {
        errorHandler(error)
    }
}
export const requestBySpace = async() => {
    try {
        const result = await pool.query(
            `
            SELECT 
            S.NAME AS ESPACIO,
            COUNT(ID_REQUEST) AS NoSolicitud
            FROM REQUEST AS R
            JOIN RATE AS RA
            ON FK_RATE = ID_RATE
            JOIN SPACE AS S
            ON FK_SPACE = ID_SPACE
            GROUP BY S.NAME;
            `
        );
        return result.rows
    } catch (error) {
        errorHandler(error)
    }
}
export const requestByDate = async() => {
    try {
        const result = await pool.query(
            `
            SELECT 
                EXTRACT(YEAR FROM init_date) AS year,
                EXTRACT(MONTH FROM init_date) AS month,
                COUNT(ID_REQUEST) AS NoSolicitud
            FROM REQUEST
            GROUP BY 
                EXTRACT(YEAR FROM init_date),
                EXTRACT(MONTH FROM init_date)
            ORDER BY 
                year ASC,
                month ASC;
            `
        );
        return result.rows
    } catch (error) {
        errorHandler(error)
    }
}