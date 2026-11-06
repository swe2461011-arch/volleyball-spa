import { CONFIG } from "../config.js";

export function formatPrice(value) {
  if (value == null || Number.isNaN(Number(value))) return "-";
  return `${Number(value).toLocaleString("mn-MN")} ${CONFIG.currency}`;
}

export function safeValue(value, fallback = "-") {
  if (value === null || value === undefined || value === "") return fallback;
  return value;
}