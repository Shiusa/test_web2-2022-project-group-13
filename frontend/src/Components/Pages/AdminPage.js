/* eslint-disable */

// import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

// var currentTab = 0;
const AdminPage = async() => {
  clearPage();
  const response = await fetch('/api/admin');
  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const quiz = await response.json();
  console.log(quiz);
  renderUnverifiedQuizList(quiz);
  // showTab(currentTab);
};

function renderUnverifiedQuizList(quiz) {
  const main = document.querySelector('main');

  const wrapper = document.createElement('div');
  wrapper.style = 'padding: 25px 17% 25px; background-color: lightgrey;';
  // wrapper.className = 'vh-100';
  wrapper.classList.add('container');

  const row = document.createElement('div');
  row.classList.add('row');

  const leftTab = document.createElement('div');
  leftTab.classList.add('col-2', 'btn-group-vertical');
  const rightTab = document.createElement('div');
  rightTab.classList.add('col-10');

  const aVerifier = document.createElement('a');
  aVerifier.classList.add('btn', 'btn-primary');
  aVerifier.textContent = "à vérifier";
  const tousLesQuiz = document.createElement('a');
  tousLesQuiz.classList.add('btn', 'btn-primary');
  tousLesQuiz.textContent = "tous les quiz";

  quiz.forEach(element => {
    // element.isVerified = false;
    const quizLink = document.createElement('a');
    quizLink.className = "btn btn-primary"
    const pointer = element.id;
    console.log("pointer "+pointer);
    quizLink.addEventListener('click', async () =>{
      const pointer = element.id;
      await fetch(`/api/admin/remove/${pointer}`);
      console.log()
      Navigate("/admin");
    });
    quizLink.textContent = element.quizName;
    const quizElement = document.createElement('div');
    quizLink.appendChild(quizElement);
    rightTab.appendChild(quizLink);
    console.log("question: "+ element.isVerified);
  });
  console.log("quiz2 "+JSON.stringify(quiz));

  

  leftTab.appendChild(aVerifier);
  leftTab.appendChild(tousLesQuiz);
  row.appendChild(leftTab);
  row.appendChild(rightTab);
  wrapper.appendChild(row);
  main.appendChild(wrapper);
}

function renderVerifiedQuizList(quiz) {
    const main = document.querySelector('main');
  
    const wrapper = document.createElement('div');
    wrapper.style = 'padding: 25px 17% 25px; background-color: lightgrey;';
    // wrapper.className = 'vh-100';
    wrapper.classList.add('container');
  
    const row = document.createElement('div');
    row.classList.add('row');
  
    const leftTab = document.createElement('div');
    leftTab.classList.add('col-2', 'btn-group-vertical');
    const rightTab = document.createElement('div');
    rightTab.classList.add('col-10');
  
    const aVerifier = document.createElement('a');
    aVerifier.classList.add('btn', 'btn-primary');
    aVerifier.textContent = "à vérifier";
    const tousLesQuiz = document.createElement('a');
    tousLesQuiz.classList.add('btn', 'btn-primary');
    tousLesQuiz.textContent = "tous les quiz";
  
    quiz.forEach(element => {
      // element.isVerified = false;
      const quizLink = document.createElement('a');
      quizLink.className = "btn btn-primary"
      const pointer = element.id-1;
      console.log("pointer "+pointer);
      quizLink.addEventListener("click", async () =>{
        const pointer = element.id;
        await fetch(`api/admin/remove/'+${pointer}`);
        console.log()
        Navigate("/admin");
      });
      quizLink.textContent = element.quizName;
      const quizElement = document.createElement('div');
      quizLink.appendChild(quizElement);
      rightTab.appendChild(quizLink);
      console.log("question: "+ element.isVerified);
    });
    console.log("quiz2 "+JSON.stringify(quiz));
  
    
  
    leftTab.appendChild(aVerifier);
    leftTab.appendChild(tousLesQuiz);
    row.appendChild(leftTab);
    row.appendChild(rightTab);
    wrapper.appendChild(row);
    main.appendChild(wrapper);
  }

export default AdminPage;
