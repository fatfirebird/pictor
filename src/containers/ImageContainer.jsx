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

const ImageContainer = () => {
  const isImgLoaded = useSelector(state => state.isImgLoaded);
  const { isLoaded, file, url } = isImgLoaded
  const fileRef = useRef(null);
  const dispatch = useDispatch();

  const handleUpload = () => {
    const file = fileRef.current.files[0];
    dispatch(loadImg())
    return readFile(file)
  }

  const readFile = (file) => {
    const reader = new FileReader();
    console.log(file);
    reader.readAsDataURL(file)
    reader.onload = () => {
      dispatch(imgData(file, reader.result))
    }
  }

  return(
    <div>
      {!isLoaded
       ?
       <ImageWrapper>
       <Label>
        <img src = {`${LoadPic}`} width='50%' height='50%' alt='rfs'/>
        <p>Нажмите здесь, чтобы загрузить изображение в формате jpeg или png</p>
        <input type = 'file' ref = {fileRef} accept = '.jpg, .jpeg, .png' onChange = {handleUpload}/>
       </Label>
       </ImageWrapper>
       :
       <img src = {url} width = '100%' height = '100%'/>
      }
    </div>
  )
}

export default ImageContainer
