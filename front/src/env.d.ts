interface ImportMetaEnv {
  readonly VITE_MOCK_MODE: boolean
  readonly VITE_SOME_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
