import React, { useRef } from 'react'
import styled from 'styled-components'
import LoadPic from '../content/load_picture.svg'
import { useSelector, useDispatch } from 'react-redux'
import { ColumnFlex } from './PageContainer'
import { loadImg, imgData } from '../actions/index.js'
import Cookies from 'js-cookie'
import axios from 'axios'

const ImageWrapper = styled(ColumnFlex)`
  width: 100%;
  height: 100%;

  text-align: center;

  background-color: #080715f2;

  p {
    margin: 20px 0 0 0;
    padding: 0 50px;
  }
`

const Label = styled.label`
  cursor: pointer;

  input[type = 'file'] {
    display: none;
  }
`

const UploadedImg = styled.img`
  max-width: 300px;
  max-height: 300px;

  @media (min-width: 768px) {
    max-width: 700px;
    max-height: 400px;
  }

  @media (min-width: 1024px) {
    max-width: 900px;
    max-height: 300px;
  }
`

const ImageContainer = () => {
  const isImgLoaded = useSelector(state => state.isImgLoaded);
  const { isLoaded, url } = isImgLoaded;
  const fileRef = useRef(null);
  const dispatch = useDispatch();

  const handleUpload = () => {
    const file = fileRef.current.files[0];
    dispatch(loadImg());
    if (file) return sendImg(file);
  }

  // const readFile = file => {
  //   // const reader = new FileReader();
  //   // reader.readAsDataURL(file);
  //   // reader.onload = () => {
  //   //   dispatch(imgData(file, reader.result));
  //   // }
  //   return sendImg(file);
  // }

  const sendImg = file => {
    const token = Cookies.get('access');
    let form = new FormData();
    form.append('image', file);

    const config = {
        headers: {
          'authorization': `${token}`,
          'content-type': 'multipart/form-data'
        }
    }

    axios.post('http://localhost:8000/upload', form, config)
    .then(res => {
      const { dataUrl, fileName } = res.data;
      dispatch(imgData(dataUrl, fileName));
    })
    .catch(err => {
      console.log(err);
    })
  }

  const checkImg = () => {
    if (!isLoaded) return {height: '100vh'}
  }

  return(
    <ImageWrapper style = {checkImg()}>
    <form method="post" encType="multipart/form-data" onChange = {handleUpload}>
      <Label>
        {!isLoaded
          ?
          <div>
           <img src = {`${LoadPic}`} width='50%' height='50%' alt='Картинка'/>
           <p>Нажмите здесь, чтобы загрузить изображение в формате jpeg или png</p>
          </div>
          :
           <UploadedImg src = {url}/>
         }
       <input
         type = 'file'
         ref = {fileRef}
         name = 'img'
         accept = '.jpg, .jpeg, .png'
       />
      </Label>
    </form>
    </ImageWrapper>
  )
}

export default ImageContainer
