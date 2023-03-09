function completeAssign(target, ...sources) {
  const o = Object.assign(target, ...sources);
  for (const source of sources) {
    if (source) {
      const descriptors = Object.getOwnPropertyDescriptors(source);
      for (const prop in descriptors) {
        Object.defineProperty(o, prop, descriptors[prop]);
      }
      const symbols = Object.getOwnPropertySymbols(source);
      for (const sym of symbols) {
        Object.defineProperty(o, sym, Object.getOwnPropertyDescriptor(source, sym));
      }
    }
  }
  return o;
}
