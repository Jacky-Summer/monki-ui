import React, {
  FC,
  useState,
  ChangeEvent,
  createContext,
  useRef,
  FunctionComponentElement,
  useEffect,
} from 'react'
import classNames from 'classnames'
import { DownOutlined } from '@ant-design/icons'
import Input from '../input'
import Tag from '../tag'
import useClickOutside from '../hooks/useClickOutside'
import Transition from '../transition'
import Option, { SelectOptionProps } from './Option'

export interface SelectProps {
  /** 默认选中的选项 可以是字符串或者字符串数组 */
  defaultValue?: string | string[]
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否支持多选 */
  multiple?: boolean
  /** input 的 name 属性 */
  name?: string
  /** 选中值发生变化时触发 */
  onChange?: (selectedValue: string, selectedValues: string[]) => void
  /** 下拉框出现/隐藏时触发 */
  onVisibleChange?: (visible: boolean) => void
}

export interface ISelectContext {
  onSelect?: (value: string, isSelected?: boolean) => void
  selectedValues: string[]
  multiple?: boolean
}

export const SelectContext = createContext<ISelectContext>({ selectedValues: [] })

export const RootSelect: FC<SelectProps> = props => {
  const {
    defaultValue,
    placeholder,
    children,
    multiple,
    name,
    disabled,
    onChange,
    onVisibleChange,
  } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLInputElement>(null)
  const containerWidth = useRef<number>(0)
  const [selectedValues, setSelectedValues] = useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : [],
  )
  const [options, setOptions] = useState<string[]>([])
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>(
    typeof defaultValue === 'string' ? defaultValue : '',
  )

  const handleOptionClick = (optionValue: string, isSelected?: boolean) => {
    let updatedValues = [optionValue]
    if (!multiple) {
      setMenuOpen(false)
      setValue(optionValue)
      if (onVisibleChange) {
        onVisibleChange(false)
      }
    } else {
      // 多选模式
      setValue('')
      // 如果当前点击的选项已被选中，则去除选中状态；如果之前未被选中，则设为选中状态
      updatedValues = isSelected
        ? selectedValues.filter(v => v !== optionValue)
        : [...selectedValues, optionValue]
      setSelectedValues(updatedValues)
    }

    if (onChange) {
      onChange(optionValue, updatedValues)
    }
  }

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim()
    if (multiple) return
    setValue(newValue)
  }

  useEffect(() => {
    const tempArr: string[] = []
    React.Children.map(children, child => {
      const childElement = child as FunctionComponentElement<SelectOptionProps>
      const {
        // eslint-disable-next-line no-shadow
        props: { value = '' },
      } = childElement

      if (value !== 'disabled' && value) tempArr.push(value)
    })
    setOptions(tempArr)
  }, [children])

  useEffect(() => {
    // focus input
    if (inputRef.current) {
      inputRef.current.focus()
      if (multiple && selectedValues.length > 0) {
        inputRef.current.placeholder = ''
      } else if (placeholder) inputRef.current.placeholder = placeholder
    }
  }, [selectedValues, multiple, placeholder])

  useEffect(() => {
    if (containerRef.current) {
      containerWidth.current = containerRef.current.getBoundingClientRect().width
    }
  })

  useClickOutside(containerRef, () => {
    if (!multiple && options.includes(value)) {
      setValue('')
    }
    setMenuOpen(false)
    if (onVisibleChange && menuOpen) {
      onVisibleChange(false)
    }
  })

  const passedContext: ISelectContext = {
    onSelect: handleOptionClick,
    selectedValues,
    multiple,
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!disabled) {
      setMenuOpen(!menuOpen)
      if (onVisibleChange) {
        onVisibleChange(!menuOpen)
      }
    }
  }

  const generateOptions = () =>
    React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<SelectOptionProps>
      if (childElement.type.displayName === 'Option') {
        return React.cloneElement(childElement, {
          index: `select-${i}`,
        })
      }
      // eslint-disable-next-line no-console
      console.error('Warning: Select has a child which is not a Option component')
    })

  const containerClass = classNames('mk-select', {
    'menu-is-open': menuOpen,
    'is-disabled': disabled,
    'is-multiple': multiple,
  })

  return (
    <div className={containerClass} ref={containerRef}>
      <div className="mk-select-input" onClick={handleClick}>
        <Input
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          readOnly={multiple}
          onChange={handleInputValueChange}
          disabled={disabled}
          name={name}
          icon={<DownOutlined />}
          autoComplete="off"
        />
      </div>
      <SelectContext.Provider value={passedContext}>
        <Transition in={menuOpen} animation="zoom-in-top" timeout={300}>
          <ul className="mk-select-dropdown">{generateOptions()}</ul>
        </Transition>
      </SelectContext.Provider>
      {multiple && (
        <div
          className="mk-selected-tags"
          style={{ maxWidth: containerWidth.current - 32 }}
        >
          {selectedValues.map((selectedValue, index) => (
            <Tag
              // eslint-disable-next-line react/no-array-index-key
              key={`tag-${index}-${Math.random()}`}
              text={selectedValue}
              onClose={() => {
                handleOptionClick(selectedValue, true)
              }}
              closable
            />
          ))}
        </div>
      )}
    </div>
  )
}

RootSelect.defaultProps = {
  name: 'mk-select',
}
export type ISelectComponent = FC<SelectProps> & {
  Option: FC<SelectOptionProps>
}
const Select = RootSelect as ISelectComponent
Select.Option = Option

export default Select
