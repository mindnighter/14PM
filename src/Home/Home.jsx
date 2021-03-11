import {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

import style from './Home.module.css';

import Single from '../Single/Single';
import {getPhotos, increaseStart, setPhoto, cleanPhotos} from './duckHome'

const Home = ({photos, getPhotos, limit, start, addMore, choosePhoto, clean}) =>{
  useEffect(()=>{
    getPhotos(limit, start);
  },[start])

  const handlerAdd = () => addMore(start);
  
  const handlerSingle = (e) => choosePhoto(photos[e.target.id-1]);

  const handlerClean = () => clean();
  
  if(photos.length){
    return <div>
      <BrowserRouter>
        <Switch>
          <Route path ="/single">
              <Single />
          </Route>
          <Route path = "/">
            <h1>All Photos</h1>
            <div className ={style.photos}>
              {photos.map(({id, title, thumbnailUrl}) =>
                <span onClick ={handlerClean} key ={id} > <Link to ="/single"><img id ={id} onClick ={handlerSingle} alt ={title} src ={thumbnailUrl} /></Link></span>
              )}
            </div>
            <div className ={style.load_wrap}><span className ={style.load} onClick ={handlerAdd}>Load more...</span></div>
          </Route>
      </Switch>
    </BrowserRouter>
    </div>
  } else{
    return <div>Loading...</div>
  }
}

const propTypes = {
  photos: PropTypes.array, 
  getPhotos: PropTypes.func, 
  limit: PropTypes.number,
  step: PropTypes.number,
  addMore: PropTypes.func,
  choosePhoto: PropTypes.func
}

Home.propTypes = propTypes;

const mapStateToProps = (state) => ({
  photos: state.home.photos,
  limit: state.home.limit,
  start: state.home.start
});

const mapDispatchToProps = (dispatch) =>({
  getPhotos: (limit, start) => fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`)
  .then(response => response.json())
  .then((data) => dispatch(getPhotos(data))),
  addMore: (start) => dispatch(increaseStart(start)),
  choosePhoto: (photo) => dispatch(setPhoto(photo)),
  clean: () => dispatch(cleanPhotos())
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);