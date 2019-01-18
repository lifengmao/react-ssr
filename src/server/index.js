import express from 'express';
import proxy from 'express-http-proxy';
import { render } from './utils'
import { getStore } from '../store';
import { matchRoutes } from 'react-router-config';
import routes from '../Routes';


const app = express()
app.use(express.static('public'));


app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function(req) {
    return '/ssr/api' + req.url;
  }
}))


app.get('*', function(req, res) {
  const store = getStore(req)
  const matchedRoutes = matchRoutes(routes, req.path);
  
  // 根据路由的路径，往store里面加数据

  // 让machedRoutes里面所有的组件，对应的loaddata方法执行一次
  const promises = [];

  matchedRoutes.forEach(item => {
    
    if(item.route.loadData){
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  })

  Promise.all(promises)
    .then(() => {
      const context = {
        css: []
      };
      const html = render(req,store,routes,context);
      console.log(context.css)
      if(context.notFound){
        res.status(404);
        res.send(html);
      }
      else if(context.action === 'REPLACE'){
        //重定向
        res.redirect(301,context.url)
      }
      else{
        res.send(html);
      }
    
    })
      
});

var server = app.listen(3000, function() {
  var port = server.address().port;

  console.log('Example app listening at '+ port);
})