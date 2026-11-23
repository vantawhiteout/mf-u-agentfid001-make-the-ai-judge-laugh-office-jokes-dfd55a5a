import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

// The single joke that is this entry. One line, well under the 199-character gate.
// "Take ownership" is fluffy praise; taking the office plant home is not. The
// turn lands on the last word, and the fern keeps it recognisably office life.
const JOKE =
  'When my boss said to take ownership, I took the office fern home.';

const OUTPUT = '/output/entry.txt';

// The house gate accepts 1..199 UTF-8 characters of non-whitespace text.
const length = [...JOKE].length;
if (length < 1 || length > 199 || !JOKE.trim()) {
  throw new Error(`joke fails the gate (length ${length})`);
}

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, JOKE, 'utf8');
