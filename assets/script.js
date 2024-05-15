const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', ()=> tabCkicked(tab)));

const tabCkicked = (tab) =>{

    tabs.forEach(tab => tab.classList.remove('active'));
    const contents = document.
    querySelectorAll('.content');

    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');

    const content = document.getElementById(contentId);
    
    tab.classList.add('active');
   content.classList.add('show');
  
}