(()=>{
  const button=document.querySelector('#language');
  if(!button)return;
  const pages={
    'healthops-intelligence.html':{en:'HealthOps Intelligence · RemoteCareer Lab',es:'HealthOps Intelligence · RemoteCareer Lab',descriptionEn:'HealthOps Intelligence: a fictional operations platform built with Python, SQLite, HTML, CSS and JavaScript',descriptionEs:'HealthOps Intelligence: plataforma ficticia de operaciones hecha con Python, SQLite, HTML, CSS y JavaScript'},
    'data-cleaner.html':{en:'CSV Data Cleaner · RemoteCareer Lab',es:'Limpiador de CSV · RemoteCareer Lab',descriptionEn:'CSV Data Cleaner project notes',descriptionEs:'Notas del proyecto Limpiador de CSV'},
    'job-tracker.html':{en:'Job Tracker · RemoteCareer Lab',es:'Seguimiento de candidaturas · RemoteCareer Lab',descriptionEn:'Local SQLite job application tracker project notes',descriptionEs:'Notas del registro local de candidaturas con SQLite'},
    'additional-work.html':{en:'Project Notes · RemoteCareer Lab',es:'Proyectos · RemoteCareer Lab',descriptionEn:'Documentation for additional RemoteCareer Lab projects',descriptionEs:'Documentación de proyectos adicionales de RemoteCareer Lab'}
  };
  const pageKey=location.pathname.split('/').pop();
  const page=pages[pageKey]||pages['additional-work.html'];
  let language='en';
  function render(){
    const spanish=language==='es';
    document.documentElement.lang=language;
    document.title=spanish?page.es:page.en;
    const description=document.querySelector('meta[name="description"]');
    if(description)description.content=spanish?page.descriptionEs:page.descriptionEn;
    document.querySelectorAll('[data-lang="en"]').forEach(node=>node.hidden=spanish);
    document.querySelectorAll('[data-lang="es"]').forEach(node=>node.hidden=!spanish);
    document.querySelectorAll('[data-en][data-es]').forEach(node=>node.textContent=node.dataset[language]);
    button.textContent=spanish?'EN ↗':'ES ↗';
    button.setAttribute('aria-label',spanish?'Switch language to English':'Cambiar idioma a español');
    if(pageKey==='additional-work.html'){
      for(const id of ['business-dashboard','automation-toolkit','task-api','inventory','qa-lab']){
        const en=document.querySelector('[data-lang="en"] [data-anchor="'+id+'"]');
        const es=document.querySelector('[data-lang="es"] [data-anchor="'+id+'"]');
        if(en&&es){en.id=spanish?'':id;es.id=spanish?id:'';}
      }
    }
  }
  button.addEventListener('click',()=>{language=language==='en'?'es':'en';try{localStorage.setItem('portfolio-language',language);}catch{}render();});
  try{if(localStorage.getItem('portfolio-language')==='es')language='es';}catch{}
  render();
})();
