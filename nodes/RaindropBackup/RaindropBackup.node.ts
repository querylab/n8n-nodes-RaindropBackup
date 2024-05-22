import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { backupFields, backupOperations } from './RaindropBackupDescription';

export class RaindropBackup implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Raindrop Backup',
		name: 'raindropBackup',
		icon: 'file:rainbackup.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Raindrop API for backups',
		defaults: {
			name: 'Raindrop Backup',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'raindropOAuth2Api', // Aquí cambia el nombre de la credencial
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.raindrop.io',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Backup',
						value: 'backup',
					},
				],
				default: 'backup',
			},
			...backupOperations,
			...backupFields,
		],
	};
}
