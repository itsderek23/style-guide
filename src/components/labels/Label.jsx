// @flow strict

import React from 'react';
import classNames from 'classnames';
import Text from '../text/Text';
import {default as Icon, TYPE as ICON_TYPE} from '../icons/Icon';

// for uxpin merge
export type IconTypeType =
  | 'academic_cap'
  | 'all_questions'
  | 'answer'
  | 'arrow_double_down'
  | 'arrow_down'
  | 'arrow_left'
  | 'arrow_right'
  | 'arrow_up'
  | 'ask_parent_to_pay'
  | 'attachment'
  | 'bell_checked'
  | 'bell_outlined'
  | 'bold'
  | 'bulleted_list'
  | 'calendar'
  | 'camera'
  | 'check'
  | 'clipboard'
  | 'close'
  | 'comment'
  | 'comment_outlined'
  | 'counter'
  | 'credit_card'
  | 'crown_outlined'
  | 'equation'
  | 'excellent'
  | 'exclamation_mark'
  | 'facebook'
  | 'friend_add'
  | 'friend_remove'
  | 'friend_pending'
  | 'friend_checked'
  | 'friends'
  | 'fullscreen'
  | 'heading'
  | 'heart'
  | 'heart_outlined'
  | 'image'
  | 'influence'
  | 'instagram'
  | 'italic'
  | 'less'
  | 'linkedin'
  | 'lock_with_play'
  | 'logout'
  | 'medium'
  | 'menu'
  | 'messages'
  | 'mic'
  | 'money_transfer'
  | 'add_more'
  | 'notifications'
  | 'numbered_list'
  | 'open_in_new_tab'
  | 'padlock'
  | 'pencil'
  | 'play'
  | 'plus'
  | 'points'
  | 'profile'
  | 'profile_view'
  | 'question'
  | 'recent_questions'
  | 'reload'
  | 'report_flag'
  | 'report_flag_outlined'
  | 'rotate'
  | 'rotate_90'
  | 'search'
  | 'seen'
  | 'settings'
  | 'share'
  | 'sms'
  | 'star'
  | 'star_half'
  | 'star_half_outlined'
  | 'star_outlined'
  | 'subtitle'
  | 'symbols'
  | 'title'
  | 'toughest_questions'
  | 'trash'
  | 'twitter'
  | 'underlined'
  | 'unseen'
  | 'verified'
  | 'warning'
  | 'youtube'
  | 'arrow_top_right'
  | 'circle'
  | 'crop'
  | 'cyrillic'
  | 'draw'
  | 'drawing_mode'
  | 'european'
  | 'greek'
  | 'highlight'
  | 'line'
  | 'more'
  | 'pause'
  | 'rectangle'
  | 'sup_sub'
  | 'triangle'
  | 'pi'
  | 'quote'
  | 'spark';

export type LabelColorType =
  | 'blue'
  | 'mint'
  | 'lavender'
  | 'peach'
  | 'mustard'
  | 'gray';

export type LabelType =
  | 'default'
  | 'solid'
  | 'transparent'
  | 'transparent-color';

export const LABEL_TYPE = {
  DEFAULT: 'default',
  SOLID: 'solid',
  TRANSPARENT: 'transparent',
  TRANSPARENT_COLOR: 'transparent-color',
};

export const COLORS_SOLID_MAP = {
  blue: 'blue-primary',
  mint: 'mint-primary',
  lavender: 'lavender-primary',
  peach: 'peach-primary',
  mustard: 'mustard-primary',
  gray: 'gray-secondary',
  default: 'black',
};

export const COLORS_DEFAULT_MAP = {
  blue: 'blue-secondary-light',
  mint: 'mint-secondary-light',
  lavender: 'lavender-secondary-light',
  peach: 'peach-secondary-light',
  mustard: 'mustard-secondary-light',
  gray: 'gray-secondary-light',
  default: 'white',
};

const TRANSPARENT_COLOR_TEXT_MAP = {
  blue: 'blue-dark',
  mint: 'mint-dark',
  lavender: 'lavender-dark',
  peach: 'peach-dark',
  mustard: 'mustard-dark',
  gray: 'gray-secondary',
  default: 'default',
};

const TRANSPARENT_ICON_COLOR_MAP = {
  blue: 'blue',
  mint: 'mint',
  lavender: 'lavender',
  peach: 'peach',
  mustard: 'mustard',
  gray: 'gray-secondary',
  default: 'dark',
};

export const LABEL_COLORS_SET = {
  BLUE: 'blue',
  MINT: 'mint',
  LAVENDER: 'lavender',
  PEACH: 'peach',
  MUSTARD: 'mustard',
  GRAY: 'gray',
};

type PropsType = $ReadOnly<{
  /**
   * Specify type of label
   * @example <Label
   *           type="default"
   *           color="blue"
   *          >
   *            example label
   *          </Label>
   * @see type="default" https://styleguide.brainly.com/latest/docs/interactive.html?type="default"#labels
   * @see type="solid" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid"#labels
   * @see type="transparent" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent"#labels
   * @see type="transparent-color" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-color"#labels
   */
  type?: LabelType,
  /**
   * Specify color for label
   * @example <Label
   *           type="default"
   *           color="blue"
   *          >
   *            example label
   *          </Label>
   * @see color="blue" https://styleguide.brainly.com/latest/docs/interactive.html?color="blue"#labels
   * @see color="mint" https://styleguide.brainly.com/latest/docs/interactive.html?color="mint"#labels
   * @see color="lavender" https://styleguide.brainly.com/latest/docs/interactive.html?color="lavender"#labels
   * @see color="peach" https://styleguide.brainly.com/latest/docs/interactive.html?color="peach"#labels
   * @see color="mustard" https://styleguide.brainly.com/latest/docs/interactive.html?color="mustard"#labels
   * @see color="gray" https://styleguide.brainly.com/latest/docs/interactive.html?color="gray"#labels
   */
  color?: LabelColorType,
  /**
   * Icons types example, see more in SG interactive
   * @example <Label
   *           type="default"
   *           color="blue"
   *           iconType="heart"
   *          >
   *            example label
   *          </Label>
   * @see type="iconType" https://styleguide.brainly.com/latest/docs/interactive.html?iconType=heart#labels
   */
  iconType?: IconTypeType,
  /**
   * Callback, called by clicking on **close** button. If specified, button will be added automatically
   * @example <Label
   *           type="default"
   *           color="blue"
   *           iconType="heart"
   *           onClose={() => doSomething()}
   *          >
   *            example label
   *          </Label>
   */
  onClose?: ?(SyntheticInputEvent<HTMLDivElement>) => mixed,
  /**
   * Children to be rendered inside Label
   * @example <Label
   *           type="default"
   *           color="blue"
   *          >
   *            example label
   *          </Label>
   */
  children: React$Node,
  /**
   * Additional class names
   */
  className?: string,
  ...
}>;

const Label = ({
  children,
  type = 'default',
  iconType,
  onClose,
  color = 'default',
  className,
  ...props
}: PropsType) => {
  const backgroundColor =
    type === 'default' ? COLORS_DEFAULT_MAP[color] : COLORS_SOLID_MAP[color];

  const labelClass = classNames(
    'sg-label',
    {
      [`sg-label--${String(backgroundColor)}`]:
        type === 'solid' || type === 'default',
      [`sg-label--${type}`]: type,
      'sg-label--closable': onClose,
    },
    className
  );

  const textColor =
    type === 'default' || type === 'transparent'
      ? 'default'
      : type === 'solid'
      ? 'white'
      : TRANSPARENT_COLOR_TEXT_MAP[color];

  const iconColor =
    type === 'default'
      ? 'dark'
      : type === 'solid'
      ? 'light'
      : TRANSPARENT_ICON_COLOR_MAP[color];

  const closeIconColor =
    type === 'default' || type === 'transparent'
      ? 'dark'
      : type === 'solid'
      ? 'light'
      : TRANSPARENT_ICON_COLOR_MAP[color];

  return (
    <div {...props} className={labelClass}>
      {iconType && (
        <div className="sg-label__icon">
          <Icon type={iconType} color={iconColor} size={16} />
        </div>
      )}
      <span className="sg-label__text">
        <Text size="small" weight="bold" color={textColor}>
          {children}
        </Text>
      </span>
      {onClose ? (
        <button className="sg-label__close-button" onClick={onClose}>
          <Icon type="close" color={closeIconColor} size={16} />
        </button>
      ) : null}
    </div>
  );
};

export default Label;
export {ICON_TYPE};
