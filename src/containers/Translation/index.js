import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { actions } from './store';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './style.css';
import withStyle from '../../withStyle';

class Translation extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    if(!this.props.list.length) {
      this.props.getList()
    }
    
  }
  render() {
    if(this.props.login){
      return (
        <Fragment>
          <Helmet>
            <title>翻译页面 --丰富多彩的咨询</title>
          </Helmet>
          <div className={styles.test}>
            {
              this.props.list.map(item => {
                return (
                  <div className={styles.item} key={item.id}>{item.title}</div>
                )
              })
            }
          </div>
        </Fragment>
        
      )
    }else {
      return <Redirect to='/'/>
    }
    
  }
};



const mapState = (state) => ({
  list: state.translation.translateList,
  login: state.header.login
})

const mapDispatch = (dispatch) => ({
  getList(){
    dispatch(actions.getTranslationList())
  }
})

const ExportTranslation = connect(mapState, mapDispatch)(withStyle(Translation,styles));
ExportTranslation.loadData = (store) => {
  return store.dispatch(actions.getTranslationList())
}
export default ExportTranslation;