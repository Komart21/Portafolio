(function(){
  const setLight = () => {
    document.documentElement.style.setProperty('--bg', '#f7f8fb');
    document.documentElement.style.setProperty('--card', '#ffffff');
    document.documentElement.style.setProperty('--surface', '#f2f4f8');
    document.documentElement.style.setProperty('--text', '#0b0d10');
    document.documentElement.style.setProperty('--muted', '#3d4b5a');
    document.documentElement.style.setProperty('--brand', '#0b5fff');
    document.documentElement.style.setProperty('--brand-2', '#66a3ff');
    document.documentElement.style.setProperty('--border', 'rgba(0,0,0,.10)');
  };
  const setDark = () => {
    document.documentElement.style.setProperty('--bg', '#0b0d10');
    document.documentElement.style.setProperty('--card', '#151a20');
    document.documentElement.style.setProperty('--surface', '#0f1318');
    document.documentElement.style.setProperty('--text', '#e8eef5');
    document.documentElement.style.setProperty('--muted', '#a5b2c2');
    document.documentElement.style.setProperty('--brand', '#6bc2ff');
    document.documentElement.style.setProperty('--brand-2', '#8c7bff');
    document.documentElement.style.setProperty('--border', 'rgba(255,255,255,.10)');
  };

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(!prefersDark){ setLight(); document.body.dataset.theme='light'; }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', ()=>{
      const isDark = document.body.dataset.theme !== 'light';
      if(isDark){
        setLight();
        document.body.dataset.theme = 'light';
      }else{
        setDark();
        document.body.dataset.theme = 'dark';
      }
    });
  }

  const go = (sel) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({behavior:'smooth'});
  };
  const goProjects = document.getElementById('goProjects');
  const goProcess = document.getElementById('goProcess');
  const goContact = document.getElementById('goContact');
  if (goProjects) goProjects.addEventListener('click', ()=>go('#proyectos'));
  if (goProcess) goProcess.addEventListener('click', ()=>go('#proceso'));
  if (goContact) goContact.addEventListener('click', ()=>go('#contacto'));
})();