export type HorizontalPosition = 'left' | 'right' | 'center';
export type VerticalPosition = 'top' | 'bottom';
export type ToastMode = 'override' | 'queue';

export interface ToastOptions {
  /**
   * Unique identifier globally. Use this to create multiple toasts with different setups.
   */
  id?: string;

  /**
   * Selector of the container.
   */
  parent?: string;

  /**
   * Self-defined class names to pass through. There are 3 pre-defined classes: et-info, et-warn,et-alert, to toast with different background color.
   */
  className?: string | string[];

  /**
   * Position horizontal of toast. There are 3 pre-defined positions: left, right and center
   */
  horizontalPosition?: HorizontalPosition;

  /**
   * Position vertical of toast. There are 2 pre-defined positions: top and bottom
   */
  verticalPosition?: VerticalPosition;

  /**
   * The duration one toast will last, in milliseconds
   */
  duration?: number;

  /**
   * If override, the last toast will forcibly flush previous toasts, otherwise it is queued after others
   */
  mode?: ToastMode;

  /**
   * Built-in transitions: fade, slide-[up/down/left/right]. See also Transitions
   */
  transition?: string;
}
