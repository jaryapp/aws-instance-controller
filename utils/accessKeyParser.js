export default function accessKeyParser(config) {
  const lines = config.split('\n');

  const accessKeyId = lines[1].replace('aws_access_key_id=', '');
  const secretAccessKey = lines[2].replace('aws_secret_access_key=', '');
  const sessionToken = lines[3].replace('aws_session_token=', '');

  return {
    accessKeyId,
    secretAccessKey,
    sessionToken,
  };
}
