import { INodeProperties } from 'n8n-workflow';

export const backupOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['backup'],
			},
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many backups',
				routing: {
					request: {
						method: 'GET',
						url: '/rest/v1/backups',
					},
				},
			},
			{
				name: 'Generate New Backup',
				value: 'generate',
				action: 'Generate a new backup',
				routing: {
					request: {
						method: 'GET',
						url: '/rest/v1/backup',
					},
				},
			},
			{
				name: 'Get User',
				value: 'getUser',
				action: 'Get currently authenticated user details',
				routing: {
					request: {
						method: 'GET',
						url: '/rest/v1/user',
					},
				},
			},
		],
		default: 'getAll',
	},
];

const getAllOperation: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'hidden',
		default: 'getAll',
	},
];

const generateOperation: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'hidden',
		default: 'generate',
	},
];

export const backupFields: INodeProperties[] = [
	...getAllOperation,
	...generateOperation,
];
