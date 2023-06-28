/**
 * Receives a path or url and return an object with therequested configuration
 * @param {string} pathOrUrl - The string conteining the file name to a JSON or a URL to fecth data.
 * @param {object} fetchOpts - If is a URL, you can pass options Objct to request data from server.
 * @returns {object} - An object with the requested data.
 */
async function getConfigData(pathOrUrl, fetchOpts=null) {
  const BASE_DATA_PATH = '../../data/';
  const file = !pathOrUrl.includes('http') ? BASE_DATA_PATH + pathOrUrl : null;

  console.log('pathORURL', path, ' file:', file)

  const data = await fetch(
    file ?? pathOrUrl, 
    {...fetchOpts}
  )
    .then(response => {
      if (response.ok) return response.json()
    })
    .catch(err => console.error("Erro ao tentar obter as configurações", err));

  return data
}

/**
 * Receives a payload data from form as JSON and save it at datafolder.
 * @param {JSON} payload - the payload data received from th form, as a JSON.
 * @returns {Boolean}
 */
async function saveFormData(payload) {
  const success = await setTimeout(() => {
    console.log("fetching data from server...");
    console.log("Saved payload: ", payload);

    return true;
  }, 3000)

  return success
}

export { getConfigData, saveFormData }