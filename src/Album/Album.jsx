import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getAlbumPhotos} from './duckAlbum';
import style from './Album.module.css';

const Album = ({albumPhotos, getAlbumPhotos, album}) =>{
    if(albumPhotos){
        return <div>
            <div className ={style.info}>
                <h2>{album.title}</h2>
                <div>{album.user.name} - {album.user.email}</div>
            </div>
            
            <div className={style.photos}>{albumPhotos.map(({id, title, thumbnailUrl}) =>
                    <span key ={id} ><img id ={id} alt ={title} src ={thumbnailUrl} /></span>
                )}
              </div>
        </div>
    } else{
        getAlbumPhotos(album.id);
        return <div>Album</div>
    }
}

const propTypes = {
    albumPhotos: PropTypes.array,
    album: PropTypes.object,
    getAlbumPhotos: PropTypes.func
}
  
Album.propTypes = propTypes;

const mapStateToProps = (state) => ({
    albumPhotos: state.album.albumPhotos,
    album: state.single.album
});

const mapDispatchToProps = (dispatch) =>({
    getAlbumPhotos: (id) => fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    .then(response => response.json())
    .then((data) => dispatch(getAlbumPhotos(data)))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Album);