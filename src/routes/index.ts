
import { appVersion } from "../config/constants";
import pingRoutes from "./ping";
import StudentRoutes from "./student.routes";
import AdminRoutes from "./admin.routes";

export default function initializeRoutes(app: { use: (arg0: string, arg1: any) => void }) {
  app.use(`/api/${appVersion}/ping`, pingRoutes);
  app.use(`/api/${appVersion}/student`, StudentRoutes);
  app.use(`/api/${appVersion}/admin`, AdminRoutes);
}