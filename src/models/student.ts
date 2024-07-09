import mongoose, { Document, Schema } from 'mongoose';

interface Assessment {
    formative: string;
    summative: string;
}

interface Competencies {
    communicationAndCollaboration: { score: number, teacher: string };
    criticalThinkingAndProblemSolving: { score: number, teacher: string };
    imaginationAndCreativity: { score: number, teacher: string };
    citizenship: { score: number, teacher: string };
    learningToLearn: { score: number, teacher: string };
    selfEfficacy: { score: number, teacher: string };
    digitalLiteracy: { score: number, teacher: string };
}

interface Parent {
    name: string;
    phoneNumber: string;
}

export interface StudentDocument extends Document {
    firstName: string;
    lastName: string;
    grade: string;
    classTeacher: string;
    assessments: Assessment[];
    competencies: Competencies;
    parents: Parent[];
}

const assessmentSchema = new Schema<Assessment>({
    formative: { type: String, required: true },
    summative: { type: String, required: true },
});

const competenciesSchema = new Schema<Competencies>({
    communicationAndCollaboration: { score: { type: Number, required: true }, teacher: { type: String, required: true } },
    criticalThinkingAndProblemSolving: { score: { type: Number, required: true }, teacher: { type: String, required: true } },
    imaginationAndCreativity: { score: { type: Number, required: true }, teacher: { type: String, required: true } },
    citizenship: { score: { type: Number, required: true }, teacher: { type: String, required: true } },
    learningToLearn: { score: { type: Number, required: true }, teacher: { type: String, required: true } },
    selfEfficacy: { score: { type: Number, required: true }, teacher: { type: String, required: true } },
    digitalLiteracy: { score: { type: Number, required: true }, teacher: { type: String, required: true } },
});

const parentSchema = new Schema<Parent>({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
});

const studentSchema = new Schema<StudentDocument>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    grade: { type: String, required: true },
    classTeacher: { type: String, required: true },
    assessments: { type: [assessmentSchema], required: true },
    competencies: { type: competenciesSchema, required: true },
    parents: { type: [parentSchema], required: true },
});



const Student = mongoose.model<StudentDocument>('Student', studentSchema);

export default Student;
