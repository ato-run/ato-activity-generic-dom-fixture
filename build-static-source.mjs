import { mkdir, rm, writeFile } from "node:fs/promises";

import { pageWithoutBrowserBridge, server } from "./server.mjs";

server.close();
await rm("dist-static", { force: true, recursive: true });
await mkdir("dist-static", { recursive: true });
await writeFile("dist-static/index.html", pageWithoutBrowserBridge);
