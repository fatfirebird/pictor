import React, { useRef } from 'react'
import styled from 'styled-components'
import LoadPic from '../content/load_picture.svg'
import { useSelector, useDispatch } from 'react-redux'
import { ColumnFlex } from './PageContainer'
import { loadImg, imgData } from '../actions/index.js'
import cat from '../content/cat.jpg'

const ImageWrapper = styled(ColumnFlex)`
  width: 100%;
  height: 100%;

  text-align: center;

  background-color: #080715f2;

  p {
    margin: 20px 0 0 0;
    padding: 0 50px;
  }

  @media (min-width: 1024px) {
    grid-area: pic;
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
    max-width: 500px;
    max-height: 500px;
  }

  @media (min-width: 1024px) {
    max-width: 600px;
    max-height: 600px;
  }
`

const ImageContainer = () => {
  const isImgLoaded = useSelector(state => state.isImgLoaded);
  const { isLoaded, file, url } = isImgLoaded
  const fileRef = useRef(null);
  const dispatch = useDispatch();

  const handleUpload = () => {
    const file = fileRef.current.files[0];
    dispatch(loadImg())
    if (file) {
      return readFile(file)
    }
  }

  const readFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      dispatch(imgData(file, reader.result))
    }
  }

  return(
      <ImageWrapper>
       <Label>
         {!isLoaded
           ?
           <div>
            <img src = {`${LoadPic}`} width='50%' height='50%' alt='rfs'/>
            <p>Нажмите здесь, чтобы загрузить изображение в формате jpeg или png</p>
           </div>
           :
            <UploadedImg src = {url}/>
          }
        <input
          type = 'file'
          ref = {fileRef}
          accept = '.jpg, .jpeg, .png'
          onChange = {handleUpload}
        />
       </Label>
      </ImageWrapper>
  )
}

export default ImageContainer
