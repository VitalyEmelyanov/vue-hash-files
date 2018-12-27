export default ({Vue}) => Vue.filter('fileType', value => String(value).split('.').pop().toUpperCase());
