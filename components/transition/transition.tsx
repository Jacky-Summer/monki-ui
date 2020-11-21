import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName =
  | 'zoom-in-top'
  | 'zoom-in-left'
  | 'zoom-in-bottom'
  | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName
  wrapper?: boolean
  classNames?: string
}

const Transition: FC<TransitionProps> = ({
  classNames,
  animation,
  wrapper, // 方法被包裹元素设置了transition属性冲突，在外层加div不覆盖
  children,
  ...restProps
}) => (
  <CSSTransition classNames={classNames || animation} {...restProps}>
    {wrapper ? <div>children</div> : children}
  </CSSTransition>
)

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
  wrapper: false,
}

export default Transition
