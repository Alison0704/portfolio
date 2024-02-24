let index = 0;
const skillName = new Array("...",'VHDL/Verilog','Electronics Testing and measurements',"VLSI Design","PCB and Circuit Design", "MATLAB/Simulink","Wireshark,Kali linux","Front-end:HTML,CSS,Javascript","Engines:Android Studio,Unity", "Language:Python,Java,C,C#","Musescore","Soprano","FLStudio", "Art Program:Clip Studio Paint","Art Studies:Character Design","My Family","My Friends");
window.onload = function(){
    document.body.addEventListener('click', updateCount());
    brainVisual(); 
};

function brainVisual() {
    internalIndex = 1;
    document.getElementsByName("brain_component").forEach(element => { 
        internalIndex = internalIndex + 1;
        if (element.classList.contains('img_front')) { element.classList.remove('img_front') }
        if (internalIndex === (index%17)) {element.classList.add('img_front') }
     });
    //abc[brainPartIndex].classList.add('img_front');
};

function updateCount(){
    document.getElementById("section-name").innerHTML = skillName[index%17];
    index = index + 1 ;
    brainVisual();
};