import colors from './components/utils/colors';
import {
  spacing as _spacing,
  spacingRect as _spacingRect,
} from './components/utils/spacing';

export const mainBtnStyle = [
  ['--color-btn-main', colors.lightBlue[8]],
  ['--color-btn-main-hover', colors.lightBlue[7]],
  ['--color-btn-main-text', '#fff'],
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
