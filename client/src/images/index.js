
function importAll(r) {
    return r.keys().map(r);
}
  
export default importAll(require.context('./', false, /\.(JPG)$/));