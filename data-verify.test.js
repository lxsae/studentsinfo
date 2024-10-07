const fs = require ('fs');
const path = require ('path')

const dataDirectoryPath = path.join(__dirname, './public/data/');

console.log(dataDirectoryPath)

const folders = fs.readdirSync(dataDirectoryPath).filter(folder => {
    // Verifica que solo se incluyan directorios (excluye archivos)
    return fs.statSync(path.join(dataDirectoryPath, folder)).isDirectory();
  });

  describe('Verificando los elementos de cada archivo json', () => {
    folders.forEach((folder) => {
      const folderPath = path.join(dataDirectoryPath, folder);
  
      // Leer los archivos dentro de cada carpeta
      const files = fs.readdirSync(folderPath);
  
      files.forEach((file) => {
        if (file.endsWith('.json')) {
          const info = require(path.join(folderPath, file)); // Cargar el archivo JSON
  
          test(`Verificar contenido del campo Red Social en el archivo json de la carpeta ${folder}`, () => {
            // expect(info.nombre).toBeDefined();
            // expect(info.edad).toBeDefined();
            // expect(info.carrera).toBeDefined();
            // expect(info.semestre).toBeDefined();
            // expect(info.gustos).toBeDefined();
            // expect(info.noGustos).toBeDefined();
            // expect(info.foto).toBeDefined();
            expect(info.redsocial).toBeDefined();
          });
        }
      });
    });
  });
