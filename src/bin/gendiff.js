#!/usr/bin/env node

import commander from 'commander';
import genDiff from '../index';

const run = () => {
  const program = new commander.Command();
  let pathToFirst; let pathToSecond; let formatter;
  program.version('0.0.1')
    .arguments('<pathToFirstFile> <pathToSecondFile> <formatter>')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'Output format')
    .action((first, second, format) => {
      pathToFirst = first;
      pathToSecond = second;
      formatter = format;
    })
    .parse(process.argv);
  const result = genDiff(pathToFirst, pathToSecond, formatter);
  console.log(result);
};

run();
