/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useRoute } from '@react-navigation/native';

import previewImage from '~/assets/preview.png';
import Camera from '~/components/Camera';
import api from '~/services/api';

import {
  Container,
  Background,
  Content,
  Preview,
  CameraButton,
  SendButton,
} from './styles';

export default function ConfirmDelivery({ navigation }) {
  const route = useRoute();
  const { orders } = route.params;
  const [cameraOpen, setCameraOpen] = useState(false);
  const [preview, setPreview] = useState('');
  const [fileId, setFileId] = useState(-1);

  function loadPreview(previewId, previewUri) {
    setFileId(previewId);
    setPreview(previewUri);
    setCameraOpen(false);
  }

  async function handleSubmit() {
    if (fileId === -1) {
      Alert.alert(
        'Campos obrigatórios não preenchidos',
        'Por favor, inclua uma foto da assinatura do destinatário!'
      );
    } else {
      try {
        await api.put(
          `/delivery/${orders.deliveryman_id}/orders/${orders.id}/finish`,
          {
            end_date: new Date(),
            signature_id: fileId,
          }
        );
        navigation.push('Entregas');
        Alert.alert(
          'Entrega confirmada',
          'A entrega foi confirmada com sucesso!!!'
        );
      } catch (error) {
        Alert.alert(
          'Erro ao confirmar entrega',
          'Não foi possível confirmar a entrega!'
        );
      }
    }
  }

  if (cameraOpen) return <Camera loadPreview={loadPreview} />;

  return (
    <Container>
      <Background />
      <Content>
        <Preview
          source={preview.length === 0 ? previewImage : { uri: preview }}
        />
        <CameraButton onPress={() => setCameraOpen(true)}>
          <Icon name="photo-camera" size={36} style={{ color: 'white' }} />
        </CameraButton>
        <SendButton onPress={handleSubmit}>Enviar</SendButton>
      </Content>
    </Container>
  );
}
