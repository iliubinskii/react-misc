declare global {
  namespace facades {
    namespace lang {
      interface Context {
        readonly SampleContext: true;
      }

      interface Word {
        readonly SampleWord: true;
      }
    }
  }
}

export {};
