import mongoose, { Document, Schema } from "mongoose";

interface Assessment {
  formative?: string;
  summative?: string;
}

interface Competencies {
  communicationAndCollaboration?: { score?: number; teacher?: string };
  criticalThinkingAndProblemSolving?: { score?: number; teacher?: string };
  imaginationAndCreativity?: { score?: number; teacher?: string };
  citizenship?: { score?: number; teacher?: string };
  learningToLearn?: { score?: number; teacher?: string };
  selfEfficacy?: { score?: number; teacher?: string };
  digitalLiteracy?: { score?: number; teacher?: string };
}

interface Parent {
  name?: string;
  phoneNumber?: string;
}

export interface StudentDocument extends Document {
  firstName?: string;
  lastName?: string;
  grade?: string;
  classTeacher?: string;
  assessments?: Assessment[];
  competencies?: Competencies;
  parents?: Parent[];
}

const assessmentSchema = new Schema<Assessment>({
  formative: { type: String },
  summative: { type: String },
});

const competenciesSchema = new Schema<Competencies>({
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

const parentSchema = new Schema<Parent>({
  name: { type: String },
  phoneNumber: { type: String },
});

const studentSchema = new Schema<StudentDocument>({
  firstName: { type: String },
  lastName: { type: String },
  grade: { type: String },
  classTeacher: { type: String },
  assessments: { type: [assessmentSchema] },
  competencies: { type: competenciesSchema },
  parents: { type: [parentSchema] },
});

const Student = mongoose.model<StudentDocument>("Student", studentSchema);

export default Student;
