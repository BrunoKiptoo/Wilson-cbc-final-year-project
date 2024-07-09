"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = initializeRoutes;
const constants_1 = require("../config/constants");
const ping_1 = __importDefault(require("./ping"));
const student_routes_1 = __importDefault(require("./student.routes"));
const admin_routes_1 = __importDefault(require("./admin.routes"));
function initializeRoutes(app) {
    app.use(`/api/${constants_1.appVersion}/ping`, ping_1.default);
    app.use(`/api/${constants_1.appVersion}/student`, student_routes_1.default);
    app.use(`/api/${constants_1.appVersion}/admin`, admin_routes_1.default);
}
//# sourceMappingURL=index.js.map