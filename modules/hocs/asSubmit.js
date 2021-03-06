/* @flow */
import PropTypes from 'prop-types'
import { getContext } from 'recompose'

export default function asSubmit(component: any): any {
  return getContext({
    submitForm: PropTypes.func,
    isFormValid: PropTypes.bool
  })(component)
}
