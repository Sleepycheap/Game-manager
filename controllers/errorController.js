export async function renderError(req, res, err) {
  console.log(`Err: ${err}`);
  const {detail} = err;
  res.render('error', {
    title: 'Error',
    error: detail
  })
}