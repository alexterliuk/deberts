import {
  blueGrey,
  lightBlue,
  spacing as _spacing,
  spacingRect as _spacingRect,
} from './data';

export const baseColor = [
  ['--base-color-dark', blueGrey[8]],
  ['--base-color', blueGrey[7]],
  ['--base-color-light', blueGrey[6]],
  ['--base-color-pale', blueGrey[3]],
];

export const spacing = [
  ['--spacing-xs', _spacing.xs],
  ['--spacing-sm', _spacing.sm],
  ['--spacing-md', _spacing.md],
  ['--spacing-lg', _spacing.lg],
  ['--spacing-xl', _spacing.xl],
];

export const spacingRect = [
  ['--spacing-rect-xs', _spacingRect.xs],
  ['--spacing-rect-sm', _spacingRect.sm],
  ['--spacing-rect-md', _spacingRect.md],
  ['--spacing-rect-lg', _spacingRect.lg],
  ['--spacing-rect-xl', _spacingRect.xl],
];

export const mainBtnStyle = [
  ['--color-btn-main', lightBlue[8]],
  ['--color-btn-main-hover', lightBlue[7]],
  ['--color-btn-main-text', '#fff'],
];

export const switchLangBtnStyle = [
  ['--color-lang-btn', 'white'],
  ['--color-lang-btn-bg', blueGrey[5]],
  ['--color-lang-btn-bg-hover', 'black'],
  ['--color-lang-btn-bg-active', 'black'],
];
