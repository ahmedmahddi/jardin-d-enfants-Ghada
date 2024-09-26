const cron = require("node-cron");
const { createAndSendInvoice } = require("../services/invoice.service.js");
const { getAllChildren } = require("../services/child.service.js");

cron.schedule("0 0 1 * *", async () => {
  const children = await getAllChildren();
  for (const child of children) {
    await createAndSendInvoice(child.id, child.parentId, 200.0);
  }
});
