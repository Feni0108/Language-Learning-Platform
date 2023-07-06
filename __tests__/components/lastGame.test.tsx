import fetchMock from 'fetch-mock-jest';
import { lastGame } from '../../components/lastGame';

afterEach(() => {
  fetchMock.reset();
});

describe('lastGame', () => {
  const userId = '12345';

  it('should return the response data on successful fetch', async () => {
    const mockResponse = { id: userId };

    fetchMock.post('/api/lastGame', {
      body: mockResponse,
      headers: { 'content-type': 'application/json' },
    });

    const result = await lastGame(userId);

    expect(result).toEqual(mockResponse);
    expect(fetchMock).toHaveBeenCalledWith('/api/lastGame', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: userId,
      }),
    });
  });

  it('should handle the error case', async () => {
    fetchMock.post('/api/lastGame', 500); 
    
    try {
      await lastGame(userId);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});