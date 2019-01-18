import { CHANGE_TRANSLATION_LIST } from './constants';

const changeList = (list) => ({
  type: CHANGE_TRANSLATION_LIST,
  list
})

export const getTranslationList = () => {
  //http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/translations.json')
      .then(res => {
        if(res.data.success){
          const list = res.data.data;
          dispatch(changeList(list))
        }else {
          dispatch(changeList([]))
        }
        
      })
  }
}