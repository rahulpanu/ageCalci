const open = document.querySelector(".open_icon");
const setContent = document.querySelector(".set_content");
const container = document.querySelector(".container");
const ageCal = document.querySelector(".age_cal");
const input = document.querySelector("input");
const year = document.querySelector(".year");
const month = document.querySelector(".month");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

let DOB = null;
 
toggle = () => {
        setContent.classList.toggle("hide")
}

const updateAge = () => {
    const currentDate = new Date ();
    
    const diff = currentDate - DOB
    const yr = Math.floor(diff/(1000*60*60*24*365))
    const months = Math.floor((diff/(1000*60*60*24*365))%12);
        const d = Math.floor(diff/(1000*60*60*24)%30);
        const hr = Math.floor(diff/(1000*60*60)%24);
        const m = Math.floor(diff/(1000*60)%60);
        const s = Math.floor(diff/(1000)%60);
    
        year.innerHTML = yr;
        month.innerHTML = months;
        day.innerHTML = d;
        hour.innerHTML = hr;
        min.innerHTML = m;
        sec.innerHTML = s;
    }

setDate = () => {
    DOB = new Date(input.value);
    container.classList.toggle("hide");
    ageCal.classList.toggle("hide");
    setInterval(() => {
        updateAge();
    },1000)
}
        
    
    
