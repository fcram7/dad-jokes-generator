const getDadJoke = async () => {
  const response = await fetch('https://geek-jokes.sameerkumar.website/api?format=json', {
    method: 'GET'
  });

  const responseJson = await response.json();

  return responseJson;
}

export { getDadJoke }