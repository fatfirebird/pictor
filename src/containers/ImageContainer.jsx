import React from 'react'
import styled from 'styled-components'
import LoadPic from '../content/load_picture.svg'
import { useSelector } from 'react-redux'
import { ColumnFlex } from './PageContainer'
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

const ImageContainer = () => {
  const isImgLoaded = useSelector(state => state.isImgLoaded);

  return(
    <div style ={{  cursor: 'pointer' }} onClick={()=>{console.log(123)}}>
      {!isImgLoaded
       ?
       <ImageWrapper>
        <img src = {`${LoadPic}`} width='50%' height='50%' alt='rfs'/>
        <p>Нажмите здесь, чтобы загрузить изображение в формате jpeg или png</p>
       </ImageWrapper>
       :
       <span>321</span>
      }
    </div>
  )
}

export default ImageContainer
