import Home from './containers/Home';
import Translation from './containers/Translation';
import NotFound from './containers/Notfound';
import App from './App'

// export default (
//   <div>
//     <Route path="/" exact component={Home}></Route>
//     <Route path="/login" exact component={Login}></Route>
//   </div>
// )

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    key: 'App',
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home'
      },
      {
        path: '/translation',
        component: Translation,
        exact: true,
        loadData: Translation.loadData,
        key: 'Translation'
      },
      {
        component: NotFound,
        key: 'NotFound'
      }
    ]
  }
]





