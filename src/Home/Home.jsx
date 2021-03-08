import './index.css';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getPhotos} from '../store/store'

const Home = ({photos, get}) =>{

useEffect(()=>{
  getData();
})

const getData = () =>{
  fetch('https://jsonplaceholder.typicode.com/photos?_offset=0&_limit=6')
  .then(response => response.json())
  .then((data) => get(data));
} 

console.log(photos);

  if(photos){
    return <div>
      {photos.map(({id, title, thumbnailUrl}) =>
        <img key ={id} alt ={title} src ={thumbnailUrl} ></img>
      )}
    </div>
  } else{
    return <div>Loading...</div>
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos
});

const mapDispatchToProps = (dispatch) =>({
  get: (data) => dispatch(getPhotos(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home);


