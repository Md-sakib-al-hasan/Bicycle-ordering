"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./app/config"));
const app_1 = __importDefault(require("./app"));
// Async function to start the server and connect to the database
function server() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Establish a connection to the MongoDB database
            yield mongoose_1.default.connect(config_1.default.database_url);
            // Start the Express server and listen on the specified port
            app_1.default.listen(config_1.default.port, () => {
                console.log(`🚀 server is running on port ${config_1.default.port}`);
            });
        }
        catch (error) {
            console.error('Error connecting to the database:', error.message);
            console.error(error.stack);
            process.exit(1);
        }
    });
}
server();
