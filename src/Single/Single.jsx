import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

import style from './Single.module.css';
import {getAlbum} from './duckSingle'
import Album from '../Album/Album'

const Single = ({photo,album,getAlbum}) =>{
    useEffect(()=>{
        getAlbum(photo.albumId);
      },[photo])
      
        const {title, url} = photo;
        return(
            <BrowserRouter>
                <Switch>
                    <Route path ="/album">
                        <Album />
                    </Route>
                    <Route path = "/single">
                        <div className ={style.wrap}>
                            <img alt ={title} src ={url} />
                            <span>
                                <p>{title}</p>
                                <Link to ="/album"><p>{album && album.title}</p></Link>
                            </span>
                        </div>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
}

const propTypes = {
    photo: PropTypes.object,
    album: PropTypes.object
}
  
Single.propTypes = propTypes;

const mapStateToProps = (state) => ({
    photo: state.home.singlePhoto,
    album: state.single.album
});

const mapDispatchToProps = (dispatch) =>({
    getAlbum: (id) => fetch(`https://jsonplaceholder.typicode.com/albums/${id}?_expand=user`)
    .then(response => response.json())
    .then((data) => dispatch(getAlbum(data))),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Single);