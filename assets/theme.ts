import React from 'react';

/** 贝壳 2026 新 VI · 浅底白卡档（沿用此前 120s / 180s 工程同一套官方色卡）。 */
export const C = {
  ink: '#151515',
  gray: '#333333',
  white: '#FFFFFF',
  blue: '#06A4FF',
  blueDeep: '#0B74C7',
  blueSoft: '#E8F5FF',
  bluePale: '#F4FAFF',
  orange: '#F6A377',
  red: '#F24C70',
  green: '#22D3C2',
  gold: '#A88062',
  silver: '#B2B3B3',
  dim: '#66788C',
  line: 'rgba(6,164,255,0.20)',
  lineSoft: 'rgba(6,164,255,0.10)',
  card: '#FFFFFF',
  shadow: '0 18px 54px rgba(16,62,104,0.10)',
  // 兼容旧工程的键名（浅底语义）
  bg: '#F4FAFF',
  bg2: '#E8F5FF',
  panel: '#FFFFFF',
  panelSoft: 'rgba(255,255,255,0.86)',
  scrim: 'rgba(21,21,21,0.10)',
} as const;

/** 贝壳体三字重：Light 注释 / Regular 正文 / Bold 标题。 */
export const FONT = {
  cn: '"BEKE-Regular", "Microsoft YaHei", "PingFang SC", sans-serif',
  bold: '"BEKE-Bold", "Microsoft YaHei", sans-serif',
} as const;
export const weight = {light: 300, regular: 400, bold: 700} as const;

/** 旧场景层仍在用的字体别名（8 镜重写后只保留给通用件）。 */
export const F = {
  bold: '"BEKE-Bold", "Microsoft YaHei", sans-serif',
  reg: '"BEKE-Regular", "Microsoft YaHei", sans-serif',
  light: '"BEKE-Light", "Microsoft YaHei", sans-serif',
};

export const FONT_CSS = `
@font-face{font-family:"BEKE-Bold";src:url("__P__/fonts/BEKEType-Bold.otf") format("opentype");font-weight:700;font-display:block}
@font-face{font-family:"BEKE-Regular";src:url("__P__/fonts/BEKEType-Regular.otf") format("opentype");font-weight:400;font-display:block}
@font-face{font-family:"BEKE-Light";src:url("__P__/fonts/BEKEType-Light.otf") format("opentype");font-weight:300;font-display:block}
`;

/** 12 栏网格：短边 1/12 边距 = 90px；卡片流版式用 160 安全区。 */
export const GRID = {margin: 90, column: 120, content: 1440, safeTop: 96, safeBottom: 96};
export const W = 1920;
export const H = 1080;
export const SAFE = 160;
export const SUB_BOTTOM = 42;

export const cardStyle: React.CSSProperties = {
  background: C.card,
  borderRadius: 28,
  border: `1px solid ${C.line}`,
  boxShadow: C.shadow,
};

export const gridBg: React.CSSProperties = {
  backgroundImage:
    `linear-gradient(${C.line} 1px, transparent 1px),` +
    `linear-gradient(90deg, ${C.line} 1px, transparent 1px)`,
  backgroundSize: '160px 160px',
  opacity: 0.45,
};
