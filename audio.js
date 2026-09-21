(() => {
  const OFFICIAL_BASE = 'https://chhoetaigi.github.io/KipSutianDataMirror/public/20260912-0758/imtong/sutiau/';
  const TTS_BASE = 'https://hapsing.ithuan.tw/bangtsam?taibun=';
  let player, dock, titleEl, sourceEl, statusEl, closeBtn;
  let errorFallback = null;
  const $ = id => document.getElementById(id);
  const normalize = text => String(text || '').normalize('NFC').trim();
  function mount() {
    player=$('audioPlayer'); dock=$('audioDock'); titleEl=$('audioTitle'); sourceEl=$('audioSource'); statusEl=$('audioStatus'); closeBtn=$('audioClose');
    if(!player||!dock)return;
    player.addEventListener('playing',()=>{statusEl.textContent='再生中';statusEl.dataset.kind='playing'});
    player.addEventListener('ended',()=>{statusEl.textContent='再生完了';statusEl.dataset.kind='done'});
    player.addEventListener('error',()=>{
      if(errorFallback){const f=errorFallback;errorFallback=null;playSynth(f.pron,f.label,{reason:'公式音声を取得できなかったため合成音声へ切替'});return;}
      statusEl.textContent='音声を再生できませんでした。通信状況や提供元の利用状況をご確認ください。';statusEl.dataset.kind='error';
    });
    closeBtn?.addEventListener('click',()=>{player.pause();dock.hidden=true});
  }
  function showDock(label,source,status='読み込み中…'){if(!dock)mount();if(!dock)return;titleEl.textContent=label;sourceEl.textContent=source;statusEl.textContent=status;statusEl.dataset.kind='loading';dock.hidden=false;}
  function start(url,{label,source,fallback=null}={}) {
    if(!player)mount(); if(!player)return; errorFallback=fallback; showDock(label,source); player.pause(); player.src=url; player.load();
    const pending=player.play(); if(pending?.catch)pending.catch(()=>{statusEl.textContent='再生ボタンをタップしてください。';statusEl.dataset.kind='ready'});
  }
  function officialRecord(word){return (window.AUDIO_MAP&&window.AUDIO_MAP[String(word.id)])||null}
  function playWord(word){
    if(!word)return; const rec=officialRecord(word);
    if(rec?.f){
      const readingNote=rec.p&&normalize(rec.p)!==normalize(word.pron)?`／教育部主音読 ${rec.p}`:'';
      start(OFFICIAL_BASE+encodeURIComponent(rec.f),{label:`${word.tw} — ${word.jp}`,source:`教育部《臺灣台語常用詞辭典》真人音声${readingNote}`,fallback:{pron:word.pron,label:`${word.tw} — ${word.jp}`}});
    }else playSynth(word.pron,`${word.tw} — ${word.jp}`,{reason:'教育部の対応音声が見つからない語'});
  }
  function playSynth(pron,label='台湾語 合成参考音',{reason=''}={}) {
    const tailo=normalize(pron).replace(/\s*\.\.\.\s*/g,' '); if(!tailo)return;
    start(TTS_BASE+encodeURIComponent(tailo),{label,source:`意傳科技「媠聲」合成参考音${reason?`（${reason}）`:''}`});
  }
  function stop(){if(!player)return;player.pause();player.currentTime=0}
  window.TaigiAudio={mount,playWord,playSynth,stop};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();
