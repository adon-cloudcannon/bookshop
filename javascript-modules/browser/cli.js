#! /usr/bin/env node

import { Command } from "commander";
import { runner } from "./main.js";

const program = new Command();

async function run() {
    program.requiredOption("-b, --bookshop <paths...>", "Paths to bookshops (space seperated)");
    program.option("-o, --output <filename>", "Output JS to given filename");
    program.option("-p, --port <number>", "Host bookshop browser server on a local port");
    program.option("--exclude <tags...>", "Component tags to exclude (space seperated)");
    program.option("--only-engines <engines...>", "Only load the specified engines");
    program.parse(process.argv);
    const options = program.opts();
    await runner(options);
}

run();