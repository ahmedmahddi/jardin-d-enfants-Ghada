import cron from "node-cron";
import { createAndSendInvoice } from "../services/invoice.service.js";
import { getAllChildren } from "../services/child.service.js";

cron.schedule("0 0 1 * *", async () => {
  const children = await getAllChildren();
  for (const child of children) {
    await createAndSendInvoice(child.id, child.parentId, 200.0);
  }
});
