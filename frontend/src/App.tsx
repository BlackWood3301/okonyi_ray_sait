import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Box, CircularProgress } from '@mui/material';
import axios from 'axios';

function App() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Отправляем запрос к серверу...');
        const response = await axios.get('https://okonyi-ray-sait.onrender.com/test');
        console.log('Получен ответ:', response.data);
        setData(response.data);
        setLoading(false);
      } catch (err: any) {
        console.error('Подробности ошибки:', err);
        const errorMessage = err.response 
          ? `Ошибка ${err.response.status}: ${err.response.statusText}` 
          : err.message || 'Неизвестная ошибка';
        setError(`Произошла ошибка при загрузке данных: ${errorMessage}`);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Тестовое приложение
        </Typography>
        
        <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
          {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : error ? (
            <Box>
              <Typography color="error" gutterBottom>
                {error}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Пожалуйста, проверьте, что:
                1. Сервер https://okonyi-ray-sait.onrender.com работает
                2. Эндпоинт /test существует и доступен
                3. CORS настроен на сервере
              </Typography>
            </Box>
          ) : (
            <Typography component="pre" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {JSON.stringify(data, null, 2)}
            </Typography>
          )}
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
