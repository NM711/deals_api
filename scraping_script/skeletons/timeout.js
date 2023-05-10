module.exports.timeout = async (time) => {
  console.log('Timeout Resolved')
  await new Promise(resolve => setTimeout(resolve, time))
}
