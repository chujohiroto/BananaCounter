import React from 'react'
import Button from '@material-ui/core/Button'
import { Addbanana, Clearbanana } from './action';
import {connect} from 'react-redux'

const Counter = props => {
  const {count = 0 ,Addbanana ,Clearbanana} = props

  return (
    <React.Fragment>
      <span>{count + "個のバナナがあるよ　ははっ"}</span>
      <div>
      <Button onClick={Addbanana} variant="contained">
        バナナを増やす
      </Button>
      <Button onClick={Clearbanana}>バナナを消滅させる</Button>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return{
    count : state.count
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    Addbanana: () =>dispatch(Addbanana()),
    Clearbanana: () => dispatch(Clearbanana())
  }
}

const Connected = connect(mapStateToProps,mapDispatchToProps)(Counter)

export default Connected;
