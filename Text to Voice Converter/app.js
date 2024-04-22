const tex = document.querySelector("textarea");
const btn = document.querySelector("button");
const select = document.querySelector('select');
const speech = new SpeechSynthesisUtterance();

let voices = [];
window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i)=>(select.options[i] = new Option(voice.name, i)));
};
select.addEventListener('change', ()=>{
    speech.voice = voices[select.value];
});
btn.addEventListener('click', ()=>{
    speech.text = tex.value;
    window.speechSynthesis.speak(speech);
});