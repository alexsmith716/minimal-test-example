# Minimal test example

https://github.com/aws/aws-sdk-js-v3/issues/4067

Navigate to `http://localhost:3000/test` and will see the new error (it is actually a warning for me).

I am using the same Cognito Identity Pool being used here as here: `https://portfolio-alexsmith716.vercel.app/awss3`

Warning received:

`warn  - ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
Should not import the named export 'partitions'.'find' (imported as 'partitions') from default-exporting module (only default export is available soon)`
