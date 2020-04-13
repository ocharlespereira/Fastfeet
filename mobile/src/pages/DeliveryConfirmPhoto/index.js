/* eslint-disable no-undef */
import React, { useRef, useState } from 'react';

import api from '~/services/api';

import {
  Container,
  Background,
  Content,
  CameraWrapper,
  Camera,
  Button,
} from './styles';

export default function DeliveryConfirmPhoto() {
  const cameraRef = useRef(null);
  const [pictureUri, setPictureUri] = useState('');

  async function handleSubmit() {
    const dataFile = new FormData();
    dataFile.append('file', {
      type: 'image/jpg',
      uri: pictureUri,
      name: 'assignature.jpg',
    });

    await api.post('signatures', dataFile);
  }

  async function handlePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      await setPictureUri(data.uri);
      await handleSubmit();
    }
  }
  return (
    <Container>
      <Background />
      <Content>
        <CameraWrapper>
          <Camera ref={cameraRef} type="back" captureAudio={false} />
        </CameraWrapper>
        <Button onPress={handlePicture} loading={false}>
          Enviar
        </Button>
      </Content>
    </Container>
  );
}
