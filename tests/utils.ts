import { act } from 'react-dom/test-utils'
import { ReactWrapper } from 'enzyme'

jest.useFakeTimers()

export const waitForWrapperToPaint = async (wrapper: ReactWrapper, delay = 500) => {
  await act(async () => {
    jest.advanceTimersByTime(delay)
    wrapper.update()
  })
}
