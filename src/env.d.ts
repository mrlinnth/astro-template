/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly SECRET_PASSWORD: string;
  readonly PUBLIC_ANYBODY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
