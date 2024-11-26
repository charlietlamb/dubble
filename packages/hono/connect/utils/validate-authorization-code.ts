import { OAuthTokens } from '../types'
import { BetterAuthError } from 'better-auth'

export async function validateAuthorizationCode(params: {
  code: string
  clientId: string
  clientSecret: string
  redirectURI: string
  tokenEndpoint: string
}): Promise<OAuthTokens> {
  const response = await fetch(params.tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: params.code,
      client_id: params.clientId,
      client_secret: params.clientSecret,
      redirect_uri: params.redirectURI,
    }),
  })

  if (!response.ok) {
    throw new BetterAuthError(
      `Failed to validate authorization code: ${response.status}`
    )
  }

  const data = await response.json()

  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    idToken: data.id_token,
    expiresAt: data.expires_in
      ? new Date(Date.now() + data.expires_in * 1000)
      : undefined,
  }
}
