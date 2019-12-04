#!/usr/bin/env node

import commander from 'commander';

const run = () => {
    const program = new commander.Command();
    program.version('0.0.1')
        .arguments('<firstConfig> <secondConfig>')
        .description('Compares two configuration files and shows a difference.')
        .parse(process.argv);

    return program;
};

run();