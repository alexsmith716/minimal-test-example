import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';


const region = process.env.NEXT_PUBLIC_S3_REGION;

const s3Client = new S3Client({
	region,
	credentials: fromCognitoIdentityPool({
		client: new CognitoIdentityClient({ region }),
		identityPoolId: process.env.NEXT_PUBLIC_S3_BUCKET_IP_ID!,
	}),
});

const getFetchMe = new GetObjectCommand({
	Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
	Key: process.env.NEXT_PUBLIC_S3_BUCKET_KEY,
});

export async function fetchMe() {
	console.log('+++ fetchMe +++');
	try {
		const response = await s3Client.send(getFetchMe);
		const stream = response.Body as ReadableStream;
		console.log('+++ fetchMe > stream: ', response);
		return Promise.resolve({ result: "Hello" });

	} catch (error) {
		return Promise.reject({ result: 'Error when attempting to fetch resource.' });
	}
}
