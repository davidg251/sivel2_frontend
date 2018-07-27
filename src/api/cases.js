/**
 * Mocking client-server processing
 */
import cases from './index.json'

const TIMEOUT = 100

export default {
  getCases: (cb, timeout) => setTimeout(() => cb(cases), timeout || TIMEOUT),
}