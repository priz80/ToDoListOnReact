// scripts/copy-404.js
const fs = require('fs');
const path = require('path');

// Пути
const buildDir = path.resolve(__dirname, '../build');
const sourceFile = path.join(buildDir, 'index.html');
const destFile = path.join(buildDir, '404.html');

try {
  // Проверяем, существует ли build
  if (!fs.existsSync(buildDir)) {
    console.error('❌ Ошибка: папка "build" не найдена. Сначала выполните "npm run build"');
    process.exit(1);
  }

  // Копируем index.html → 404.html
  fs.copyFileSync(sourceFile, destFile);

  console.log('✅ Успешно: build/404.html создан');
} catch (err) {
  console.error('❌ Ошибка при копировании:', err.message);
  process.exit(1);
}