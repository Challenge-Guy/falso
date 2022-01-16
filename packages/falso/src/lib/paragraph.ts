import { FakeOptions, fake } from './core/core';
import { data } from './paragraph.json';

// TODO - generate programmatically
export function randParagraph<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
