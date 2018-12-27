import {format} from 'quasar';

const {humanStorageSize} = format;

export default ({Vue}) => Vue.filter('fileSize', humanStorageSize);
