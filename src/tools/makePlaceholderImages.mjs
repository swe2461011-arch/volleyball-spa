// Бүтээгдэхүүн бүрт 2 ширхэг түр (placeholder) зураг үүсгэнэ: img/products/01_0001_001.svg, 01_0001_002.svg
// Жинхэнэ зургаа авбал ижил нэрээр (01_0001_001.jpg гэх мэт) img/products/ хавтсанд хийнэ.
import fs from "fs";
import path from "path";

const root = process.cwd();
const products = JSON.parse(fs.readFileSync(path.join(root, "src", "data", "products.json"), "utf8"));
const outDir = path.join(root, "src", "img", "products");
fs.mkdirSync(outDir, { recursive: true });

const palette = {
  Balls: ["#1e88e5", "#64b5f6"],
  Clothing: ["#fb8c00", "#ffcc80"],
  Shoes: ["#43a047", "#a5d6a7"],
  Protection: ["#e53935", "#ef9a9a"],
  Equipment: ["#5e35b1", "#b39ddb"],
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svg(product, n) {
  const [a, b] = palette[product.category] || ["#546e7a", "#90a4ae"];
  const [c1, c2] = n === 1 ? [a, b] : [b, a];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
  <rect width="800" height="500" fill="url(#g)"/>
  <circle cx="400" cy="170" r="70" fill="#fff" fill-opacity="0.25"/>
  <text x="400" y="290" font-family="Arial, sans-serif" font-size="38" font-weight="700" fill="#fff" text-anchor="middle">${esc(product.name_en)}</text>
  <text x="400" y="340" font-family="Arial, sans-serif" font-size="24" fill="#fff" fill-opacity="0.95" text-anchor="middle">${esc(product.category)} · ${esc(product.product_code)}_00${n}</text>
  <text x="400" y="460" font-family="Arial, sans-serif" font-size="18" fill="#fff" fill-opacity="0.85" text-anchor="middle">Placeholder image - replace with a real photo</text>
</svg>
`;
}

let count = 0;
for (const product of products) {
  for (const n of [1, 2]) {
    fs.writeFileSync(path.join(outDir, `${product.product_code}_00${n}.svg`), svg(product, n), "utf8");
    count++;
  }
}
console.log(`${count} placeholder images created in ${outDir}`);