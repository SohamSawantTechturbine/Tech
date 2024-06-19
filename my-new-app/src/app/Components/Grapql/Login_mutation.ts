import { gql, useMutation } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      message
      user {
        id
        Name
        File
        # Add other user fields as needed
      }
      token 
      refreshToken
    }
  }
`;
export const REFRESH_TOKEN_MUTATION = gql`
  mutation refreshToken($token: String!) {
    refreshToken(token: $token) {
      message
      user {
        id
        Name
        Email
      }
      token
      refreshToken
    }
  }
`;

export const useRefreshToken = () => {
  const [refreshToken] = useMutation(REFRESH_TOKEN_MUTATION);
  
  const refresh = async () => {
    const token = localStorage.getItem('refreshToken');
    if (!token) {
      throw new Error('No refresh token found');
    }

    const { data } = await refreshToken({ variables: { token } });
    localStorage.setItem('token', data.refreshToken.token);
    localStorage.setItem('refreshToken', data.refreshToken.refreshToken);
  }
};