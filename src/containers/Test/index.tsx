import Test2 from '@/components/Test/Test2'
import { connect } from 'react-redux'
import { createAddAction, createMinusAction } from '@/redux/actions/test-action'

export default connect(
  (state: number) => ({ count: state }),
  {
    add: createAddAction,
    minus: createMinusAction
  }
)(Test2)
