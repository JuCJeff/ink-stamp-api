import {InkStampApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {InkStampApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new InkStampApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
