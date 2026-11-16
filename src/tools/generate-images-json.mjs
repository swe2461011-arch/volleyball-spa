// img/products/ хавтас дахь зургуудыг уншаад data/images.json үүсгэнэ.
// Файлын нэр: <product_code>_<дугаар>.<өргөтгөл>   жишээ нь: 01_0001_001.jpg
// Үр дүн: { "01_0001": ["img/products/01_0001_001.jpg", ...], ... }
import fs from "fs";
import path from "path";

const projectRoot = process.cwd();
const imageDir = path.join(projectRoot, "src", "img", "products");
const outputDir = path.join(projectRoot, "src", "data");
const outputFile = path.join(outputDir, "images.json");

function isImageFile(fileName) {
  return /\.(jpg|jpeg|png|webp|svg)$/i.test(fileName);
}

function extractProductCode(fileName) {
  // 01_0001_001.jpg -> 01_0001
  const match = fileName.match(/^(\d{2}_\d{4})_\d{3}\.(jpg|jpeg|png|webp|svg)$/i);
  return match ? match[1] : null;
}

function buildImageMap(files) {
  const imageMap = {};

  for (const file of files) {
    const productCode = extractProductCode(file);
    if (!productCode) continue;

    (imageMap[productCode] ??= []).push(`img/products/${file}`);
  }

  for (const code of Object.keys(imageMap)) {
    imageMap[code].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  }

  return imageMap;
}

fs.mkdirSync(outputDir, { recursive: true });

if (!fs.existsSync(imageDir)) {
  console.error(`Image folder not found: ${imageDir}`);
  process.exit(1);
}

const files = fs.readdirSync(imageDir).filter(isImageFile);
const imageMap = buildImageMap(files);

fs.writeFileSync(outputFile, JSON.stringify(imageMap, null, 2), "utf8");
console.log(`images.json created: ${Object.keys(imageMap).length} products, ${files.length} files`);