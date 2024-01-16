"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_class_1 = require("./factory-class");
const logger = factory_class_1.LoggerFactory.createLogger();
logger.info("info message");
logger.warn("warn message");
logger.debug("debug message");
logger.error("error message");
