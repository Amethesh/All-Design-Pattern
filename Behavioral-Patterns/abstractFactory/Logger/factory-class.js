"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerFactory = void 0;
require('dotenv').config();
class ProductionLogger {
    info(message) {
    }
    debug(message) {
    }
    warn(message) {
        console.warn(message);
    }
    error(message) {
        console.error(message);
    }
}
class DevelopmentLogger {
    info(message) {
        console.log(message);
    }
    debug(message) {
        console.debug(message);
    }
    warn(message) {
        console.warn(message);
    }
    error(message) {
        console.error(message);
    }
}
class LoggerFactory {
    static createLogger() {
        if (process.env.PRODUCTION === "production") {
            return new ProductionLogger();
        }
        else {
            return new DevelopmentLogger();
        }
    }
}
exports.LoggerFactory = LoggerFactory;
