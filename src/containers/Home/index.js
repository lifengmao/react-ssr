import React, { Component , Fragment} from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getHomeList } from './store/action';
import styles from './style.css';
import withStyle from '../../withStyle';


class Home extends Component {
  constructor(props){
    super(props)
  }

  getList() {
    const { list } = this.props;
    return list.map(item => {
      return (
        <div className={styles.item} key={item.id}>{item.title}</div>
      )
    })
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>首页 -- 丰富多彩的咨询</title>
          <meta name="description"  content="ssr 丰富多彩的咨询"/>
        </Helmet>
        <div className={styles.test}>
           {
             this.getList()
           }
        </div>
      </Fragment>
      
    )
  }
 
  // 服务器端不执行
  componentDidMount() {
    if(!this.props.list.length){
      this.props.getHomeList()
    }
   
  }
}


const mapStateToProps = (state) => ({
  list: state.home.newsList
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
    
  }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home,styles));
ExportHome.loadData = (store) => {
  // 负责在服务器端渲染之前，提前加载路由数据
  
  return store.dispatch(getHomeList())
}

export default ExportHome;