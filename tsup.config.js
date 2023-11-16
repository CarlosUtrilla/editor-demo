export default {
  entryPoints: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
	clean: true,
  external: ['react', 'react-dom'], // Lista de dependencias que no deben incluirse en el paquete
};