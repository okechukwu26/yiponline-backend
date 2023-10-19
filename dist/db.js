"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DATABASE = async () => {
    try {
        const connect = await mongoose_1.default.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env
            .MONGODB_PASSWORD}@cluster0.d8bojru.mongodb.net/${process.env.MONGODB_DATABASE_NAME}`);
        console.log(`database has been connected successfully to ${JSON.stringify(connect.connection.host)}`);
    }
    catch (error) {
        console.error(`Mongodb connection error ${JSON.stringify(error)}`);
        process.exit(1);
    }
};
exports.DATABASE = DATABASE;
