import { FakeOptions, fake } from './core/core';
import { data } from './slug.json';

// TODO - generate programmatically
export function randSlug<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
