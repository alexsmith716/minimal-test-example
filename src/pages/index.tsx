import Head from 'next/head';
import Link from 'next/link';

export default function IndexPage() {
	return (
		<div>
			<Head>
				<title>Test</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				Index Page
				<br/>
				<br/>
				<Link href="/test">
					<a>Test</a>
				</Link>
			</div>
		</div>
	)
}
