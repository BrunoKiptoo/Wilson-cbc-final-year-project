"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const assessmentSchema = new mongoose_1.Schema({
    formative: { type: String },
    summative: { type: String },
});
const competenciesSchema = new mongoose_1.Schema({
    communicationAndCollaboration: {
        score: { type: Number },
        teacher: { type: String },
    },
    criticalThinkingAndProblemSolving: {
        score: { type: Number },
        teacher: { type: String },
    },
    imaginationAndCreativity: {
        score: { type: Number },
        teacher: { type: String },
    },
    citizenship: {
        score: { type: Number },
        teacher: { type: String },
    },
    learningToLearn: {
        score: { type: Number },
        teacher: { type: String },
    },
    selfEfficacy: {
        score: { type: Number },
        teacher: { type: String },
    },
    digitalLiteracy: {
        score: { type: Number },
        teacher: { type: String },
    },
});
const parentSchema = new mongoose_1.Schema({
    name: { type: String },
    phoneNumber: { type: String },
});
const studentSchema = new mongoose_1.Schema({
    firstName: { type: String },
    lastName: { type: String },
    grade: { type: String },
    classTeacher: { type: String },
    assessments: { type: [assessmentSchema] },
    competencies: { type: competenciesSchema },
    parents: { type: [parentSchema] },
});
const Student = mongoose_1.default.model("Student", studentSchema);
exports.default = Student;
//# sourceMappingURL=student.js.map