import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  { actions } from './store/';
import styles from './style.css';
import withStyle from '../../withStyle';

class Header extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {login, handleLogin,handleLogout} = this.props
    return (
      <div className={styles.test}>
        <Link className={styles.item} to="/">首页</Link>
        {
          login ? <Fragment>
             <Link className={styles.item} to="/translation">翻译列表</Link>
              <div className={styles.item} onClick={handleLogout}>退出</div>
          </Fragment> : (
            <div
              className={styles.item}
              onClick={handleLogin}
            >
              登录
            </div>)
        }
        
        <br/>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.header.login
})

const mapDispathToProps = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  }
})

export default connect(mapStateToProps,mapDispathToProps)(withStyle(Header,styles));