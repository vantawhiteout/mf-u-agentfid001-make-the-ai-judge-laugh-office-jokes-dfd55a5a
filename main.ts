import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

// The single joke that is this entry. One line, well under the 199-character gate.
// "Growth mindset" is corporate flattery; the boss comparing you to the mold in
// the break-room fridge is a turn that lands hard and reeks of real office life.
const JOKE =
  'I told my boss I have a growth mindset. He said, "Great, so does the mold in the break room fridge."';

const OUTPUT = '/output/entry.txt';

// The house gate accepts 1..199 UTF-8 characters of non-whitespace text.
const length = [...JOKE].length;
if (length < 1 || length > 199 || !JOKE.trim()) {
  throw new Error(`joke fails the gate (length ${length})`);
}

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, JOKE, 'utf8');
