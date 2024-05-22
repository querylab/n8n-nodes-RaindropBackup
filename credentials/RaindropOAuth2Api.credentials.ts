import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class RaindropOAuth2Api implements ICredentialType {
	name = 'raindropOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'Raindrop OAuth2 API';

	documentationUrl = 'https://example.com/docs/auth'; // Cambia la URL a una válida

	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://raindrop.io/oauth/authorize',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://api.raindrop.io/v1/oauth/access_token',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
		},
	];
}
