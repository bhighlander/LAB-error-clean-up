import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import { startSortingBtn } from '../components/sortStudentFunction';
import events from '../components/events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

export default startApp;
