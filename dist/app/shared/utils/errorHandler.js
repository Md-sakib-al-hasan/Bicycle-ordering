"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandeling = (error, res) => {
    res.status(500).json({
        message: (error === null || error === void 0 ? void 0 : error.message) || "Somethin is wrong",
        succed: false,
        error: error,
        stack: error.stack,
    });
};
exports.default = errorHandeling;
